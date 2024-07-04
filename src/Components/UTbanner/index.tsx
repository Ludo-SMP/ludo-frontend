import { UTLogo } from '@/Assets';
import styled from 'styled-components';
import { media } from '@/Styles/theme';

const GOOGLEFORM_URL =
  'https://docs.google.com/forms/d/10ip7-e60WrrzalT253IysxO3QRsWgibrMTX-CRcOSqI/viewform?edit_requested=true';
const UT_GUIDE = '서비스를 이용해보시고, 소중한 의견을 공유해주세요! 추첨을 통해 소정의 상품을 드립니다 :)';

/** 유저테스트 배너 */
const UTbanner = () => {
  return (
    <UTbannerWrapper href={GOOGLEFORM_URL} target="_blank">
      <ContentWrapper>
        <img src={UTLogo} alt="로고" />
        <div className="ut__guide">{UT_GUIDE}</div>
        <div className="ut__period">기간 : 07.04~07.11</div>
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
  padding: 8px;
  margin: 0 auto;
  background: linear-gradient(93deg, #6f6f6f 0%, #313131 100%);

  &:hover {
    cursor: pointer;
  }
`;

const ContentWrapper = styled.div`
  display: flex;
  align-items: center;
  margin: 0 auto;
  gap: 32px;

  ${media.mobile} {
    gap: 15px;

    img {
      display: none;
    }
  }

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
