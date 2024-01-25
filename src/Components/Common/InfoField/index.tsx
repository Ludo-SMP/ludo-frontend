import styled from 'styled-components';

export interface InfoFieldProps {
  title: string;
  content: string;
  titleWidth?: string;
  contentWidth?: string;
}

export const InfoField = ({ titleWidth, contentWidth, title, content }: InfoFieldProps) => {
  return (
    <InfoFieldWrapper titleWidth={titleWidth} contentWidth={contentWidth}>
      <div className="field__title">{title}</div>
      <div className="field__content">{content}</div>
    </InfoFieldWrapper>
  );
};

const InfoFieldWrapper = styled.div<{ titleWidth?: string; contentWidth?: string }>`
  display: flex;
  align-items: center;
  gap: 24px;
  font-size: ${(props) => props.theme.font.medium};
  font-weight: 500;
  line-height: 40px;

  .field {
    &__title {
      width: ${(props) => props.titleWidth || '184px'};
      color: ${(props) => props.theme.color.black4};
    }

    &__content {
      width: ${(props) => props.contentWidth || '392px'};
      color: ${(props) => props.theme.color.black2};
    }
  }
`;
