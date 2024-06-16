import { Logo, Profile } from '@/Assets';
import Button from '@/Components/Common/Button';
import { RowDivider } from '@/Components/Common/Divider/RowDivider';
import styled from 'styled-components';
import { MemberImage } from '@/Assets';
import { ColumnDivider } from '@/Components/Common/Divider/ColumnDivider';
import { ReviewQuestion } from '@/Components/ReviewQuestion/ReviewQuestion';
import { Controller, useForm } from 'react-hook-form';

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

export const ReviewPage = () => {
  const {
    handleSubmit,
    formState: { errors },
    control,
  } = useForm<ReviewResult>();

  return (
    <ReviewPageLayout>
      <form onSubmit={handleSubmit(console.log)}>
        <Header>
          <HeaderInner>
            <img width="112" src={Logo} alt="Ludo" />
            <HeaderText>함께했던 스터디원 평가하기</HeaderText>
          </HeaderInner>
        </Header>
        <RowDivider />
        <Main>
          <MainInner>
            <Member>
              <MemberTitle>
                <MemberImage width={32} height={32} />
                <MemberTitleText>함께한 스터디원</MemberTitleText>
              </MemberTitle>
              <MemberProfile>
                <Profile width={80} height={80} />
                <MemberProfileBox>
                  <MemberName>닉네임</MemberName>
                  <MemberStudyInfo>
                    <MemberStudyInfoText>스터디 이름</MemberStudyInfoText>
                    <ColumnDivider />
                    <MemberStudyInfoText>포지션</MemberStudyInfoText>
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

const Header = styled.header`
  display: flex;
  padding: 0px 24px;
  justify-content: center;
  background: ${({ theme }) => theme.color.white2};
`;

const HeaderInner = styled.div`
  width: 1224px;
  height: 92px;
  max-width: 1224px;
  padding: 22px 655px 22px 0px;
  display: flex;
  align-items: center;
  gap: 24px;
`;

const HeaderText = styled.div`
  color: ${({ theme }) => theme.color.black5};
  font-family: Pretendard800;
  font-size: 40px;
  font-style: normal;
  font-weight: 800;
  line-height: 48px;
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
