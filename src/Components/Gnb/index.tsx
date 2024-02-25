import styled from 'styled-components';
import { Hamburger } from '../../Assets/Hamburger';

const Gnb = () => {
  return (
    <GnbWrapper>
      <div className="hamburger__btn">
        <button>
          <Hamburger />
        </button>
      </div>
      <div className="nav__section">메인페이지</div>
      <div className="nav__section">스터디 모집 공고 모아보기</div>
    </GnbWrapper>
  );
};

const GnbWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 60px;
  padding: 8px 0;
  align-items: center;
  border: 1px solid ${(props) => props.theme.color.gray1};
  background: ${(props) => props.theme.color.white};
  gap: 12px;

  .nav__section {
    display: flex;
    height: 44px;
    width: 288px;
    padding: 0 12px;
    justify-content: center;
    align-items: center;
    gap: 8px;
    flex-shrink: 0;
  }
`;

export default Gnb;
