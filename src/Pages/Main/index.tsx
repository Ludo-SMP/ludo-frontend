import styled from 'styled-components';
import { Recruitment } from '@/Types/study';
import Banner from '../../Components/Banner';
import { usePopularRecruitments } from '@/Hooks/recruitments/usePopularRecruitments';
import Button from '@/Components/Common/Button';
import ChipMenu from '@/Components/Common/ChipMenu';
import { Right, Create } from '@/Assets';
import UtiltiyButtons from '@/Components/UtilityButtons';
import { useSelectedCategoryStore } from '@/store/category';
import RecruitmentCard from '@/Components/RecruitmentCard';
import { useLocation, useNavigate } from 'react-router-dom';
import { ROUTES } from '@/Constants/route';
import { useLoginStore } from '@/store/auth';
import { useModalStore } from '@/store/modal';
import Modal from '@/Components/Common/Modal';
import { CREATE_STUDY } from '@/Constants/messages';
import SkeletonRecruitmentCardList from '@/Components/Skeleton/SkeletonRecruitmentCardList';
import { useEffect } from 'react';
import { media } from '@/Styles/theme';

const MainPage = () => {
  const { data: popularRecruitments, isLoading } = usePopularRecruitments();
  const { selectedCategory, setSelectedCategory } = useSelectedCategoryStore();
  const navigate = useNavigate();
  const { isLoggedIn } = useLoginStore();
  const { isModalOpen, openModal } = useModalStore();
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const popularCodingRecruitments: Recruitment[] = popularRecruitments?.popularCodingRecruitments;
  const popularInterviewRecruitments: Recruitment[] = popularRecruitments?.popularInterviewRecruitments;
  const popularProjectRecruitments: Recruitment[] = popularRecruitments?.popularProjectRecruitments;

  return (
    <MainPageWrapper>
      <BannerSectionWrapper>
        <Banner />
      </BannerSectionWrapper>

      <RecruitmentsSectionWrapper>
        <div className="section__title">이번주 인기 있는 스터디 모음 zip.</div>
        <SelectCategorySectionWrapper>
          <CategoryMenusWrapper>
            <ChipMenu
              checked={selectedCategory.name === '코딩 테스트'}
              onClick={() => setSelectedCategory({ id: 2, name: '코딩 테스트' })}
            >
              코딩 테스트
            </ChipMenu>
            <ChipMenu
              checked={selectedCategory.name === '모의 면접'}
              onClick={() => setSelectedCategory({ id: 1, name: '모의 면접' })}
            >
              모의 면접
            </ChipMenu>
            <ChipMenu
              checked={selectedCategory.name === '프로젝트'}
              onClick={() => setSelectedCategory({ id: 3, name: '프로젝트' })}
            >
              사이드 프로젝트
            </ChipMenu>
          </CategoryMenusWrapper>
          <MoreSectionWrapper
            onClick={() => {
              navigate(ROUTES.RECRUITMENT.RECRUITMENTS);
            }}
          >
            <span className="more__text">전체 목록 보러가기</span>
            <Right />
          </MoreSectionWrapper>
        </SelectCategorySectionWrapper>

        <RecruitmentCardsWrapper>
          {isLoading ? (
            <SkeletonRecruitmentCardList />
          ) : selectedCategory.name === '코딩 테스트' ? (
            popularCodingRecruitments?.map((recruitment: Recruitment) => (
              <RecruitmentCard {...recruitment} key={recruitment.id} />
            ))
          ) : selectedCategory.name === '모의 면접' ? (
            popularInterviewRecruitments?.map((recruitment: Recruitment) => (
              <RecruitmentCard {...recruitment} key={recruitment.id} />
            ))
          ) : (
            popularProjectRecruitments?.map((recruitment: Recruitment) => (
              <RecruitmentCard {...recruitment} key={recruitment.id} />
            ))
          )}
        </RecruitmentCardsWrapper>
      </RecruitmentsSectionWrapper>
      <UtiltiyButtons>
        <Button onClick={isLoggedIn ? () => navigate(ROUTES.STUDY.CREATE) : () => openModal()} className="create__btn">
          <Create height={40} />
          <span>스터디 생성</span>
        </Button>
      </UtiltiyButtons>
      {!isLoggedIn && isModalOpen && (
        <Modal
          title={CREATE_STUDY.LOGIN.title}
          handleApprove={() => navigate(ROUTES.AUTH.LOGIN)}
          approveBtnText="로그인하기"
          cancelBtnText="나중에 할래요"
          isBtnWidthEqual={false}
        >
          {CREATE_STUDY.LOGIN.content}
        </Modal>
      )}
    </MainPageWrapper>
  );
};

const MainPageWrapper = styled.section`
  display: flex;
  margin: 0 auto;
  flex-direction: column;
  gap: 40px;
`;

const BannerSectionWrapper = styled.section`
  display: flex;
  margin: 0 auto;
  width: 100%;
  max-width: 1920px;

  ${media.custom(800)} {
    display: none;
  }
`;

const RecruitmentsSectionWrapper = styled.div`
  display: flex;
  margin: 0 auto;
  max-width: 1224px;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 21px;

  .section__title {
    width: 100%;
    color: ${({ theme }) => theme.color.black5};
    font-family: 'Pretendard800';
    font-size: ${({ theme }) => theme.font.xxlarge};
    font-style: normal;
    font-weight: 800;
    line-height: 40px;
    white-space: nowrap;
  }

  ${media.custom(800)} {
    width: 400px;
  }
`;

const SelectCategorySectionWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-between;
  gap: 12px;
`;

const CategoryMenusWrapper = styled.div`
  display: flex;
  gap: 12px;
`;

const RecruitmentCardsWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  align-content: flex-start;
  gap: 21px;
  min-height: 757px;
  flex-wrap: wrap;
`;

const MoreSectionWrapper = styled.div`
  display: flex;
  display: inline-flex;
  padding: 0 16px 0 24px;
  justify-content: center;
  align-items: center;
  padding-top: 2px;
  gap: 8px;

  &:hover {
    cursor: pointer;
  }

  ${media.custom(800)} {
    display: none;
  }

  .more__text {
    color: ${({ theme }) => theme.color.black3};
    padding-top: 2px;
  }
`;

export default MainPage;
