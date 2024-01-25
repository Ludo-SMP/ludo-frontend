//header.tsx
import styled from 'styled-components';
import { StudyButton } from '../Button/StudyButton';
import { Alarm } from '../../Assets/Alarm';
import { Profile } from '../../Assets/Profile';


export const Header = () => {
  return (
    <HeaderContainer>
      <HeadTopBox>
        <HeadTopWrapper>
          <HeadTopItem>
            <StudyButton onClick={() => onclick}>내가 지원한 스터디</StudyButton>
          </HeadTopItem>
          <HeadTopItem>
            <StudyButton onClick={() => onclick}>참여중인 스터디</StudyButton>
          </HeadTopItem>
          <HeadTopItem>
            <StudyButton onClick={() => onclick}>완료한 스터디</StudyButton>
          </HeadTopItem>
          <HeadTopItem>
            <Alarm />
          </HeadTopItem>
        </HeadTopWrapper>
      </HeadTopBox>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.section`
  height: 160px;
  background-color: ${({ theme }) => theme.color.white};
  display: flex;
  flex-direction: column;
  margin-bottom: 40px;
`;
// Header 윗부분
const HeadTopBox = styled.span`
  width: 100%;
  padding-left: 1080px;
  align-items: center;
`;
const HeadTopWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 60px;
  padding-top: 60px;
  margin: 0 auto;
`;
const HeadTopItem = styled.span`
  padding-right: 20px;
`;