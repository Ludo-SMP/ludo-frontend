import { Logo } from '@/Assets';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export interface HeaderWithLogoProps {
  /** 헤더 제목 */
  title: string;
}

/** 로고만 있는 헤더 */
const HeaderWithLogo = ({ title }: HeaderWithLogoProps) => {
  return (
    <Header>
      <HeaderInner>
        <Link to="/">
          <img width="112" src={Logo} alt="Ludo" />
        </Link>
        <HeaderText>{title}</HeaderText>
      </HeaderInner>
    </Header>
  );
};

export { HeaderWithLogo };

const Header = styled.header`
  display: flex;
  padding: 0px 24px;
  justify-content: center;
  background: ${({ theme }) => theme.color.white2};
`;

const HeaderInner = styled.div`
  width: 1224px;
  height: 92px;
  max-width: 1224px;
  padding: 22px 0;
  display: flex;
  align-items: center;
  gap: 24px;
`;

const HeaderText = styled.div`
  color: ${({ theme }) => theme.color.black5};
  font-family: Pretendard800;
  font-size: 40px;
  font-style: normal;
  font-weight: 800;
  line-height: 48px;
`;
