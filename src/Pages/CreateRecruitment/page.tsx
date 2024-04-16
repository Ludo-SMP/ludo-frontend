import { useForm, SubmitHandler, Controller } from 'react-hook-form';
import { useParams } from 'react-router-dom';

import Recruitment from '@/Mocks/handlers/recruitment';
import styled, { css } from 'styled-components';
import { One, Two, Three, Four, Loading } from '@/Assets';

// components
import Heading from '@/Components/Heading';
import Spacing from '@/Components/Spacing';
import Button from '@/Components/Common/Button';
import InputText from '@/Components/Common/InputText/iindex';
import { CalendarButton } from '@/Components/Selectbox/CalendarButton';
import { EndDate } from '@/Components/Calendar/EndDate';
import { SelectBox } from '@/Components/Selectbox/SelectBox';

import { useStack } from '@/Hooks/stack/useStack';
import { TextArea } from '@/Components/Textarea';
import { PositionId, RecruitmentForm } from '@/Types/study';

const CreateRecruitmentPage = () => {
  const studyId = Number(useParams().studyId);

  const {
    register,
    handleSubmit,
    control,
    watch,
    formState: { errors },
  } = useForm<RecruitmentForm>();

  const onSubmit = handleSubmit((data) => {
    console.log('data', data);
  });

  const APPLICATION_CNT = {
    1: '1명',
    2: '2명',
    3: '3명',
    4: '4명',
    5: '5명',
    6: '6명',
    7: '7명',
    8: '8명',
    9: '9명',
    10: '10명',
  };

  const POSITION = {
    1: '백엔드',
    2: '프론트엔드',
    3: '디자이너',
    4: '데브옵스',
  };

  const CONTACT = {
    EMAIL: '이메일',
    KAKAO: '카카오톡',
  };

  const STACK = {
    1: 'JAVA',
    2: 'JavaScript',
  };

  const data = watch();

  console.log(data);

  const ERROR_MSG: Omit<Record<keyof RecruitmentForm, string>, 'content'> = {
    applicantCount: '모집 인원을 정해주세요.',
    recruitmentEndDateTime: '모집 마감일을 정해주세요.',
    positionIds: '포지션을 정해주세요.',
    stackIds: '기술 스택을 정해주세요.',
    title: '제목을 기입해주세요.',
    contact: '연락 방법을 정해주세요.',
    callUrl: '연결 url을 작성해주세요.',
  };

  return (
    <RecruitmentContainer>
      <form
        onSubmit={handleSubmit((data: Partial<RecruitmentForm>) => {
          console.log(data);
        })}
      >
        <Heading type={'Head'} component={'Page'}>
          스터디 팀원 모집하기
        </Heading>
        <Spacing size={40} />

        <Heading type={'Title'} component={'Page'}>
          <AssetContainer>
            <One />
          </AssetContainer>
          스터디 모집 안내
        </Heading>
        <Box display={'row'}>
          <Grid>
            <GridItem>
              <Spacing size={12} />
              <SelectBox
                label="모집 인원"
                values={APPLICATION_CNT}
                defaultValue="ex) 5명"
                {...register('applicantCount', { required: ERROR_MSG.applicantCount })}
              />
              {errors?.applicantCount?.message && <ErrorMsg>{errors?.applicantCount?.message}</ErrorMsg>}
            </GridItem>
            <GridItem>
              <Heading type={'Title'} component={'Input'}>
                모집 마감일
              </Heading>
              <Spacing size={12} />
              <CalendarButton>
                <Controller
                  control={control}
                  name="recruitmentEndDateTime"
                  render={({ field }) => <EndDate {...field} />}
                />
                {errors?.recruitmentEndDateTime?.message && <ErrorMsg>ss</ErrorMsg>}
              </CalendarButton>
            </GridItem>
            <GridItem>
              <Spacing size={12} />
              <SelectBox
                label="포지션"
                values={POSITION}
                defaultValue="포지션"
                {...register('positionIds', { required: ERROR_MSG.positionIds })}
              />

              {errors?.positionIds?.message && <ErrorMsg>{errors?.positionIds?.message}</ErrorMsg>}
            </GridItem>
            <GridItem>
              {/* TODO: 기술 스택 모달 적용 */}
              <SelectBox
                label="기술 스택"
                values={STACK}
                defaultValue="기술 스택"
                {...register('stackIds', { required: ERROR_MSG.stackIds })}
              />
              {errors?.stackIds?.message && <ErrorMsg>{errors?.stackIds?.message}</ErrorMsg>}
            </GridItem>
            <GridItem>
              <SelectBox
                label="연락 방법"
                values={CONTACT}
                defaultValue="연락방법"
                {...register('contact', { required: ERROR_MSG.contact })}
              />
              {errors?.contact?.message && <ErrorMsg>{errors?.contact?.message}</ErrorMsg>}
            </GridItem>
            <GridItem>
              <Heading type={'Title'} component={'Input'}>
                연결 url
              </Heading>
              <Spacing size={12} />
              <InputText
                placeholder="ex) 오픈 카카오톡 링크"
                {...register('callUrl', { required: ERROR_MSG.contact })}
              />
              {errors?.callUrl?.message && <ErrorMsg>{errors?.callUrl?.message}</ErrorMsg>}
            </GridItem>
          </Grid>
        </Box>
        <Spacing size={32} />
        <Hr />
        <Spacing size={32} />
        <Heading type={'Title'} component={'Page'}>
          <AssetContainer>
            <Two />
          </AssetContainer>
          스터디 진행 관련
        </Heading>

        {/* 추후 <Stack> 으로 변경 */}
        <Box display={'row'} gap={'24px'}>
          <BoxItem>
            <div className="box__title">진행 방식</div>
            <div className="box__content">진행 방식</div>
          </BoxItem>
          <BoxItem>
            <div className="box__title">진행 플랫폼</div>
            <div className="box__content">진행 플랫폼</div>
          </BoxItem>
          <BoxItem>
            <div className="box__title">진행 기간</div>
            <div className="box__content">진행 기간</div>
          </BoxItem>
        </Box>
        <Spacing size={32} />
        <Hr />
        <Spacing size={32} />
        <Heading type={'Title'} component={'Page'}>
          <AssetContainer>
            <Three />
          </AssetContainer>
          스터디 기본 구성
        </Heading>
        <Box display={'row'}>
          <BoxItem>
            <div className="box__title">스터디 제목</div>
            <div className="box__content">스터디 제목</div>
          </BoxItem>
        </Box>
        <Box display={'row'} gap={'24px'}>
          <BoxItem>
            <div className="box__title">카테고리</div>
            <div className="box__content">카테고리</div>
          </BoxItem>
          <BoxItem>
            <div className="box__title">스터디 최대 인원</div>
            <div className="box__content">스터디 최대 인원</div>
          </BoxItem>
        </Box>
        <Spacing size={32} />
        <Hr />
        <Spacing size={32} />
        <Heading type={'Title'} component={'Page'}>
          <AssetContainer>
            <Four />
          </AssetContainer>
          스터디 팀원 모집 공고 제목
        </Heading>
        <Box display={'column'}>
          <BoxItem>
            <div className="box__title">제목</div>
            <div className="box__content">
              <InputText
                placeholder="제목을 기입해주세요."
                maxLength={50}
                currentLength={data.title?.length ?? 0}
                {...register('title', { required: ERROR_MSG.title, maxLength: 50 })}
              />
              {errors?.title?.message && <ErrorMsg>{errors?.title?.message}</ErrorMsg>}
            </div>
          </BoxItem>
        </Box>
        <Box display={'column'}>
          <BoxItem>
            <div className="box__title">상세 내용</div>
            <div className="box__content">
              <TextArea
                {...register('content')}
                placeholder={'상세 내용을 기입해주세요.'}
                maxLength={2000}
                currentLength={data.content?.length ?? 0}
              />
            </div>
          </BoxItem>
        </Box>
        <Spacing size={40} />
        <ButtonBox>
          <Button scheme="secondary" size="fullWidth">
            등록하기
          </Button>
        </ButtonBox>
      </form>
    </RecruitmentContainer>
  );
};

export default CreateRecruitmentPage;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(392px, 1fr));
  gap: 24px;
`;

const AssetContainer = styled.image`
  padding-right: 12px;
`;

const GridItem = styled.div`
  display: flex;
  flex-direction: column;
  height: 132px;
`;

const RecruitmentContainer = styled.section`
  display: flex;
  flex-direction: column;
  max-width: 1224px;
  margin: 0 auto;
`;

const ErrorMsg = styled.p`
  margin-top: 12px;
  color: ${({ theme }) => theme.color.negative};
`;
const BoxItem = styled.div`
  display: flex;
  flex-direction: column;

  .box__title {
    font-size: 18px;
    line-height: 24px;
    color: #000000f2;
  }
  .box__content {
    font-size: 18px;
    line-height: 24px;
    color: #00000073;
    margin-top: 12px;
  }

  width: 100%;
`;

const Box = styled.div<{ display: 'row' | 'column'; gap?: string }>`
  display: flex;
  flex-direction: ${(props) => props.display};
  margin-top: 24px;
  width: 100%;

  ${(props) =>
    props.gap &&
    css`
      gap: ${props.gap};
    `}
`;

const Hr = styled.hr`
  width: 100%;
  background-color: ${({ theme }) => theme.color.gray1};
  height: 16px;
  border: none;
`;

const ButtonBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  gap: 24px;
`;
