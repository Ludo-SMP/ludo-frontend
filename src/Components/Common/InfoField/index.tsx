import { media } from '@/Styles/theme';
import styled from 'styled-components';

export interface InfoFieldProps {
  title: string;
  content: string | number;
  width?: string;
  titleWidth?: string;
  contentWidth?: string;
  flexDirection?: string;
  gap?: string;
  disabled?: boolean;
}

export const InfoField = ({
  width = 'auto',
  titleWidth,
  contentWidth,
  title,
  content,
  flexDirection,
  gap,
  disabled = false,
}: InfoFieldProps) => {
  return (
    <InfoFieldWrapper
      width={width}
      titleWidth={titleWidth}
      contentWidth={contentWidth}
      flexDirection={flexDirection}
      gap={gap}
      disabled={disabled}
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
  disabled?: boolean;
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
      width: ${(props) => props.flexDirection || '184px'};
      color: ${({ theme, disabled }) => (disabled ? 'rgba(0, 0, 0, 0.25)' : theme.color.black4)};
      ${media.tablet} {
        width: auto;
      }
    }

    &__content {
      color: ${({ theme, disabled }) => (disabled ? 'rgba(0, 0, 0, 0.25)' : theme.color.black2)};
    }
  }
`;
