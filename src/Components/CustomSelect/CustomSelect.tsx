import { forwardRef, useMemo } from 'react';
import Select, {
  ActionMeta,
  GroupBase,
  MultiValue,
  Props,
  PropsValue,
  SelectInstance,
  StylesConfig,
} from 'react-select';
import styled, { css } from 'styled-components';
import { Option } from '@/Types/study';
import { theme } from '@/Styles/theme';
import { SelectArrow } from '@/Assets/SelectArrow';
/**
 * @description { value: string, label: string } 으로 들어와야 합니다.
 * - ex) { value: "1", label: "백엔드" }
 */

export type SelectProps = Props & {
  /** 옵션 리스트에 들어갈 배열 */
  values?: Option[];

  /** 셀렉트 위에 라벨이 필요한 경우 지정 */
  label?: string;

  /** 미리보기에 임시로 들어갈 텍스트 */
  placeholder?: string;

  /** 초기값 */
  defaultValue?: PropsValue<Option>;

  /** 여러 개 선택 가능 여부 */
  isMulti?: boolean;

  /** 비활성화 여부 */
  isDisabled?: boolean;
};

const CustomSelect = forwardRef<SelectInstance<Option, boolean, GroupBase<Option>>, SelectProps>(
  ({ onChange, values, label, placeholder, defaultValue, isMulti = false, isDisabled }, ref) => {
    const customStyles: StylesConfig<Option> = useMemo(
      () => ({
        control: (provided) => ({
          ...provided,
          display: 'flex',
          alignItems: 'center',
          width: '100%',
          padding: '7px 16px',
          border: `1px solid ${theme.color.black1}`,
          boxShadow: '0',
          borderRadius: theme.borderRadius.small,
          background: theme.color.white,
          fontFamily: 'Pretendard400',
          fontSize: theme.font.small,
          cursor: 'pointer',
          '&:active': {
            border: `1px solid ${theme.color.black1}`,
          },
          '&:focus': {
            border: `1px solid ${theme.color.black1}`,
          },
          '&:hover': {
            border: `1px solid ${theme.color.black1}`,
          },
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
          display: 'flex',
          //height: '24px',
          width: 'auto',
          // maxWidth: '100%',
          whiteSpace: 'nowrap',
          overflow: 'hidden',
        }),
        indicatorSeparator: (provided) => ({
          ...provided,
          width: 0,
        }),
      }),
      [],
    );

    return (
      <Label $isDisabled={isDisabled}>
        {label}
        <Select
          ref={ref}
          isMulti={isMulti}
          placeholder={placeholder ?? ''}
          options={values}
          defaultValue={defaultValue}
          onChange={(newValue: Option | MultiValue<Option>, actionMeta: ActionMeta<Option>) => {
            if (isMulti) {
              return onChange(
                (newValue as { label: unknown; value: unknown }[])?.map((values) => values?.value),
                actionMeta,
              );
            } else return onChange((newValue as { label: unknown; value: unknown })?.value, actionMeta);
          }}
          styles={customStyles}
          isDisabled={isDisabled}
          components={{
            IndicatorsContainer: () => <SelectArrow />,
          }}
        />
      </Label>
    );
  },
);

export default CustomSelect;

const Label = styled.label<{ $isDisabled?: boolean }>`
  font-family: 'Pretendard700';
  font-size: 18px;
  font-weight: 700;
  line-height: 20px;
  text-align: left;
  display: flex;
  flex-direction: column;
  gap: 12px;

  ${({ $isDisabled, theme }) =>
    typeof $isDisabled === 'boolean' &&
    $isDisabled &&
    css`
      color: ${theme.color.black2};
      opacity: 0.65;
    `}
`;
