import styled from 'styled-components';
import { LeftArrow } from '../../Assets/LeftArrow';
import { SmallButton } from './HeaderButton/SmallButton';
import { MediumButton } from './HeaderButton/MediumButton';

export const BackHeader = () => {
  return (
    <BackHeaderContainer>
      <BackWrapper>
        <LeftArrow />
      </BackWrapper>
      <ButtonWrapper>
        <BackHeaderItem>
          <SmallButton>로그인</SmallButton>
        </BackHeaderItem>
        <BackHeaderItem>
          <SmallButton>회원가입</SmallButton>
        </BackHeaderItem>
        <BackHeaderItem>
          <SmallButton>문의하기</SmallButton>
        </BackHeaderItem>
        <BackHeaderItem>
          <MediumButton>스터디 생성하기</MediumButton>
        </BackHeaderItem>
      </ButtonWrapper>
    </BackHeaderContainer>
  );
};

const BackHeaderContainer = styled.section`
  display: flex;
  height: 160px;
  background-color: ${({ theme }) => theme.color.gray1};
`;
const BackWrapper = styled.div`
  padding-top: 82px;
  padding-left: 348px;
`;

const ButtonWrapper = styled.span`
  flex-direction: row;
  width: 100%;
  padding-left: 513px;
  padding-right: 348px;
  padding-top: 80px;
  align-items: center;
  margin: 0 auto;
`;

const BackHeaderItem = styled.span`
  padding-right: 20px;
`;
