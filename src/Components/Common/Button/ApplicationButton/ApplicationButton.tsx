import { Right } from '@/Assets';
import styled from 'styled-components';

export const ApplicationButton = () => {
  return (
    <ButtonBox>
      <ButtonText>더보기</ButtonText>
      <Right />
    </ButtonBox>
  );
};

const ButtonBox = styled.button`
  display: inline-flex;
  padding: 12px 16px 12px 24px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  border-radius: ${({ theme }) => theme.borderRadius.small};
`;

const ButtonText = styled.span`
  color: ${({ theme }) => theme.color.black3};
  text-align: center;
  font-family: Pretendard600;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 1;

  &:hover {
    color: ${({ theme }) => theme.color.black4};
  }
`;
