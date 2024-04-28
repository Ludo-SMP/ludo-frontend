import { forwardRef, useMemo } from 'react';
import Select, { ActionMeta, GroupBase, MultiValue, Props, SelectInstance, StylesConfig } from 'react-select';
import styled from 'styled-components';
import { Option } from '@/Types/study';
import { theme } from '@/Styles/theme';
/**
 * @description { value: string, label: string } 으로 들어와야 합니다.
 * - ex) { value: "1", label: "백엔드" }
 */

export type SelectProps = Props & {
  values?: Option<unknown, unknown>[];
  label?: string;
  placeholder?: string;
  defaultValue?: any;
  isMulti?: boolean;
};

const CustomSelect = forwardRef<
  SelectInstance<Option<unknown, unknown>, boolean, GroupBase<Option<unknown, unknown>>>,
  SelectProps
>(({ onChange, values, label, placeholder, defaultValue, isMulti = false }, ref) => {
  const customStyles: StylesConfig<Option<unknown, unknown>> = useMemo(
    () => ({
      control: () => ({
        width: '100%',
        padding: '7px 16px',
        border: `1px solid ${theme.color.black1}`,
        borderRadius: theme.borderRadius.small,
        background: theme.color.white,
        fontFamily: 'Pretendard400',
        fontSize: theme.font.small,
        cursor: 'pointer',
      }),
      option: (provided, { isSelected }) => ({
        ...provided,
        color: isSelected ? theme.color.black3 : theme.color.black4,
        fontFamily: 'Pretendard400',
        fontSize: theme.font.small,
        padding: '8px 8px 8px 16px',
        backgroundColor: isSelected ? theme.color.purple2 : theme.color.white,
        cursor: 'pointer',
        ':active': {
          ...provided[':active'],
        },
        ':hover': {
          ...provided[':hover'],
          backgroundColor: theme.color.purple2,
        },
      }),
      // TODO: 멀티셀렉트 프리뷰 스타일 문의 (피그마 누락)
      // multiValue: (provided) => ({
      //   display: 'flex',
      //   flexDirection: 'row',
      //   color: theme.color.black3,
      //   backgroundColor: 'none',
      //   fontFamily: 'Pretendard400',
      //   border: `1px solid ${theme.color.black2}`,
      //   padding: '1px',
      //   borderRadius: '4px',
      // }),
      // multiValueContainer: () => ({
      //   color: theme.color.black3,
      //   fontFamily: 'Pretendard400',
      // }),
      // multiValueLabel: () => ({
      //   color: theme.color.black3,
      //   backgroundColor: 'none',
      //   fontFamily: 'Pretendard400',
      // }),
      menu: (provided) => ({
        ...provided,
        marginTop: '10px',
        boxShadow: `0px 4px 10px 0px ${theme.color.black1}`,
        borderRadius: theme.borderRadius.small,
      }),
      placeholder: (provided) => ({
        ...provided,
        color: theme.color.black2,
      }),
      valueContainer: (provided) => ({
        ...provided,
        padding: 0,
      }),
      indicatorSeparator: (provided) => ({
        ...provided,
        width: 0,
      }),
    }),
    [],
  );

  return (
    <Label>
      {label}
      <Select
        ref={ref}
        isMulti={isMulti}
        placeholder={placeholder ?? ''}
        options={values}
        defaultValue={defaultValue || 'Select'}
        onChange={(
          newValue: Option<unknown, unknown> | MultiValue<Option<unknown, unknown>>,
          actionMeta: ActionMeta<Option<unknown, unknown>>,
        ) => onChange(newValue, actionMeta)}
        styles={customStyles}
        components={{
          IndicatorsContainer: () => null,
        }}
      />
    </Label>
  );
});

export default CustomSelect;

const Label = styled.label`
  font-family: Pretendard700;
  font-size: 18px;
  font-weight: 700;
  line-height: 20px;
  text-align: left;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;
