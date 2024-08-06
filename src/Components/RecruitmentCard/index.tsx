import styled from 'styled-components';
import PositionToken from '../Common/PositionToken';
import { Position, Stack } from '@/Types/study';
import { Link } from 'react-router-dom';
import { dateFormatter, getPeriod } from '@/utils/date';
import { Recruitment } from '@/Types/study';
import { PROGRESS_METHOD } from '@/Shared/study';
import Image from '../Common/Image';
import { Views } from '@/Assets';
import { media, textEllipsis } from '@/Styles/theme';

/** 스터디 모집 공고 */
const RecruitmentCard = (recruitment: Recruitment) => {
  return (
    <Link to={`/studies/${recruitment.id}/recruitment`}>
      <RecruitmentCardWrapper>
        <StudyRecruitInfoWrapper>
          <div className="study__category">[{recruitment.category.name}]</div>
          <div className="recruit__deadline">
            <div>모집 마감일</div>
            <span>{dateFormatter(recruitment.endDateTime)}</span>
          </div>
        </StudyRecruitInfoWrapper>
        <StudyNameWrapper>
          <div className="study__name">{recruitment.title}</div>
        </StudyNameWrapper>
        <StudyDetailInfoWrapper>
          <div>
            <span className="title">진행기간</span>
            <span className="study__period">{getPeriod(recruitment.startDateTime, recruitment.endDateTime)}</span>
          </div>
          <div>
            <span className="title">진행방식</span>
            <span className="study__type">{PROGRESS_METHOD[recruitment.way]}</span>
          </div>
          <div className="study__positions">
            {recruitment.positions.length !== 0 ? (
              recruitment.positions?.map((position: Position) => (
                <PositionToken key={position.id} id={position.id} name={position.name} />
              ))
            ) : (
              <PositionToken />
            )}
          </div>
          <div className="study__stacks">
            {recruitment.stacks.length !== 0 ? (
              recruitment.stacks.map(
                (stack: Stack, idx) =>
                  idx < 5 && (
                    <Image key={stack.id} size={32} src={`${import.meta.env.VITE_BASE_API_URL}${stack.imageUrl}`} />
                  ),
              )
            ) : (
              <Image size={32} />
            )}
            {recruitment.stacks.length > 5 && <StackCountText> 외 {recruitment.stacks.length - 5}개</StackCountText>}
          </div>
        </StudyDetailInfoWrapper>
        <StudyAdditionalInfoWrapper>
          <div className="creation__info">
            <div className="study__creator">{recruitment.ownerNickname}</div>
            <div className="division-line" />
            <div className="study__createdAt">{dateFormatter(recruitment.createdDateTime)}</div>
          </div>
          <div className="views__info">
            <Views width="18px" height="18px" />
            <span className="views">{recruitment.hits}</span>
          </div>
        </StudyAdditionalInfoWrapper>
      </RecruitmentCardWrapper>
    </Link>
  );
};

const RecruitmentCardWrapper = styled.li`
  width: 394px;
  height: 368px;
  display: flex;
  padding: 32px 40px;
  flex-direction: column;
  align-items: flex-start;
  border-radius: 12px;
  border: 1px solid ${(props) => props.theme.color.black1};
  background: ${(props) => props.theme.color.white};
  box-shadow: 0px 0px 20px 0px ${(props) => props.theme.color.black1};
  gap: 12px;

  ${media.custom(400)} {
    width: calc(100vw - 32px);
    padding: 16px;
    height: auto;
  }
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
  .study__name {
    max-width: 314px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
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
    width: 120px;
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
    &__stacks {
      display: flex;
      padding: 4px;
      align-items: center;
      gap: 8px;
      align-self: stretch;
    }
  }
`;

const StudyAdditionalInfoWrapper = styled.div`
  display: flex;
  align-items: center;
  height: 24px;
  justify-content: space-between;
  align-self: stretch;
  font-size: ${(props) => props.theme.font.xsmall};
  font-weight: 500;
  line-height: 100%;

  .creation__info {
    display: flex;
    align-items: center;
    gap: 12px;
  }

  .views__info {
    display: flex;
    align-items: center;
    gap: 4px;

    .views {
      padding-top: 2px;
      color: ${(props) => props.theme.color.black2};
    }
  }

  .study {
    &__creator {
      max-width: 170px;
      padding-top: 2px;
      color: ${(props) => props.theme.color.black4};
      ${textEllipsis}
    }

    &__createdAt {
      padding-top: 2px;
      color: ${(props) => props.theme.color.black2};
    }
  }

  .division-line {
    width: 1px;
    height: 16px;
    border: 1px solid rgba(38, 45, 49, 0.2);
  }

  ${media.custom(400)} {
    gap: 0;
    justify-content: space-between;
    width: 100%;
  }
`;

const StackCountText = styled.span`
  font-size: ${(props) => props.theme.font.small};
  font-weight: 500;
  line-height: 40px;
  color: ${(props) => props.theme.color.black2};
`;
export default RecruitmentCard;
