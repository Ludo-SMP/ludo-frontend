import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

export interface MobileUtilityBtnProps {
  /** 텍스트 클릭 시, 이동할 Url*/
  destUrl: string;

  /** 펼쳤을 때의 전체 너비 */
  fullWidth?: number;

  /** 아이콘을 포함하는 원의 지름 */
  diameter?: number;

  /** 아이콘 이미지  */
  icon: React.ReactNode;

  /** Button에 들에갈 content */
  content: string;
}

export const MobileUtilityBtn = ({ fullWidth = 250, diameter = 56, icon, destUrl, content }: MobileUtilityBtnProps) => {
  const navigate = useNavigate();

  return (
    <MobileUtilityBtnBox $width={diameter} $height={diameter} $fullWidth={fullWidth}>
      <IconBox $width={diameter} $height={diameter}>
        {typeof icon === 'string' ? <img src={icon} width={diameter} height={diameter} /> : icon}
      </IconBox>
      <GuideBtn $fullWidth={fullWidth} $width={diameter} onClick={() => navigate(destUrl)}>
        {content}
      </GuideBtn>
    </MobileUtilityBtnBox>
  );
};

const MobileUtilityBtnBox = styled.div<{ $width: number; $height: number; $fullWidth: number }>`
  display: inline-block;
  width: ${({ $width }) => `${$width}px`};
  height: ${({ $height }) => `${$height}px`};
  border-radius: ${({ theme }) => theme.borderRadius.xlarge};
  background: ${({ theme }) => theme.color.white};
  border: 1px solid ${({ theme }) => theme.color.black1};
  box-shadow: 0px 0px 10px 0px ${({ theme }) => theme.color.black0};
  overflow: hidden;

  vertical-align: middle;
  white-space: nowrap;

  transition:
    all 0.3s ease-out,
    left 0.3s ease-out;

  &:hover {
    cursor: pointer;
    width: 250px;
  }

  &:active {
    background: linear-gradient(93deg, #6262b2 0%, #f7a477 100%);
    box-shadow: 0px 0px 10px 0px ${({ theme }) => theme.color.black0};
    color: ${({ theme }) => theme.color.white};

    &:first-child {
      svg > path {
        fill: ${({ theme }) => theme.color.white};
      }
    }

    button {
      color: ${({ theme }) => theme.color.white};
    }

    & > * {
      background: none;
    }
  }
`;

const IconBox = styled.div<{ $width: number; $height: number }>`
  display: inline-block;
  text-align: center;
  align-content: center;
  width: ${({ $width }) => `${$width}px`};
  height: ${({ $height }) => `${$height}px`};
  border-radius: ${({ theme }) => theme.borderRadius.xlarge};
  vertical-align: middle;
`;

const GuideBtn = styled.button<{ $fullWidth: number; $width: number }>`
  display: inline-block;
  text-align: start;
  padding: 0;
  padding-left: 4px;
  height: 100%;
  width: calc(100% - ${({ $width }) => $width}px - 4px);
  color: ${({ theme }) => theme.color.black3};
  background: ${({ theme }) => theme.color.white};

  /* Button/Button-SemiBold */
  font-family: 'Pretendard600';
  font-size: ${({ theme }) => theme.font.small};
  font-style: normal;
  font-weight: 600;
  line-height: 16px;
`;
