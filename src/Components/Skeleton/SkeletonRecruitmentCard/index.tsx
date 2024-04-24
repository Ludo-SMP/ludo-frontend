import styled from 'styled-components';

/** 스터디 모집 공고 로딩시 보여줄 스켈레톤 */
const SkeletonRecruitmentCard = () => {
  return (
    <RecruitmentCardWrapper>
      <StudyRecruitInfoWrapper>
        <div className="category skeleton"></div>
        <div className="recruit__deadline">
          <div className="title skeleton"></div>
          <div className="content skeleton"></div>
        </div>
      </StudyRecruitInfoWrapper>
      <StudyNameWrapper>
        <div className="name skeleton"></div>
      </StudyNameWrapper>
      <StudyDetailInfoWrapper>
        <div className="process">
          <div className="title skeleton"></div>
          <div className="period skeleton"></div>
        </div>
        <div className="process">
          <div className="title skeleton"></div>
          <div className="method skeleton"></div>
        </div>
        <div className="positions">
          <div className="position skeleton"></div>
          <div className="position skeleton"></div>
          <div className="position skeleton"></div>
        </div>
        <div className="stacks">
          <div className="stack skeleton"></div>
          <div className="stack skeleton"></div>
          <div className="stack skeleton"></div>
        </div>
      </StudyDetailInfoWrapper>
      <StudyAdditionalInfoWrapper>
        <div className="creation__info">
          <div className="study__creator skeleton"></div>
          <div className="study__createdAt skeleton"></div>
        </div>
        <div className="views__info">
          <div className="image skeleton"></div>
          <div className="content skeleton"></div>
        </div>
      </StudyAdditionalInfoWrapper>
    </RecruitmentCardWrapper>
  );
};

const RecruitmentCardWrapper = styled.li`
  width: 394px;
  height: 368px;
  display: flex;
  padding: 32px 40px;
  flex-direction: column;
  align-items: flex-start;
  border-radius: 20px;
  border: 1px solid ${(props) => props.theme.color.black1};
  background: ${(props) => props.theme.color.white};
  box-shadow: 0px 0px 5px 0px ${(props) => props.theme.color.black1};
  gap: 12px;

  .skeleton {
    background-color: #dddddd;
    border-radius: 8px;
  }
`;

const StudyRecruitInfoWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  align-self: stretch;
  margin-bottom: 2px;

  .recruit__deadline {
    display: flex;
    gap: 12px;
  }

  .category,
  .title,
  .content {
    height: 18px;
  }
  .category {
    width: 85px;
  }

  .title {
    width: 75px;
  }

  .content {
    width: 65px;
  }
`;

const StudyNameWrapper = styled.div`
  .name {
    width: 280px;
    height: 36px;
    margin-bottom: 6px;
  }
`;

const StudyDetailInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  align-self: stretch;
  gap: 4px;
  margin-bottom: 8px;

  & > div {
    display: flex;
    align-items: center;
    align-self: stretch;
    width: 100%;
  }

  .process {
    display: flex;
    gap: 50px;
    margin-bottom: 13px;
  }

  .title {
    width: 80px;
    height: 30px;
  }

  .period {
    width: 150px;
    height: 30px;
  }

  .method {
    width: 80px;
    height: 30px;
  }

  .positions,
  .stacks {
    display: flex;
    gap: 8px;
    margin-bottom: 8px;
  }

  .position {
    border-radius: ${({ theme }) => theme.borderRadius.large};
    width: 65px;
    height: 32px;
  }

  .stack {
    border-radius: 0;
    width: 32px;
    height: 32px;
  }
`;

const StudyAdditionalInfoWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 80px;
  align-self: stretch;
  font-size: ${(props) => props.theme.font.xsmall};
  font-weight: 500;
  line-height: 100%;

  .creation__info {
    display: flex;
    padding: 2px 0px;
    align-items: center;
    gap: 50px;
  }

  .views__info {
    display: flex;
    align-items: center;
    gap: 8px;

    .image {
      border-radius: 0;
      width: 18px;
      height: 18px;
    }

    .content {
      width: 30px;
      height: 18px;
    }
  }

  .study {
    &__creator,
    &__createdAt {
      width: 65px;
      height: 18px;
    }
  }

  .division-line {
    width: 1rem;
    height: 2px;
    transform: rotate(90deg);
    border: 1px solid rgba(38, 45, 49, 0.2);
  }
`;

export default SkeletonRecruitmentCard;
