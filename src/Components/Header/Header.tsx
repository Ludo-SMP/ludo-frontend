//header.tsx
import styled from 'styled-components';
import { FilterButton } from '../Button/FilterButton';
import { StudyButton } from '../Button/StudyButton';
import { Alarm } from '../../Assets/Alarm';
import { Hamberger } from '../../Assets/Hamberger';

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
      <HeadBottomBox>
        <HeadBottomWrapper>
          <HeadBottomItem>
            <Hamberger></Hamberger>
          </HeadBottomItem>
          <HeadBottomItem>
            <FilterButton onClick={() => onclick}>메인페이지</FilterButton>
          </HeadBottomItem>
          <HeadBottomItem>
            <FilterButton onClick={() => onclick}>스터디 모아보기</FilterButton>
          </HeadBottomItem>
          <HeadBottomItem>
            <FilterButton onClick={() => onclick}>스터디 찾아보기</FilterButton>
          </HeadBottomItem>
          <HeadBottomItem>
            <FilterButton onClick={() => onclick}>스터디 문의사항</FilterButton>
          </HeadBottomItem>
        </HeadBottomWrapper>
      </HeadBottomBox>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.section`
  height: 230px;
  background-color: ${({ theme }) => theme.color.white1};
  display: flex;
  flex-direction: column;
  margin-bottom: 40px;
`;
// Header 윗부분
const HeadTopBox = styled.span`
  width: 100%;
  height: 160px;
  border-bottom: 1px solid #444444;
  padding-bottom: 140px;
  padding-left: 800px;
  align-items: center;
  /* padding-top: 60px; */
`;
const HeadTopWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 60px;
  padding-top: 30px;
  margin: 0 auto;
`;
const HeadTopItem = styled.span`
  padding-right: 20px;
`;
// Header 아랫부분
const HeadBottomBox = styled.div`
  width: 100%;
  height: 72px;
  padding-left: 348px;
`;
const HeadBottomWrapper = styled.div`
  flex-direction: row;
  width: 100%;
  height: 60px;
  padding-top: 14px;
  margin: 0 auto;
`;

const HeadBottomItem = styled.span`
  padding-right: 12px;
`;
