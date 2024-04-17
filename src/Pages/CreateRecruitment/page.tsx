import { useForm, SubmitHandler, Controller } from 'react-hook-form';
import { useParams } from 'react-router-dom';

import styled, { css } from 'styled-components';
import { One, Two, Three, Four, Loading } from '@/Assets';

// components
import Heading from '@/Components/Heading';
import Spacing from '@/Components/Spacing';
import Button from '@/Components/Common/Button';
import { TextArea } from '@/Components/Textarea';
import InputText from '@/Components/Common/InputText/iindex';
import { CalendarButton } from '@/Components/Selectbox/CalendarButton';
import { EndDate } from '@/Components/Calendar/EndDate';
import CustomSelect from '@/Components/Selectbox/CustomSelect';

import { CREATE_RECRUITMENT } from '@/Constants/messages';
import { PositionId, RecruitmentForm } from '@/Types/study';
import { APPLICATION_CNT, CONTACT, POSITION } from '@/Shared/study';

const CreateRecruitmentPage = () => {
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

  const data = watch();

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
              <Controller
                control={control}
                name="applicantCount"
                rules={{ required: CREATE_RECRUITMENT.applicantCount }}
                render={({ field }) => (
                  <CustomSelect label="모집 인원" placeholder="ex) 5명" values={APPLICATION_CNT} {...field} />
                )}
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
                  rules={{ required: CREATE_RECRUITMENT.recruitmentEndDateTime }}
                  render={({ field }) => <EndDate {...field} />}
                />
              </CalendarButton>
              {errors?.recruitmentEndDateTime?.message && (
                <ErrorMsg>{errors?.recruitmentEndDateTime?.message}</ErrorMsg>
              )}
            </GridItem>
            <GridItem>
              <Spacing size={12} />
              <Controller
                control={control}
                name="positionIds"
                rules={{ required: CREATE_RECRUITMENT.positionIds }}
                render={({ field }) => (
                  <CustomSelect label="포지션" placeholder="포지션" values={POSITION} {...field} />
                )}
              />
              {errors?.positionIds?.message && <ErrorMsg>{errors?.positionIds?.message}</ErrorMsg>}
            </GridItem>
            <GridItem>
              {/* TODO: 기술 스택 모달 적용 */}
              {/* <SelectBox
                label="기술 스택"
                values={STACK}
                defaultValue="기술 스택"
                {...register('stackIds', { required: CREATE_RECRUITMENT.stackIds })}
              /> */}
              {errors?.stackIds?.message && <ErrorMsg>{errors?.stackIds?.message}</ErrorMsg>}
            </GridItem>
            <GridItem>
              <Controller
                control={control}
                name="contact"
                rules={{ required: CREATE_RECRUITMENT.contact }}
                render={({ field }) => (
                  <CustomSelect label="연락방법" placeholder="연락방법" values={CONTACT} {...field} />
                )}
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
                {...register('callUrl', { required: CREATE_RECRUITMENT.contact })}
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
                {...register('title', { required: CREATE_RECRUITMENT.title, maxLength: 50 })}
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
