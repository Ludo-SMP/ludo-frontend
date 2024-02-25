<<<<<<< HEAD
=======
import { media } from '@/Styles/theme';
>>>>>>> 622a1649988450510ff9876a2c8500717f7d097b
import styled from 'styled-components';

export interface InfoFieldProps {
  title: string;
<<<<<<< HEAD
  content: string;
=======
  content: string | number;
>>>>>>> 622a1649988450510ff9876a2c8500717f7d097b
  width?: string;
  titleWidth?: string;
  contentWidth?: string;
  flexDirection?: string;
  gap?: string;
}

<<<<<<< HEAD
export const InfoField = ({ width, titleWidth, contentWidth, title, content, flexDirection, gap }: InfoFieldProps) => {
=======
export const InfoField = ({
  width = 'auto',
  titleWidth,
  contentWidth,
  title,
  content,
  flexDirection,
  gap,
}: InfoFieldProps) => {
>>>>>>> 622a1649988450510ff9876a2c8500717f7d097b
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
<<<<<<< HEAD
  gap: ${(props) => props.gap || '24px'};
=======
  gap: ${(props) => (props.flexDirection ? '4px' : '24px')};
>>>>>>> 622a1649988450510ff9876a2c8500717f7d097b
  font-size: ${(props) => props.theme.font.medium};
  font-weight: 500;
  line-height: 40px;

  .field {
    &__title {
      text-align: start;
<<<<<<< HEAD
      width: ${(props) => (props.flexDirection ? 'column' : props.width || '184px')};
      color: ${(props) => props.theme.color.black4};
    }

    &__content {
      width: ${(props) => (props.flexDirection ? 'column' : props.width || '392px')};
=======
      width: ${(props) => props.flexDirection || '184px'};
      color: ${(props) => props.theme.color.black4};
      ${media.tablet} {
        width: auto;
      }
    }

    &__content {
>>>>>>> 622a1649988450510ff9876a2c8500717f7d097b
      color: ${(props) => props.theme.color.black2};
    }
  }
`;
