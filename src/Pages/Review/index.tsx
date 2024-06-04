import { Logo } from '@/Assets';
import Button from '@/Components/Common/Button';
import { RowDivider } from '@/Components/Common/Divider/RowDivider';
import styled from 'styled-components';

export const ReviewPage = () => {
  return (
    <ReviewPageLayout>
      <Header>
        <HeaderInner>
          <img width="112" src={Logo} alt="Ludo" />
          <HeaderText>함께했던 스터디원 평가하기</HeaderText>
        </HeaderInner>
      </Header>
      <RowDivider />
      <Main>
        <MainInner>
          <Member></Member>
        </MainInner>
      </Main>
      <Footer>
        <FooterInner>
          <Button>나중에 새로 작성하기</Button>
          <Button>평가 작성 완료</Button>
        </FooterInner>
      </Footer>
    </ReviewPageLayout>
  );
};

const ReviewPageLayout = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
`;

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
  padding: 22px 655px 22px 0px;
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

const Main = styled.main`
  padding: 0px 24px;
  display: flex;
  justify-content: center;
`;

const MainInner = styled.div`
  padding: 40px 0px;
  max-width: 808px;
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

const Member = styled.div`
  max-width: 808px;
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

// 실제로는 의미적 푸터가 아닌 레이아웃상 하단을 의미
const Footer = styled.div`
  display: flex;
  padding: 0px 24px;
  justify-content: center;
  background: ${({ theme }) => theme.color.gray1};
`;

const FooterInner = styled.div`
  display: flex;
  max-width: 808px;
  padding: 24px 0px 40px 0px;
  justify-content: center;
  gap: 24px;
  background: ${({ theme }) => theme.color.gray1};
`;
