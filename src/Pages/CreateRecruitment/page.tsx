import { useCallback, useEffect, useState } from 'react';
import { useForm, SubmitHandler, Controller } from 'react-hook-form';
import { useLocation, useParams } from 'react-router-dom';
import { v1 as uuidv1 } from 'uuid';

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
import { Stack } from '@/Components/Common/Stack';

import { Stack as StackType } from '@/Types/study';

import { CREATE_RECRUITMENT } from '@/Constants/messages';
import { RecruitmentForm } from '@/Types/study';
import { APPLICATION_CNT, CONTACT, POSITIONS, POSITION } from '@/Shared/study';
import { useCreateRecruitmentMutation } from '@/Hooks/recruitments/useCreateRecruitment';
import { useSavedKeyStore } from '@/store/study';
import { useStudyDetail } from '@/Hooks/study/useStudyDetail';
import { getPeriod } from '@/utils/date';
import { useModalStore } from '@/store/modal';
import Modal from '@/Components/Common/Modal';
import StackModal from '@/Components/Modal/StackModal';
import { Label } from '@/Components/Selectbox/SelectBox';
import { useSelectDefaultValue } from '@/Hooks/recruitments/useSelectDefaultValue';

const DEF_VAL = 'ex. Typescript';

const CreateRecruitmentPage = () => {
  const studyId = Number(useParams().studyId);
  const { pathname } = useLocation();

  const { isModalOpen, openModal, closeModal } = useModalStore();

  // 임시저장된 키가 있는지 확인
  const savedKey = useSavedKeyStore((state) => state.savedKey);
  const setSavedKey = useSavedKeyStore((state) => state.setSavedKey);
  const tempSaved: RecruitmentForm | null = JSON.parse(localStorage.getItem(savedKey)) ?? null;

  const getDefVal = useSelectDefaultValue();

  useEffect(() => {
    getDefVal('stackIds');
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
    return () => {
      // 언마운트될 때, 임시저장 선택된 키 초기화
      if (tempSaved) setSavedKey('');
    };
  }, [pathname]);

  const {
    register,
    handleSubmit,
    control,
    watch,
    formState: { errors },
  } = useForm<RecruitmentForm>({
    defaultValues: tempSaved,
  });

  const { mutate } = useCreateRecruitmentMutation(studyId);

  const { data: shortStudy, isLoading } = useStudyDetail(studyId);
  const studyDetail = shortStudy?.study;

  const onSubmit = (data: RecruitmentForm) => {
    // TODO: 선택 안하고, 등록하기 누른 경우 확인
    if (!selectedStacks || selectedStacks?.length === 0) {
      setSelectedStacks([]); // 초기값 세팅
      return;
    }

    // TODO: stackIds 추가
    const test: RecruitmentForm = { ...data, positionIds: [0] };
    console.log('test', test, uuidv1());
    mutate(test);
  };

  const data = watch();

  const saveTemporary = (savedKey: string) => {
    if (savedKey.length > 0) localStorage.removeItem(savedKey);
    const newSavedKey = `RECRUITMENT-${studyId}-${uuidv1()}`;
    localStorage.setItem(newSavedKey, JSON.stringify({ ...data, stackIds: selectedStacks }));
  };

  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selectedStacks, setSelectedStacks] = useState<StackType[] | null>(null);
  const [content, setContent] = useState(DEF_VAL);

  const handleSelectedStacks = (stacks: StackType[]) => {
    setSelectedStacks([...stacks]);
    let content = stacks.map((stack) => stack.name).join(', ');
    setContent(content);
  };

  const toggleDropdonwItems = () => setIsOpen(!isOpen);

  return (
    <RecruitmentContainer>
      {isModalOpen && (
        <Modal
          handleApprove={() => {
            closeModal();
            saveTemporary(savedKey);
          }}
          cancelBtnText="취소하기"
          title="작성 중인 스터디 생성 글을 임시 저장 하시겠습니까?"
          approveBtnText="확인하기"
        >
          임시 저장한 글은 ‘마이 페이지 {'>'} 임시 저장된 글’ 에서 확인하실 수 있습니다.
        </Modal>
      )}
      {isLoading ? (
        <Loading />
      ) : (
        <form onSubmit={handleSubmit(onSubmit)}>
          <Heading type={'Head'} component={'Page'}>
            스터디 팀원 모집하기
          </Heading>
          <Spacing size={40} />
          <Stack divider={<Divider />}>
            <FormSection>
              <Heading type={'Title'} component={'Page'}>
                <AssetContainer>
                  <One />
                </AssetContainer>
                스터디 모집 안내
              </Heading>
              <Grid>
                <GridItem>
                  <Controller
                    control={control}
                    name="applicantCount"
                    rules={{ required: CREATE_RECRUITMENT.applicantCount }}
                    render={({ field }) => (
                      <CustomSelect
                        label="모집 인원"
                        placeholder="ex) 5명"
                        defaultValue={getDefVal('applicantCount')}
                        values={APPLICATION_CNT}
                        {...field}
                      />
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
                      render={({ field }) => (
                        <EndDate {...field} defaultValue={getDefVal('recruitmentEndDateTime') as string} />
                      )}
                    />
                  </CalendarButton>
                  {errors?.recruitmentEndDateTime?.message && (
                    <ErrorMsg>{errors?.recruitmentEndDateTime?.message}</ErrorMsg>
                  )}
                </GridItem>
                <GridItem>
                  <Controller
                    control={control}
                    name="positionIds"
                    rules={{ required: CREATE_RECRUITMENT.positionIds }}
                    render={({ field }) => (
                      <CustomSelect
                        label="포지션"
                        placeholder="포지션"
                        defaultValue={getDefVal('positionIds')}
                        values={POSITION}
                        {...field}
                      />
                    )}
                  />
                  {errors?.positionIds?.message && <ErrorMsg>{errors?.positionIds?.message}</ErrorMsg>}
                </GridItem>
                <GridItem>
                  <Label>
                    기술 스택
                    <Select onClick={toggleDropdonwItems}>
                      <TechInput value={content === DEF_VAL ? null : content} placeholder={DEF_VAL} />
                    </Select>
                  </Label>
                  {isOpen && (
                    <StackModal
                      handleModal={setIsOpen}
                      initialSelectedStacks={selectedStacks ?? []}
                      handleSelectedStacks={handleSelectedStacks}
                    />
                  )}
                  {selectedStacks?.length === 0 && <ErrorMsg>{'스택을 선택해주세요'}</ErrorMsg>}
                </GridItem>
                <GridItem>
                  <Controller
                    control={control}
                    name="contact"
                    rules={{ required: CREATE_RECRUITMENT.contact }}
                    render={({ field }) => (
                      <CustomSelect
                        label="연락방법"
                        placeholder="연락방법"
                        defaultValue={getDefVal('contact')}
                        values={CONTACT}
                        {...field}
                      />
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
                    defaultValue={getDefVal('callUrl') as string}
                    {...register('callUrl', { required: CREATE_RECRUITMENT.contact })}
                  />
                  {errors?.callUrl?.message && <ErrorMsg>{errors?.callUrl?.message}</ErrorMsg>}
                </GridItem>
              </Grid>
            </FormSection>
            <FormSection>
              <Heading type={'Title'} component={'Page'}>
                <AssetContainer>
                  <Two />
                </AssetContainer>
                스터디 진행 관련
              </Heading>

              <Box display="row" gap="24px">
                <BoxItem>
                  <div className="box__title">진행 방식</div>
                  <div className="box__content">{studyDetail.way}</div>
                </BoxItem>
                <BoxItem>
                  <div className="box__title">진행 플랫폼</div>
                  <div className="box__content">{studyDetail.platform}</div>
                </BoxItem>
                <BoxItem>
                  <div className="box__title">진행 기간</div>
                  <div className="box__content">{getPeriod(studyDetail.startDateTime, studyDetail.endDateTime)}</div>
                </BoxItem>
              </Box>
              <Spacing size={32} />
            </FormSection>
            <FormSection>
              <Heading type={'Title'} component={'Page'}>
                <AssetContainer>
                  <Three />
                </AssetContainer>
                스터디 기본 구성
              </Heading>
              <Box display="row" gap="24px">
                <BoxItem>
                  <div className="box__title">스터디 제목</div>
                  <div className="box__content">{studyDetail.title || '스터디 제목'}</div>
                </BoxItem>

                <BoxItem>
                  <div className="box__title">카테고리</div>
                  <div className="box__content">{studyDetail.category.name || '카테고리'}</div>
                </BoxItem>
                <BoxItem>
                  <div className="box__title">스터디 최대 인원</div>
                  <div className="box__content">{studyDetail.participantLimit}</div>
                </BoxItem>
              </Box>
              <Spacing size={32} />
            </FormSection>
            <FormSection>
              <Heading type={'Title'} component={'Page'}>
                <AssetContainer>
                  <Four />
                </AssetContainer>
                스터디 팀원 모집 공고 제목
              </Heading>
              <Box display={'column'} gap="24px">
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
            </FormSection>
          </Stack>
          <ButtonBox>
            <div className="button__wrap">
              <Button type="button" onClick={openModal} scheme="normal" size="fullWidth">
                임시저장
              </Button>
            </div>
            <div className="button__wrap">
              <Button scheme="secondary" size="fullWidth">
                등록하기
              </Button>
            </div>
          </ButtonBox>
        </form>
      )}
    </RecruitmentContainer>
  );
};

export default CreateRecruitmentPage;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(392px, 1fr));
  gap: 24px;
  margin-top: 24px;
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

const BoxItem = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

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
`;

const Box = styled.div<{ display: 'row' | 'column'; gap?: string }>`
  display: flex;
  flex-direction: ${(props) => props.display};
  width: 100%;
  margin-top: 24px;

  ${(props) =>
    props.gap &&
    css`
      gap: ${props.gap};
    `}
`;

const Divider = styled.div`
  height: 12px;
  background: #f2f3f3;
`;

const ButtonBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  gap: 24px;

  .button__wrap {
    display: flex;
    width: 100%;
  }
`;

const FormSection = styled.section`
  display: flex;
  flex-direction: column;

  /* 형제 요소일 경우 margin-top 적용 */
  & ~ & {
    margin-top: 20px;
  }
`;

export const Select = styled.div`
  position: relative;
  height: 44px;
  width: 100%;
  padding: 10px 16px 10px 16px;
  border-radius: 8px;
  border: 1px solid ${(props) => props.theme.color.black1};

  background-color: ${(props) => props.theme.color.white};
  color: ${(props) => props.theme.color.gray3};
`;

export const TechInput = styled.input`
  position: absolute;
  color: ${(props) => props.theme.color.gray3};
  display: block;
  white-space: nowrap;
  overflow: hidden;
  width: 80%;
  font-family: 'Pretendard400';
  text-overflow: ellipsis;

  &::placeholder {
    color: ${(props) => props.theme.color.black2};
  }
`;

export const ErrorMsg = styled.p`
  margin-top: 12px;
  color: ${({ theme }) => theme.color.negative};
`;
