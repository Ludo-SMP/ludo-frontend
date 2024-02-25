import styled from 'styled-components';

const Applicants = () => {
  return <ApplicantsWrapper>지원자 확인 페이지</ApplicantsWrapper>;
};

const ApplicantsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1224px;
  margin: 0 auto;
  margin-top: 40px;
  gap: 40px;
`;

export default Applicants;
