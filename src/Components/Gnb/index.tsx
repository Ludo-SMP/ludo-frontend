import styled from 'styled-components';
import { Hamburger } from '../../Assets/Hamburger';
import GnbMenu from './GnbMenu';

const gnbMenuNames = ['메인 페이지', '스터디 모집 공고 모아보기', '마이페이지'];

const Gnb = () => {
  return (
    <GnbWrapper>
      <GnbBtnWrapper>
        <button>
          <Hamburger />
        </button>
      </GnbBtnWrapper>
      <GnbMenuListWrapper>
        <ul>
          {gnbMenuNames.map((gnbMenu) => (
            <GnbMenu name={gnbMenu} key={gnbMenu} />
          ))}
        </ul>
      </GnbMenuListWrapper>
    </GnbWrapper>
  );
};

const GnbWrapper = styled.div`
  display: flex;
  width: 100%;
  height: auto;
  padding: 8px 0;
  align-items: center;
  border: 1px solid ${(props) => props.theme.color.gray1};
  background: ${(props) => props.theme.color.white};
  gap: 12px;
`;

const GnbBtnWrapper = styled.div``;

const GnbMenuListWrapper = styled.div`
  ul {
    display: flex;
  }
`;
export default Gnb;
