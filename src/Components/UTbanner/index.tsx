import { UTLogo } from '@/Assets';
import { media } from '@/Styles/theme';
import styled from 'styled-components';

const GOOGLEFORM_URL =
  'https://docs.google.com/forms/d/1TEohqnq2Nl2HcCXdd1Sd_mroMnLKxAV2dd7ufPyRK1M/viewform?edit_requested=true';
const UT_GUIDE = '서비스를 이용해보시고, 소중한 의견을 공유해주세요! 추첨을 통해 소정의 상품을 드립니다 :)';

const UTbanner = () => {
  return (
    <UTbannerWrapper href={GOOGLEFORM_URL} target="_blank">
      <ContentWrapper>
        <img src={UTLogo} alt="로고" />
        <div className="ut__guide">{UT_GUIDE}</div>
        <div className="ut__period">기간 : 03.26~03.30</div>
      </ContentWrapper>
    </UTbannerWrapper>
  );
};

const UTbannerWrapper = styled.a`
  top: 0;
  z-index: 100;
  position: sticky;
  display: flex;
  justify-content: center;
  width: 100vw;
  max-width: 1920px;
  padding: 8px 0;
  margin: 0 auto;
  background: linear-gradient(93deg, #6f6f6f 0%, #313131 100%);

  &:hover {
    cursor: pointer;
  }

  ${media.custom(800)} {
    display: none;
  }
`;

const ContentWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 744px;
  margin: 0 auto;
  gap: 32px;

  .ut__guide {
    color: ${({ theme }) => theme.color.white};
    font-family: 'Pretendard600';
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    line-height: 32px;
  }

  .ut__period {
    color: var(--Font-Page-body-white-2, rgba(255, 255, 255, 0.5));
    font-family: 'Pretendard600';
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    line-height: 32px;
  }
`;

export default UTbanner;
