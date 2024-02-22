import styled from 'styled-components';

export interface InfoFieldProps {
  title: string;
  content: string | number;
  width?: string;
  titleWidth?: string;
  contentWidth?: string;
  flexDirection?: string;
  gap?: string;
}

export const InfoField = ({
  width = 'auto',
  titleWidth,
  contentWidth,
  title,
  content,
  flexDirection,
  gap,
}: InfoFieldProps) => {
  return (
    <InfoFieldWrapper
      width={width}
      titleWidth={titleWidth}
      contentWidth={contentWidth}
      flexDirection={flexDirection}
      gap={gap}
    >
      <div className="field__title">{title}</div>
      <div className="field__content">{content}</div>
    </InfoFieldWrapper>
  );
};

const InfoFieldWrapper = styled.div<{
  width?: string;
  titleWidth?: string;
  contentWidth?: string;
  flexDirection?: string;
  gap?: string;
}>`
  display: flex;
  flex-direction: ${(props) => props.flexDirection || 'row'};
  width: ${(props) => props.width};
  text-align: start;
  gap: ${(props) => (props.flexDirection ? '4px' : '24px')};
  font-size: ${(props) => props.theme.font.medium};
  font-weight: 500;
  line-height: 40px;

  .field {
    &__title {
      text-align: start;
      color: ${(props) => props.theme.color.black4};
    }

    &__content {
      color: ${(props) => props.theme.color.black2};
    }
  }
`;
