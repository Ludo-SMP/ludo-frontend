import { LoadingImage } from '@/Assets';
import styled from 'styled-components';

export const LoadingSpinner = () => {
  return (
    <LoadingSpinnerBox>
      <img src={LoadingImage} alt="loading spinner" />
    </LoadingSpinnerBox>
  );
};

const LoadingSpinnerBox = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;
