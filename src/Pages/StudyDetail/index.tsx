import styled from 'styled-components';
import { BlankSquare } from '../../Components/Common/BlankSquare';
import { RightBold } from '../../Assets/icons/RightBold';
import { InfoField } from '../../Components/Common/InfoField';
import { RowDivider } from '../../Components/Common/Divider/RowDivider';
import MemberProfile from '../../Components/MemberProfile';
import ApplyButton from '../../Components/Button/ApplyButton';

export const StudyDetail = () => {
  return (
    <StudyDetailWrapper>
      <StudyTitleWrapper>
        <div className="title">스터디 제목</div>
        <div className="chips">
          <div className="chip">소속된 스터디</div>
          <div className="chip">모집중</div>
        </div>
      </StudyTitleWrapper>
      <StudyRecruitWrapper>
        <div className="recruit__text">스터디 지원자가 있어요!</div>
        <ApplyButton>
          <div className="button__text">지원자 확인하기</div>
          <RightBold width={24} height={24} />
        </ApplyButton>
      </StudyRecruitWrapper>
      <StudyInfoWrapper>
        <div className="study__detail__info">
          <div className="title__section">
            <BlankSquare width="50px" height="50px" />
            <div className="title">스터디 정보</div>
          </div>
          <div className="study__category">
            <InfoField title="카테고리" content="FE" />
          </div>
          <RowDivider />
          <div className="detail__info">
            <InfoField title="진행방식" content="오프라인" />
            <InfoField title="진행플랫폼" content="디스코드" />
            <InfoField title="진행기간" content="24.2.1 ~ 24.3.1" />
            <InfoField title="남은 진행기간" content="D-22" />
          </div>
          <RowDivider />
        </div>
        <div className="study__member__info">
          <div className="title__section">
            <BlankSquare width="50px" height="50px" />
            <div className="title">구성원</div>
          </div>
          <div className="member__info">
            <div className="member__headcount">
              <InfoField title="현재 인원수" content="5명" />
              <InfoField title="목표 인원수" content="7명" />
            </div>
            <div className="member__profiles">
              <MemberProfile nickName="Hyun" email="ksci195@hanmail.net" teamPosition="팀원" skillPosition="FE" />
              <MemberProfile nickName="Hyun" email="ksci195@hanmail.net" teamPosition="팀장" skillPosition="BE" />
              <MemberProfile nickName="Hyun" email="ksci195@hanmail.net" teamPosition="팀원" skillPosition="디자이너" />
              <MemberProfile nickName="Hyun" email="ksci195@hanmail.net" teamPosition="팀원" skillPosition="디자이너" />
              <MemberProfile nickName="Hyun" email="ksci195@hanmail.net" teamPosition="팀원" skillPosition="디자이너" />
              <MemberProfile nickName="Hyun" email="ksci195@hanmail.net" teamPosition="팀원" skillPosition="디자이너" />
            </div>
          </div>
        </div>
      </StudyInfoWrapper>
      <StudyButtonsWrapper>
        <ApplyButton>스터디 탈퇴하기</ApplyButton>
        <ApplyButton>모집 마감하기</ApplyButton>
      </StudyButtonsWrapper>
    </StudyDetailWrapper>
  );
};

const StudyDetailWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 1920px;
  padding: 40px 348px 80px 348px;
  align-items: flex-start;
  gap: 40px;

  .study {
    &__btns {
      display: flex;
      justify-content: center;
      width: 100%;
      align-items: flex-start;
      gap: 24px;
      align-self: stretch;
    }

    &__btn {
      display: flex;
      width: 460px;
      padding: 12px 12px;
      justify-content: center;
      align-items: center;
      border-radius: 8px;
      background: ${(props) => props.theme.color.gray2};
      color: ${(props) => props.theme.color.black4};
      font-size: ${(props) => props.theme.font.small};
      gap: 8px;
    }
  }
`;

const StudyTitleWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
  align-self: stretch;

  & > div:first-child {
    display: flex;
    width: 200px;
    height: 60px;
    justify-content: flex-start;
    align-items: center;
    color: ${(props) => props.theme.color.black4};
    font-size: ${(props) => props.theme.font.xxxxlarge};
    font-weight: 800;
    line-height: 60px;
  }

  & > div:last-child {
    display: flex;
    gap: 24px;
  }

  .chip {
    display: flex;
    padding: 4px 12px;
    justify-content: center;
    align-items: center;
    text-align: center;
    border-radius: 24px;
    background: ${(props) => props.theme.color.gray1};
    background-blend-mode: multiply;
    font-size: ${(props) => props.theme.font.small};
    font-weight: 500;
    line-height: 30px;
    color: ${(props) => props.theme.color.black2};
  }
`;

const StudyRecruitWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;
  margin-bottom: 20px;

  & > div:first-child {
    font-size: 1.5rem;
    font-weight: 800;
    color: ${(props) => props.theme.color.black4};
    font-size: ${(props) => props.theme.font.xlarge};
    font-weight: 800;
    line-height: 50px;
  }

  & > :last-child {
    display: flex;
    width: 288px;
    padding: 0 12px;
    justify-content: center;
    align-items: center;
    gap: 8px;
    background-color: ${(props) => props.theme.color.gray1};
    border-radius: 8px;

    .button__text {
      color: ${(props) => props.theme.color.black3};
      text-align: center;
      font-size: ${(props) => props.theme.font.xsmall};
      font-weight: 600;
      line-height: 44px;
    }
  }
`;

const StudyInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 32px;
  align-self: stretch;
  margin-bottom: 20px;

  .title__section {
    display: flex;
    align-items: center;
    gap: 24px;
    align-self: stretch;

    .title {
      color: ${(props) => props.theme.color.black4};
      font-size: ${(props) => props.theme.font.xlarge};
      font-weight: 800;
      line-height: 50px;
    }
  }

  & > div:first-child {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 32px;
    align-self: stretch;

    .detail__info {
      display: flex;
      align-items: flex-start;
      align-content: flex-start;
      gap: 20px;
      align-self: stretch;
      flex-wrap: wrap;
    }
  }

  & > div:last-child {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 32px;
    align-self: stretch;

    .member__info {
      display: flex;
      align-items: flex-start;
      align-content: flex-start;
      gap: 20px;
      align-self: stretch;
      flex-wrap: wrap;
    }

    .member__headcount {
      display: flex;
      align-items: flex-start;
      align-content: flex-start;
      align-self: stretch;
      flex-wrap: wrap;
    }

    .member__profiles {
      display: flex;
      align-items: flex-start;
      gap: 24px;
    }
  }
`;

const StudyButtonsWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 24px;
  align-self: stretch;

  & > button {
    display: flex;
    padding: 0 12px;
    justify-content: center;
    align-items: center;
    gap: 8px;
    flex: 1 0 0;
    border-radius: 8px;
    background: ${(props) => props.theme.color.gray1};
    color: var(--Palette-base-black-alpha-65, rgba(0, 0, 0, 0.65));
    text-align: center;
    font-size: ${(props) => props.theme.font.xsmall};
    font-weight: 600;
    line-height: 44px;
  }
`;
