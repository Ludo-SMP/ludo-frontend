import styled from 'styled-components';
import { ProgressButton } from '../../Components/Selectbox/ProgressButton';
import { PlatformButton } from '../../Components/Selectbox/PlatformButton';
import { Titlearea } from '../../Components/Textarea/Titlearea';
import { SubmitButton } from '../../Components/Button/Studies/SubmitButton';
import { CalendarButton } from '../../Components/Selectbox/CalendarButton';
import { BigCategoryButton } from '../../Components/Selectbox/BigCategoryButton';
import { MaxPeopleButton } from '../../Components/Selectbox/MaxPeopleButton';
import { ProgressPeriod } from '../../Components/Calendar/ProgressPeriod';
import { useState, useEffect, Key, useRef } from 'react';
import { Validation } from '../../Constants/Validation';
import { media } from '../../Styles/theme';
// import { Titles } from '../../Components/Textarea/Titlearea';
import axios from 'axios';
import { useSetAtom, useAtomValue, useAtom } from 'jotai';
import { useForm } from 'react-hook-form';

interface IFormInput {
  title: string;
  pattern: string;
}
export const CreateStudy = (Props: any) => {
  // {register} = useForm
  // 폼 데이터
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [titleValue, settitleValue] = useState('');
  // const setValue = useAtomValue(Titles);
  // const titleHandler = (event: any) => {
  //   settitleValue(event.target.value);
  //   console.log(setValue);
  // };
  const [formData, setFormData] = useState({
    title: '',
    category: '',
  });

  // const [isSubmitting, setIsSubmitting] = useState(false);
  // const [formErrors, setFormErrors] = useState({});

  // const handleInputChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
  //   const { name, value } = event.target;
  //   setFormData((prevFormData) => ({
  //     ...prevFormData,
  //     [name]: value,
  //   }));
  //   console.log(formData);
  // };

  // async function post() {
  //   console.log('post');
  //   const { data } = await axios.post('http://localhost:3000/api/test', {
  //     name: 'a',
  //     email: '이메일',
  //     title: formData.title,
  //     category: formData.category,
  //   });

  //   console.log(data);
  // }

  // const postData = () => {
  //   // async function post() {
  //   //   console.log('post');
  //   //   const { data } = await axios.post('http://localhost:3000/api/test', {
  //   //     name: 'a',
  //   //     email: '이메일',
  //   //     title: formData.title,
  //   //     category: formData.category,
  //   //   });

  //   //   console.log(data);
  //   // }
  //   // return post();
  //   return post();
  // };

  // const validateForm = (values: { title: string; category: string | any[] }) => {
  //   if (!values.title) {
  //     setFormErrors({ email: '제목을 입력해주세요' });
  //   }
  //   if (!values.category) {
  //     setFormErrors({ password: '분야를 골라주세요' });
  //   }
  // };

  // event: React.FormEvent<HTMLFormElement>
  // const createHandler = (event: React.FormEvent<HTMLFormElement>) => {
  //   event.preventDefault();
  //   setIsSubmitting(true);
  //   postData();
  // };
  // action="http://localhost:3000/api/test" method="POST"
  // onSubmit={createHandler}
  // type="text" id="title" register={register}
  return (
    <>
      <StudyContainer>
        <StudyMain>스터디 생성하기</StudyMain>
        <TopBox>
          <StudyTitle>스터디 제목</StudyTitle>
          <BottomWrapper>
            <ContentText>제목</ContentText>
            <Titlearea />
          </BottomWrapper>
        </TopBox>
        <MiddleBox>
          <StudyTitle>스터디 상세 안내</StudyTitle>
          <MiddleWrapper>
            <MiddleBottomInfo>
              <MiddleBottomWrapper>
                <ContentText>카테고리</ContentText>
                <BigCategoryButton />
              </MiddleBottomWrapper>
              <MiddleBottomWrapper>
                <ContentText>스터디 최대 인원</ContentText>
                <MaxPeopleButton />
              </MiddleBottomWrapper>
            </MiddleBottomInfo>
          </MiddleWrapper>
        </MiddleBox>
        <MiddleCenterBox>
          <StudyTitle>스터디 진행관련</StudyTitle>
          <StudyMiddleInfo>
            <StudyWrapper>
              <ContentText>진행방식</ContentText>
              <ProgressButton />
            </StudyWrapper>
            <StudyWrapper>
              <ContentText>진행 플랫폼</ContentText>
              <PlatformButton />
            </StudyWrapper>
            <StudyWrapper>
              <ContentText> 진행기간</ContentText>
              <CalendarButton>
                <ProgressPeriod />
              </CalendarButton>
            </StudyWrapper>
          </StudyMiddleInfo>
        </MiddleCenterBox>
        <ButtonBox>
          <SubmitButton type="submit">임시저장</SubmitButton>
          <SubmitButton type="submit">등록하기</SubmitButton>
        </ButtonBox>
      </StudyContainer>
    </>
  );
};

const StudyMain = styled.p`
  font-size: ${(props) => props.theme.font.xxxlarge};
  text-align: left;
  font-weight: 800;
  line-height: 60px;
  padding-bottom: 60px;
  padding-top: 40px;
  ${media.custom(800)} {
    display: none;
  }
`;

const StudyContainer = styled.form`
  height: 1300px;
  padding-left: 348px;
  padding-right: 348px;
  display: flex;
  flex-direction: column;
  text-align: left;
`;
const TopBox = styled.div`
  height: 250px;
  border-bottom: 1px solid #444444;
  padding-top: 40px;
  padding-bottom: 20px;
  text-align: left;
`;

const MiddleBox = styled.div`
  height: 300px;
  align-items: center;
  padding-top: 40px;
`;

const MiddleCenterBox = styled.div`
  height: 250px;
  align-items: center;
  padding-top: 20px;
`;

const StudyMiddleInfo = styled.div`
  display: grid;
  grid-template-columns: 430px 430px 430px;
  grid-template-rows: 50px;
  row-gap: 16px 16px;
  column-gap: 16px 16px;
`;

const MiddleBottomInfo = styled.div`
  display: grid;
  grid-template-columns: 630px 630px;
  grid-template-rows: 80px;
  font-size: ${(props) => props.theme.font.medium};
  row-gap: 24px 24px;
  column-gap: 24px 24px;
  padding-bottom: 40px;
`;
const MiddleBottomWrapper = styled.section`
  font-size: ${(props) => props.theme.font.medium};
  flex-direction: row;
  padding-top: 40px;
`;

const MiddleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 40px;
  font-size: ${(props) => props.theme.font.medium};
  border-bottom: 1px solid #444444;
`;

const BottomWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 16px;
  font-size: ${(props) => props.theme.font.medium};
`;

const StudyWrapper = styled.section`
  font-size: ${(props) => props.theme.font.medium};
  padding-bottom: 14px;
  flex-direction: row;
  padding-right: 24px;
`;

const ButtonBox = styled.div`
  display: flex;
  flex-direction: row;
  gap: 24px;
  padding-bottom: 80px;
`;

const StudyTitle = styled.p`
  font-size: ${(props) => props.theme.font.xlarge};
  font-weight: bold;
  align-items: left;
  font-weight: 800;
  line-height: 50px;
  padding-bottom: 16px;
`;

const ContentText = styled.p`
  padding-bottom: 10px;
`;
