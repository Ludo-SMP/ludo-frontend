import styled from 'styled-components';

export const StudyProgress = () => {
  return <Inner>진행한 4개의 스터디 중 2개 완주!</Inner>;
};

const Inner = styled.div`
  font-size: 18px;
  font-family: Pretendard500;
  font-weight: 500;
  line-height: 32px;
  text-align: center;
  border: 1px ${({ theme }) => theme.color.black2} solid;
  border-radius: 9999px;
  color: white;
  background-image: linear-gradient(to right, ${({ theme }) => theme.color.purple1} 40%, green 40%);
`;
