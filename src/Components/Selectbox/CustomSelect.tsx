import { forwardRef, useMemo } from 'react';
import Select, { ActionMeta, Props, SelectInstance, StylesConfig } from 'react-select';
import styled from 'styled-components';
import { Option } from '@/Types/study';
/**
 * @description { value: string, label: string } 으로 들어와야 합니다.
 * - ex) { value: "1", label: "백엔드" }
 */

export type SelectProps = Props & {
  values?: Option<unknown, unknown>[];
  label?: string;
  placeholder?: string;
};

const CustomSelect = forwardRef<SelectInstance<Option<unknown, unknown>>, SelectProps>(
  ({ onChange, values, label, placeholder }, ref) => {
    const customStyles: StylesConfig<any> = useMemo(
      () => ({
        control: (provided: any, state: any) => ({
          width: '100%',
          padding: '10px 16px',
          border: '1px solid rgba(0, 0, 0, 0.10)',
          borderRadius: '8px',
          background: 'white',
          fontFamily: 'Pretendard400',
          fontSize: '16px',
          cursor: 'pointer',
        }),
        option: (provided: any, state: any) => {
          const { data, isSelected } = state;

          return {
            ...provided,
            color: data.color,
            fontFamily: 'Pretendard400',
            fontSize: '16px',
            padding: '8px 8px 8px 16px',
            backgroundColor: isSelected ? '#EFECFF' : 'white',
            cursor: 'pointer',
            ':active': {
              ...provided[':active'],
              backgroundColor: isSelected ? 'red' : 'pink',
            },
            ':hover': {
              ...provided[':hover'],
              backgroundColor: '#EFECFF',
            },
          };
        },
        menu: (provided: any) => ({
          ...provided,
          marginTop: '10px',
          boxShadow: '0px 4px 10px 0px #0000001A',
          borderRadius: '8px',
        }),

        placeholder: (provided: any) => ({
          ...provided,
          color: '#00000073',
        }),
        indicatorsContainer: (provided: any) => ({
          ...provided,
          display: 'none',
        }),
        valueContainer: (provided: any) => ({
          ...provided,
          padding: 0,
        }),
        indicatorSeparator: (provided: any) => ({
          ...provided,
          width: 0,
        }),
        singleValue: (provided: any, state: any) => ({
          ...provided,
          color: state.data.color,
        }),
      }),
      [],
    );

    return (
      <Label>
        {label}
        <Select
          ref={ref}
          placeholder={placeholder ?? ''}
          options={values}
          onChange={(newValue: Option<unknown, unknown>, actionMeta: ActionMeta<Option<unknown, unknown>>) =>
            onChange(newValue['value'], actionMeta)
          }
          styles={customStyles}
        />
      </Label>
    );
  },
);

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
