import styled from 'styled-components';

interface LabelTextProps {
  /** 라벨 */
  label: string;

  /** 라벨 하위 내용 */
  text?: string | number;
}

export const LabelText = ({ label, text }: LabelTextProps) => {
  return (
    <LabelTextWrap>
      <label className="label">{label}</label>
      <div className="text">{text || label}</div>
    </LabelTextWrap>
  );
};

const LabelTextWrap = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  .label {
    font-size: 18px;
    line-height: 24px;
    color: #000000f2;
  }

  .text {
    font-size: 18px;
    line-height: 24px;
    color: #00000073;
    margin-top: 12px;
  }
`;
