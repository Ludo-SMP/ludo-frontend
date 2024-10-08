import { Profile } from '@/Assets/Profile';
import Button from '@/Components/Common/Button';
import { RowDivider } from '@/Components/Common/Divider/RowDivider';
import styled from 'styled-components';
import { Loading, MemberImage } from '@/Assets';
import { ColumnDivider } from '@/Components/Common/Divider/ColumnDivider';
import { ReviewQuestion } from '@/Components/ReviewQuestion/ReviewQuestion';
import { Controller, useForm } from 'react-hook-form';
import { HeaderWithLogo } from '@/Components/Header/HeaderWithLogo';
import { useSubmitReviewMutation } from '@/Hooks/review/useSubmitReviewMutation';
import { useNavigate, useParams } from 'react-router-dom';
import { useStudyDetail } from '@/Hooks/study/useStudyDetail';

const reviewDataList = {
  activenessScore: {
    title: '이 스터디원은 스터디에 적극적이었나요?',
    yes: '적극적이예요.',
    no: '아쉬워요.',
  },
  professionalismScore: {
    title: '이 스터디원은 본인의 업무에 전문적이있나요?',
    yes: '전문적이예요.',
    no: '아쉬워요.',
  },
  communicationScore: {
    title: '이 스터디원은 다른 팀원들과 의사 소통을 잘했나요?',
    yes: '잘했어요.',
    no: '아쉬워요.',
  },
  togetherScore: {
    title: '이 스터디원과 스터디를 다시 함께 할 의향이 있나요?',
    yes: '함께하고 싶어요.',
    no: '그렇지는 않아요.',
  },
  recommendScore: {
    title: '이 스터디원을 주변 사람에게 추천하나요?',
    yes: '추천하고 싶어요.',
    no: '그렇지는 않아요.',
  },
};

type ReviewResult = Record<keyof typeof reviewDataList, number>;

const ReviewPage = () => {
  const { studyId, userId } = useParams();
  const navigate = useNavigate();

  const { data: study, isLoading } = useStudyDetail(parseInt(studyId));
  const { mutate } = useSubmitReviewMutation(parseInt(studyId), () => navigate(`/studies/${studyId}`));
  const {
    handleSubmit,
    formState: { errors },
    control,
  } = useForm<ReviewResult>();

  if (isLoading) return <Loading />;

  const {
    study: { title, participants },
  } = study;
  const {
    nickname,
    email,
    position: { name },
  } = participants.find((participant) => participant.id === parseInt(userId));

  return (
    <ReviewPageLayout>
      <form onSubmit={handleSubmit((data) => mutate({ ...data, revieweeId: parseInt(userId) }))}>
        <HeaderWithLogo title="함께했던 스터디원 평가하기" />
        <RowDivider />
        <Main>
          <MainInner>
            <Member>
              <MemberTitle>
                <MemberImage width={32} height={32} />
                <MemberTitleText>함께한 스터디원</MemberTitleText>
              </MemberTitle>
              <MemberProfile>
                <Profile width={80} height={80} email={email} />
                <MemberProfileBox>
                  <MemberName>{nickname}</MemberName>
                  <MemberStudyInfo>
                    <MemberStudyInfoText>{title}</MemberStudyInfoText>
                    <ColumnDivider />
                    <MemberStudyInfoText>{name}</MemberStudyInfoText>
                  </MemberStudyInfo>
                </MemberProfileBox>
              </MemberProfile>
            </Member>
            <ReviewList>
              {Object.entries(reviewDataList).map(([key, { title, yes, no }]) => (
                <li key={key}>
                  <Controller
                    name={key as keyof typeof reviewDataList}
                    control={control}
                    rules={{ required: true }}
                    render={({ field }) => (
                      <ReviewQuestion
                        contents={[no, yes]}
                        title={title}
                        error={errors[key as keyof typeof reviewDataList]?.type === 'required'}
                        {...field}
                      />
                    )}
                  />
                </li>
              ))}
            </ReviewList>
          </MainInner>
        </Main>
        <Footer>
          <FooterInner>
            <Button>나중에 새로 작성하기</Button>
            <Button type="submit" scheme="secondary">
              평가 작성 완료
            </Button>
          </FooterInner>
        </Footer>
      </form>
    </ReviewPageLayout>
  );
};

const ReviewPageLayout = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
`;

const Main = styled.main`
  padding: 0px 24px;
  display: flex;
  justify-content: center;
  background: ${({ theme }) => theme.color.gray1};
`;

const MainInner = styled.div`
  flex: 1;
  padding: 40px 0px;
  max-width: 808px;
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

const Member = styled.div`
  max-width: 808px;
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const MemberTitle = styled.h2`
  display: flex;
  min-width: 300px;
  max-width: 1224px;
  align-items: center;
  gap: 8px;
`;

const MemberTitleText = styled.h2`
  color: ${({ theme }) => theme.color.black5};
  font-family: Pretendard600;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: 32px;
`;

const MemberProfile = styled.div`
  display: flex;
  min-width: 300px;
  max-width: 808px;
  align-items: center;
  gap: 24px;
`;

const MemberProfileBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const MemberName = styled.span`
  color: ${({ theme }) => theme.color.black5};
  font-family: Pretendard600;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: 32px;
`;

const MemberStudyInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

const MemberStudyInfoText = styled.span`
  color: ${({ theme }) => theme.color.black2};
  font-family: Pretendard400;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
`;

const ReviewList = styled.ul`
  min-width: 348px;
  max-width: 808px;
  padding: 40px 32px;
  display: flex;
  flex-direction: column;
  gap: 32px;
  border-radius: ${({ theme }) => theme.borderRadius.cornerRadius12};
  background: ${({ theme }) => theme.color.white2};
`;

// 실제로는 의미적 푸터가 아닌 레이아웃상 하단을 의미
const Footer = styled.div`
  padding: 0px 24px;
  display: flex;
  justify-content: center;
  background: ${({ theme }) => theme.color.gray1};
`;

const FooterInner = styled.div`
  flex: 1;
  display: flex;
  max-width: 808px;
  padding: 24px 0px 40px 0px;
  justify-content: center;
  gap: 24px;
  background: ${({ theme }) => theme.color.gray1};

  & > button {
    flex: 1;
  }
`;

export default ReviewPage;
