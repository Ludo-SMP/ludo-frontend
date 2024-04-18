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
    const customStyles: StylesConfig<Option<unknown, unknown>> = useMemo(
      () => ({
        control: () => ({
          width: '100%',
          padding: '7px 16px',
          border: '1px solid rgba(0, 0, 0, 0.10)',
          borderRadius: '8px',
          background: 'white',
          fontFamily: 'Pretendard400',
          fontSize: '16px',
          cursor: 'pointer',
        }),
        option: (provided, state) => {
          const { data, isSelected } = state;
          return {
            ...provided,
            color: isSelected ? '#000000D9' : '#000000A6',
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
        menu: (provided) => ({
          ...provided,
          marginTop: '10px',
          boxShadow: '0px 4px 10px 0px #0000001A',
          borderRadius: '8px',
        }),
        placeholder: (provided) => ({
          ...provided,
          color: '#00000073',
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
          placeholder={placeholder ?? ''}
          options={values}
          onChange={(newValue: Option<unknown, unknown>, actionMeta: ActionMeta<Option<unknown, unknown>>) =>
            onChange(newValue['value'], actionMeta)
          }
          styles={customStyles}
          components={{
            IndicatorsContainer: () => null,
          }}
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
