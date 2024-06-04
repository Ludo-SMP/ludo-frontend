import { Logo } from '@/Assets';
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
