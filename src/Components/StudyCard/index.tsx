import styled from 'styled-components';
import Position, { PositionType } from './Position';
import Tool from './Tool';
import { BlankSquare } from '../Common/BlankSquare';
import { Link } from 'react-router-dom';

export type ActivityType = '온라인' | '오프라인' | '미정';
export type StudyCategory = '코딩 테스트' | '모의 면접' | '프로젝트' | 'All';
export interface StudyInfo {
  studyId: number;
  studyCategory: StudyCategory;
  recruitDeadLine: string;
  studyName: string;
  studyPeriod: string;
  activityType: ActivityType;
  positions: PositionType[];
  tools: Tool[];
  creator?: string;
  createdAt: string;
  views: number;
}

const StudyCard = ({
  studyId,
  studyCategory,
  recruitDeadLine,
  studyName,
  studyPeriod,
  activityType,
  positions,
  tools,
  creator,
  createdAt,
  views,
}: StudyInfo) => {
  return (
    <Link to={`/studies/${studyId}/recruitment`} state={{ studyId }}>
      <StudyCardWrapper>
        <StudyRecruitInfoWrapper>
          <div className="s tudy__category">[{studyCategory}]</div>
          <div className="recruit__deadline">
            <div>모집 마감일</div>
            <span>{recruitDeadLine}</span>
          </div>
        </StudyRecruitInfoWrapper>
        <StudyNameWrapper>
          <div className="study__name">{studyName}</div>
        </StudyNameWrapper>
        <StudyDetailInfoWrapper>
          <div>
            <span className="title">진행기간</span>
            <span className="study__period">{studyPeriod}</span>
          </div>
          <div>
            <span className="title">진행방식</span>
            <span className="study__type">{activityType}</span>
          </div>
          <div className="study__positions">
            {positions?.map((position: PositionType) => {
              return <Position key={position} position={position} />;
            })}
          </div>
          <div className="study__tools">
            {tools.map((tool) => {
              return <BlankSquare key={tool} width="32px" height="32px" />;
            })}
          </div>
        </StudyDetailInfoWrapper>
        <StudyAdditionalInfoWrapper>
          <div className="creation__info">
            <div className="study__creator">{creator}</div>
            <div className="division-line"></div>
            <div className="study__createdAt">{createdAt.slice(2)}</div>
          </div>
          <div className="views__info">
            <BlankSquare width="18px" height="18px" />
            <span className="views">{views}</span>
          </div>
        </StudyAdditionalInfoWrapper>
      </StudyCardWrapper>
    </Link>
  );
};

const StudyCardWrapper = styled.div`
  width: 394px;
  height: 368px;
  display: flex;
  padding: 32px 40px;
  flex-direction: column;
  align-items: flex-start;
  border-radius: 20px;
  border: 1px solid ${(props) => props.theme.color.black1};
  background: ${(props) => props.theme.color.white};
  box-shadow: 0px 0px 20px 0px ${(props) => props.theme.color.black1};
  gap: 12px;
`;

const StudyRecruitInfoWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  align-self: stretch;
  font-size: ${(props) => props.theme.font.small};
  color: ${(props) => props.theme.color.black2};

  & > :last-child {
    display: flex;
    gap: 12px;
  }
`;

const StudyNameWrapper = styled.div`
  & > div:first-child {
    color: ${(props) => props.theme.color.black4};
    font-size: ${(props) => props.theme.font.large};
    font-weight: 700;
    line-height: 44px;
    letter-spacing: -0.2px;
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

  .title {
    color: ${(props) => props.theme.color.black3};
    font-size: ${(props) => props.theme.font.medium};
    font-weight: 500;
    line-height: 40px;
    width: 184px;
  }

  .study {
    &__period,
    &__type {
      font-size: ${(props) => props.theme.font.medium};
      font-weight: 500;
      line-height: 40px;
      color: ${(props) => props.theme.color.black2};
    }

    &__positions,
    &__tools {
      display: flex;
      padding: 4px;
      align-items: center;
      gap: 4px;
      align-self: stretch;
    }
  }
`;

const StudyAdditionalInfoWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 120px;
  align-self: stretch;
  font-size: ${(props) => props.theme.font.xsmall};
  font-weight: 500;
  line-height: 100%;

  .creation__info {
    display: flex;
    padding: 2px 0px;
    align-items: center;
    width: 1000px;
    gap: 12px;
  }

  .views__info {
    display: flex;
    align-items: center;
    gap: 12px;

    .views {
      color: ${(props) => props.theme.color.black2};
    }
  }

  .study {
    &__creator {
      color: ${(props) => props.theme.color.black4};
    }

    &__createdAt {
      color: ${(props) => props.theme.color.black2};
    }
  }

  .division-line {
    width: 1rem;
    height: 2px;
    transform: rotate(90deg);
    border: 1px solid rgba(38, 45, 49, 0.2);
  }
`;

export default StudyCard;
