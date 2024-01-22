import styled from 'styled-components';

export interface InfoFieldProps {
  title: string;
  content: string;
}

export const InfoField: React.FC<InfoFieldProps> = ({ title, content }) => {
  return (
    <InfoFieldWrapper>
      <div className="field__title">{title}</div>
      <div className="field__content">{content}</div>
    </InfoFieldWrapper>
  );
};

const InfoFieldWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 50%;
  padding: 5px 0;

  .field {
    &__title {
      width: 35%;
      font-size: 18px;
      font-weight: 500;
      color: rgba(0, 0, 0, 0.85);
      line-height: 40px;
    }

    &__content {
      width: 60%;
      font-size: 18px;
      font-weight: 500;
      color: rgba(0, 0, 0, 0.45);
      line-height: 40px;
    }
  }
`;
