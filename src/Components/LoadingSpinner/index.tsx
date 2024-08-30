import { LoadingImage } from '@/Assets';
import styled from 'styled-components';

export const LoadingSpinner = () => {
  return (
    <LoadingSpinnerBox>
      <SpinnerImg src={LoadingImage} alt="loading spinner" />
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

const SpinnerImg = styled.img`
  opacity: 0.7;
  animation: rotateImage 1.2s linear infinite;
  transform-origin: 50% 50%;
  @keyframes rotateImage {
    0% {
      transform: rotate(0deg);
    }
    25% {
      transform: rotate(20deg);
    }
    50% {
      transform: rotate(0deg);
    }
    75% {
      transform: rotate(-20deg);
    }
    100% {
      transform: rotate(0deg);
    }
  }
`;
