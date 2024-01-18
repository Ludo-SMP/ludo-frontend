import styled from 'styled-components';

type Position = '백엔드' | '프론트엔드' | '디자이너' | '기획';
type Tool = 'React' | 'Java' | 'Spring' | 'Figma';
type StudyType = '알고리즘' | '모의면접' | '프로젝트';
type ActivityType = '온라인' | '오프라인' | '미정';

export interface StudyInfoProps {
  studyType: StudyType;
  recruitDeadLine: string;
  studyName: string;
  studyPeriod: string;
  activityType: ActivityType;
  activityPositions: Position[];
  tools: Tool[];
  creator?: string;
  createdAt: string;
  views: number;
}

export const StudyCard: React.FC<StudyInfoProps> = ({
  studyType,
  recruitDeadLine,
  studyName,
  studyPeriod,
  activityType,
  activityPositions,
  tools,
  creator,
  createdAt,
  views,
}) => {
  return (
    <StudyCardWrapper>
      <StudyRecruitInfoWrapper>
        <div className="study__type">{studyType}</div>
        <div className="recruit__deadline">{recruitDeadLine}</div>
        <div>마감</div>
      </StudyRecruitInfoWrapper>
      <StudyActivityInfoWrapper>
        <div className="study__name">{studyName}</div>
        <div>
          <span className="title">프로젝트 진행기간</span>
          <span className="study__period">{studyPeriod}</span>
        </div>
        <div>
          <span className="title">진행방식</span>
          <span className="activity__type">{activityType}</span>
        </div>
        <div className="activity__positions">
          <span className="activity__position">{activityPositions[0]}</span>
          <span className="activity__position">{activityPositions[1]}</span>
          <span className="activity__position">{activityPositions[2]}</span>
          <div></div>
        </div>
        <div className="activity__tools">
          <span className="activity__tool"></span>
          <span className="activity__tool"></span>
          <span className="activity__tool"></span>
        </div>
      </StudyActivityInfoWrapper>
      <StudyAdditionalInfoWrapper>
        <div className="creation__info">
          <div className="study__creator">{creator}</div>
          <div className="division-line"></div>
          <div className="study__createdAt">{createdAt}</div>
        </div>
        <div className="views__info">
          <span className="views__icon">👀</span>
          <span className="views">{views}</span>
        </div>
      </StudyAdditionalInfoWrapper>
    </StudyCardWrapper>
  );
};

const StudyCardWrapper = styled.div`
  display: flex;
  padding: 2rem 2.5rem;
  flex-direction: column;
  align-items: flex-start;
  border-radius: 20px;
  border-color: ${(props) => props.theme.color.baseBlackAlpha10};
  background: ${(props) => props.theme.color.backgroundBgSurface};
  box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.1);
  width: 392px;
  height: 368px;

  & .title {
    color: ${(props) => props.theme.color.fontTextActive};
    font-size: 20px;
    font-style: normal;
    font-weight: 500;
    line-height: 40px;
  }
`;

const StudyRecruitInfoWrapper = styled.div`
  display: flex;
  gap: 0.75rem;
  align-items: center;
  align-self: stretch;
  margin-bottom: 0.75rem;
  font-size: ${(props) => props.theme.font.small};
  color: ${(props) => props.theme.color.fontTextMuted};
`;

const StudyActivityInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  align-self: stretch;
  margin-bottom: 1.25rem;
  gap: 0.25rem;
  
  & > div {
    display: flex;
    justify-content: space-between;
    align-self: stretch;
  }
  
  .activity {
    &__type {
      font-size: ${(props) => props.theme.font.medium};
    font-weight: 500;
    line-height: 2.5rem;
    color: ${(props) => props.theme.color.fontTextMuted};
    }

    &__positions {
      display; flex;
      justify-content: flex-start;
      padding: 0.25rem 0;
      gap: 0.5rem;
    }

    &__position {
      display: flex;
      aligin-items: center;
      text-align: center;
      padding: 0.25rem 0.75rem;
      border: 1px solid ${(props) => props.theme.color.baseBlackAlpha45};
      border-radius: 1.5rem;
      font-size: ${(props) => props.theme.font.xsmall};
      font-weight: 600;
      line-height: 1.5rem;
      background: ${(props) => props.theme.color.backgroundBgSurface};
      background-blend-mode: multiply;
      color: rgba(0, 0, 0, 0.45);
      
    }

    &__tools {
      display; flex;
      justify-content: flex-start;
      padding: 0.25rem 0;
      gap: 1rem;
    }

    &__tool {
      width: 32px;
      height: 32px;
      background-color: ${(props) => props.theme.color.gray2};
    }
  }  
  .study {
    &__name {
      color: ${(props) => props.theme.color.baseBlackAlpha85};
      font-family: Pretendard;
      font-size: ${(props) => props.theme.font.large};
      font-weight: 700;
      line-height: 44px;
      margin-bottom: 0.75rem;
      letter-spacing: -0.2px;
    }

    &__period {
      font-size: ${(props) => props.theme.font.medium};
      font-weight: 500;
      line-height: 2.5rem;
      color: ${(props) => props.theme.color.fontTextMuted};
  }
`;

const StudyAdditionalInfoWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-self: stretch;

  & > div {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  .study {
    &__creator {
      color: var(--Font-text-active, rgba(0, 0, 0, 0.85));
      font-size: 14px;
      font-style: normal;
      font-weight: 500;
    }

    &__createdAt {
      color: ${(props) => props.theme.color.fontTextMuted};
      font-size: 14px;
      font-weight: 500;
    }
  }

  .division-line {
    width: 1rem;
    height: 2px;
    transform: rotate(90deg);
    border: 1px solid rgba(38, 45, 49, 0.2);
  }

  .views {
    & {
      color: ${(props) => props.theme.color.fontTextMuted};
      font-size: 14px;
      font-weight: 500;
    }

    &__info {
      padding: 0.2rem 0;
    }
  }
`;

export default StudyCard;
