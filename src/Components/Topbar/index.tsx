import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

export interface TopBarProps {
  /** 왼쪽방향 아이콘과 제목 사이의 gap */
  gap?: number;

  /** Topbar Title content */
  children?: React.ReactNode;
}

export const TopBar = ({ gap = 12, children }: TopBarProps) => {
  const navigate = useNavigate();
  return (
    <TopbarWrapper gap={gap}>
      <MoveBack onClick={() => navigate(-1)}>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path
            d="M17.4396 24C17.2348 24 17.03 23.922 16.874 23.7656L6.21997 13.112C5.60677 12.4988 5.60677 11.5012 6.21997 10.8884L16.874 0.234422C17.1864 -0.0779779 17.6928 -0.0779779 18.0052 0.234422C18.3176 0.546822 18.3176 1.05322 18.0052 1.36562L7.37117 12L18.0056 22.6344C18.318 22.9468 18.318 23.4532 18.0056 23.7656C17.8492 23.922 17.6448 24 17.44 24H17.4396Z"
            fill="black"
            fill-opacity="0.65"
          />
        </svg>
      </MoveBack>
      <TopBarTitle>{children}</TopBarTitle>
    </TopbarWrapper>
  );
};

const TopbarWrapper = styled.div<{ gap?: number }>`
  display: flex;
  flex: 1 0 0;
  max-width: 1224px;
  width: 100%;
  align-items: center;
  gap: ${({ gap }) => `${gap}px`};
`;

const MoveBack = styled.div`
  display: flex;
  padding: 8px;

  &:hover {
    cursor: pointer;
    svg path {
      fill-opacity: 0.85;
    }
  }
`;

const TopBarTitle = styled.p`
  color: ${({ theme }) => theme.color.black5};
  font-family: 'Pretendard600';
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: 32px;
  flex: 1 0 0;
`;
