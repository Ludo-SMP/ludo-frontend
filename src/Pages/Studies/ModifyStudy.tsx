import styled from 'styled-components';
import { BackHeader } from '../../Components/Header/BackHeader';
import { ContactButton } from '../../Components/Button/Studies/ContactButton';
export const ModifyStudy = () => {
  return (
    <>
      <BackHeader />
      <StudyContainer>
        <StudyTitle>스터디 기본 안내</StudyTitle>
        <TopBox>
          <StudyInfo>
            {/* <StudyWrapper> */}
            <StudyWrapper>
              진행방식
              <ContactButton />
            </StudyWrapper>
            <StudyWrapper>
              진행방식
              <ContactButton />
            </StudyWrapper>
            <StudyWrapper>
              진행방식
              <ContactButton />
            </StudyWrapper>
            <StudyWrapper>
              진행방식
              <ContactButton />
            </StudyWrapper>
            <StudyWrapper>
              진행방식
              <ContactButton />
            </StudyWrapper>
            <StudyWrapper>
              진행방식
              <ContactButton />
            </StudyWrapper>
            {/* </StudyWrapper> */}
          </StudyInfo>
        </TopBox>
      </StudyContainer>
    </>
  );
};

const StudyContainer = styled.div`
  height: 1500px;
  padding-left: 220px;
  padding-right: 320px;
  display: flex;
  flex-direction: column;
`;
const TopBox = styled.div`
  width: 100%;
  height: 306px;
  border-bottom: 1px solid #444444;
  padding-bottom: 40px;
  align-items: center;
`;
// const StudyInfo = styled.div`
//   height: 306px;
//   flex-direction: row;
//   flex: 1 1 30%;
//   align-content: stretch;
// `;
// const StudyWrapper = styled.section`
//   font-size: 20px;
//   padding-bottom: 14px;
//   flex-direction: row;
//   /* flex: 1 1 30%; */
// `;
// const StudyTitle = styled.p`
//   font-size: 28px;
//   font-weight: bold;
// `;
// const StudyInfo = styled.div`
//   height: 306px;
//   flex-direction: row;
//   flex: 1 1 30%;
//   align-content: stretch;
//   flex-direction: row;
// `;
// const StudyWrapper = styled.section`
//   font-size: 20px;
//   padding-bottom: 14px;
//   flex-direction: row;
//   /* flex: 1 1 30%; */
// `;

// const StudyTitle = styled.p`
//   font-size: 28px;
//   font-weight: bold;
// `;

const StudyInfo = styled.div`
  display: grid;
  grid-template-columns: 392px 392px 392px;
  grid-template-rows: 150px 150px;
  gap: 24px 24px;
  /* height: 306px;
  flex: 1 1 30%;
  align-content: stretch;
  flex-direction: row; */
`;
const StudyWrapper = styled.section`
  font-size: 20px;
  padding-bottom: 14px;
  flex-direction: row;
  padding-right: 24px;
  /* flex: 1 1 30%; */
`;

const StudyTitle = styled.p`
  font-size: 28px;
  font-weight: bold;
`;
