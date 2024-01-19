import styled from 'styled-components';
import ActivityPosition, { Position } from './Position';
import Tool from './Tool';

type ActivityType = '온라인' | '오프라인' | '미정';
export type StudyType = '알고리즘' | '모의 면접' | '프로젝트';
export interface StudyInfo {
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

const StudyCard: React.FC<StudyInfo> = ({
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
        <div className="study__type">[{studyType}]</div>
        <div className="recruit__deadline">
          <div>모집 마감일</div>
          <span>{recruitDeadLine}</span>
        </div>
      </StudyRecruitInfoWrapper>
      <StudyActivityInfoWrapper>
        <div className="study__name">{studyName}</div>
        <div>
          <span className="title">진행기간</span>
          <span className="study__period">{studyPeriod}</span>
        </div>
        <div>
          <span className="title">진행방식</span>
          <span className="activity__type">{activityType}</span>
        </div>
        <div className="activity__positions">
          {activityPositions?.map((activityPosition: Position) => {
            return <ActivityPosition position={activityPosition} />;
          })}
        </div>
        <div className="activity__tools">
          {tools.map(() => {
            return <Tool />;
          })}
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
  padding: 1rem 1.5rem;
  flex-direction: column;
  align-items: flex-start;
  border-radius: 20px;
  border-color: ${(props) => props.theme.color.baseBlackAlpha10};
  background: ${(props) => props.theme.color.backgroundBgSurface};
  box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.1);
  width: 320px;
  height: 300px;

  & .title {
    color: ${(props) => props.theme.color.fontTextActive};
    font-size: ${(props) => props.theme.font.medium};
    font-style: normal;
    font-weight: 500;
    line-height: 40px;
  }
`;

const StudyRecruitInfoWrapper = styled.div`
  display: flex;
  gap: 1.5rem;
  align-items: center;
  align-self: stretch;
  font-size: ${(props) => props.theme.font.small};
  color: ${(props) => props.theme.color.fontTextMuted};

  & > :last-child {
    display: flex;
    gap: 0.4rem;
  }
`;

const StudyActivityInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  align-self: stretch;
  margin-bottom: 1.25rem;
  gap: 0.125rem;
  
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

    &__tools {
      display; flex;
      justify-content: flex-start;
      padding: 0.25rem 0;
      gap: 1rem;
    }
  }  
  .study {
    &__name {
      color: ${(props) => props.theme.color.baseBlackAlpha85};
      font-family: Pretendard;
      font-size: ${(props) => props.theme.font.large};
      font-weight: 700;
      line-height: 44px;
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
