import styled from 'styled-components';
import { BlankSquare } from '../../Components/Common/BlankSquare';
import { RightBold } from '../../Assets/icons/RightBold';
import { InfoField } from '../../Components/Common/InfoField';
import { RowDivider } from '../../Components/Common/Divider/RowDivider';
import MemberProfile from '../../Components/MemberProfile';

export const StudyDetail = () => {
  return (
    <StudyDetailWrapper>
      <div className="study__detail__summary">
        <div className="title">스터디 제목</div>
        <div className="chips">
          <div className="chip">소속된 스터디</div>
          <div className="chip">모집중</div>
        </div>
      </div>
      <div className="study__recruit__status">
        <div className="recruit__text">스터디 지원자가 있어요!</div>
        <div className="button__section">
          <button>
            <div className="button__text">지원자 확인하기</div>
            <RightBold />
          </button>
        </div>
      </div>
      <div className="study__detail__infos">
        <div>
          <BlankSquare width="40px" />
          <div>스터디 정보</div>
        </div>

        <div className="study__detail">
          <div className="study__category">
            <InfoField title="카테고리" content="FE" />
          </div>
          <RowDivider />
          <div className="study__info">
            <InfoField title="진행방식" content="오프라인" />
            <InfoField title="진행플랫폼" content="디스코드" />
            <InfoField title="진행기간" content="24.2.1 ~ 24.3.1" />
            <InfoField title="남은 진행기간" content="D-22" />
          </div>
          <RowDivider />
        </div>
      </div>
      <div className="member__infos">
        <div>
          <BlankSquare width="40px" />
          <div>구성원</div>
        </div>

        <div className="member__info">
          <div className="member__headcount">
            <InfoField title="현재 인원수" content="5명" />
            <InfoField title="목표 인원수" content="7명" />
          </div>
        </div>
        <RowDivider />
        <div className="member__profiles">
          <MemberProfile
            nickName="Hyun"
            email="ksci195@hanmail.net"
            teamPosition="팀원"
            skillPosition="FE"
            position={''}
          />
          <MemberProfile
            nickName="Hyun"
            email="ksci195@hanmail.net"
            teamPosition="팀장"
            skillPosition="BE"
            position={''}
          />
          <MemberProfile
            nickName="Hyun"
            email="ksci195@hanmail.net"
            teamPosition="팀원"
            skillPosition="디자이너"
            position={''}
          />
        </div>
      </div>
      <div className="study__btns">
        <button className="study__btn">스터디 탈퇴하기</button>
        <button className="study__btn">스터디 수정하기</button>
      </div>
    </StudyDetailWrapper>
  );
};

const StudyDetailWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  margin: 0 15%;

  .study__detail {
    display: flex;
    flex-direction: column;
    gap: 16px;

    &__summary {
      display: flex;
      gap: 48px;
      & > div:first-child {
        font-size: 2rem;
        font-weight: 800;
        color: rgba(0, 0, 0, 0.85);
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
        border-radius: 24px;
        background: #f2f3f3;
        color: rgba(0, 0, 0, 0.45);
      }
    }

    &__infos {
      display: flex;
      flex-direction: column;
      gap: 20px;
      & > div:first-child {
        display: flex;
        align-items: center;
        gap: 20px;
        font-size: 20px;
        font-style: normal;
        font-weight: 800;
      }
    }
  }
  .study__recruit__status {
    display: flex;
    justify-content: space-between;

    & > div:first-child {
      font-size: 1.5rem;
      font-weight: 800;
      color: rgba(0, 0, 0, 0.85);
    }

    .button__section {
      display: flex;
      justify-content: center;
      padding: 5px 0;
      width: 280px;
      background-color: #f2f3f3;
      border-radius: 8px;
    }
    button {
      color: inherit;
      font: inherit;
      margin: 0;
      background: inherit;
      border: none;
      display: flex;
      align-items: center;
      padding: 0 12px;
      gap: 10px;
      font-size: 14px;
      color: rgba(0, 0, 0, 0.65);
    }
  }

  .study__info {
    display: flex;
    flex-wrap: wrap;
  }

  .member {
    &__infos {
      display: flex;
      flex-direction: column;
      gap: 20px;

      & > div:first-child {
        display: flex;
        align-items: center;
        gap: 20px;
        font-size: 20px;
        font-style: normal;
        font-weight: 800;
      }
    }
    &__headcount {
      display: flex;
    }

    &__profiles {
      display: flex;
      gap: 32px;
    }
  }

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
      width: 480px;
      padding: 12px 12px;
      justify-content: center;
      align-items: center;
      border-radius: 8px;
      border: none;
      background: #f2f3f3;
      color: rgba(0, 0, 0, 0.65);
      gap: 8px;
    }
  }
`;
