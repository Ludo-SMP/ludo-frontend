import { ComponentProps, forwardRef } from 'react';
import styled from 'styled-components';

interface TextAreaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  maxlength?: number;
  currentLength?: number;
}

type Props = ComponentProps<'textarea'> & TextAreaProps;

export const TextArea = forwardRef<HTMLTextAreaElement, Props>(
  ({ onChange, onBlur, placeholder, maxLength, currentLength, ...props }: Props, ref) => {
    return (
      <Box>
        <TextAreaWrapper ref={ref} onChange={onChange} onBlur={onBlur} placeholder={placeholder} {...props} />
        {maxLength && (
          <LengthIndicator>
            {currentLength}/{maxLength}
          </LengthIndicator>
        )}
      </Box>
    );
  },
);

const Box = styled.div`
  position: relative;
  display: flex;
`;

const TextAreaWrapper = styled.textarea`
  width: 100%;
  height: 322px;
  padding: 16px;
  border: 1px solid ${({ theme }) => theme.color.black1};
  border-radius: ${({ theme }) => theme.borderRadius.small};
  font-family: 'Pretendard400';
  color: ${({ theme }) => theme.color.black};
  font-size: ${({ theme }) => theme.font.small};
  background-color: ${(props) => props.theme.color.white};
  line-height: 24px;

  &::placeholder {
    color: ${({ theme }) => theme.color.black2};
  }
`;

const LengthIndicator = styled.div`
  position: absolute;
  bottom: 16px;
  right: 16px;
  font-size: 14px;
  gap: 2px;
  color: ${(props) => props.theme.color.black2};
`;
