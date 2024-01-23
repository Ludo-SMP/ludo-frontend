import styled from 'styled-components';
import { InfoField } from '../../Components/Common/InfoField';
import { RowDivider } from '../../Components/Common/Divider/RowDivider';
import { ColumnDivider } from '../../Components/Common/Divider/ColumnDivider';

export const Recruitment = () => {
  return (
    <RecruitmentWrapper>
      <div className="study__title">
        <div className="title">스터디 제목</div>
      </div>
      <div className="recruitment__status">
        <div className="creator">닉네임</div>
        <ColumnDivider />
        <div className="edit__info">
          <div className="createdAt">작성 날짜</div>
          <div className="edit__status">수정됨</div>
        </div>
      </div>
      <RowDivider />
      <div className="study__details">
        <div className="study__detail">
          <InfoField title="카테고리" content="카테고리" />
          <InfoField title="기술 스택" content="기술 스택" />
          <InfoField title="포지션" content="포지션" />
          <InfoField title="모집 인원" content="모집 인원" />
        </div>
        <RowDivider />
        <div className="study__detail">
          <InfoField title="연락 방법" content="연락 방법" />
          <InfoField title="시작 예정일" content="시작 예정일" />
          <InfoField title="진행 플랫폼" content="진행 플랫폼" />
          <InfoField title="시작 예정일" content="시작 예정일" />
          <InfoField title="진행 기간" content="진행 기간" />
        </div>
      </div>
      <RowDivider />
      <div className="recruitment__detail">
        <div className="title">상세 내용</div>
        <div className="contents">
          <textarea name="recruitment__contents" placeholder="상세 내용을 기입해주세요."></textarea>
        </div>
      </div>
      <div className="recruitment__btns">
        <button className="recruitment__btn">모집 마감하기</button>
        <button className="recruitment__btn">모집 공고 수정하기</button>
      </div>
    </RecruitmentWrapper>
  );
};

const RecruitmentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  margin: 0 15%;

  .study {
    &__title {
      & > div:first-child {
        font-size: ${(props) => props.theme.font.xxlarge};
        font-weight: 800;
        color: rgba(0, 0, 0, 0.85);
      }
    }

    &__details {
      display: flex;
      flex-direction: column;
      gap: 20px;
    }

    &__detail {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
    }
  }

  .recruitment {
    &__status {
      display: flex;
      gap: 0.5rem;

      & > div:last-child {
        display: flex;
        gap: 0.8rem;
        font-size: ${(props) => props.theme.font.small};
        color: ${(props) => props.theme.color.fontTextMuted};
      }
    }

    &__detail {
      display: flex;
      flex-direction: column;
      gap: 1rem;

      .title {
        font-size: ${(props) => props.theme.font.small};
        color: ${(props) => props.theme.color.baseBlackAlpha45};
      }

      textarea {
        resize: none;

        &::placeholder {
          color: ${(props) => props.theme.color.baseBlackAlpha85};
          font-size: ${(props) => props.theme.font.small};
          font-weight: 500;
          letter-spacing: -0.2px;
        }
      }
    }
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
      background: ${(props) => props.theme.color.gray1};
      color: ${(props) => props.theme.color.baseBlackAlpha65};
      font-size: ${(props) => props.theme.font.small};
      gap: 8px;
    }
  }
`;
