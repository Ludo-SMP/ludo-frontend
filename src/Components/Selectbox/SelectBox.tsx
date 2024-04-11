import { ComponentProps, forwardRef } from 'react';

// RHF와 호환되는 범용 SelectBox 컴포넌트
export const SelectBox = forwardRef<
  HTMLSelectElement,
  ComponentProps<'select'> & {
    label: string;
    // 선택지로 등장할 값을 키: 표시값 형태의 객체로 전달
    values: Record<string, string>;
  }
>(({ onChange, onBlur, name, label, values }, ref) => {
  return (
    <label>
      {label}
      <select ref={ref} onChange={onChange} onBlur={onBlur} name={name}>
        {Object.entries(values).map(([k, v]) => (
          <option value={k}>{v}</option>
        ))}
      </select>
    </label>
  );
});
