import styled from 'styled-components';
import { useEffect, useRef, useState } from 'react';
import { Banner1, Banner2 } from '@/Assets';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '@/Constants/route';
import { media } from '@/Styles/theme';

const useInterval: { (callback: () => void, interval: number): void } = (callback, interval) => {
  const savedCallback = useRef<(() => void) | null>(null);

  useEffect(() => {
    savedCallback.current = callback;
  });

  useEffect(() => {
    function tick() {
      if (savedCallback.current) {
        savedCallback.current();
      }
    }
    if (interval !== 10000) {
      const id = setInterval(tick, interval);
      return () => clearInterval(id);
    }
  }, [interval]);
};

/** 메인 페이지 배너 */
const Banner = () => {
  const outRef = useRef<HTMLDivElement>(null);
  const slideRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  const banners = [Banner2, Banner1, Banner2];
  const [slideIdx, setSlideIdx] = useState(1);
  const [slideInterval, setSlideInterval] = useState(5000);
  useInterval(() => setSlideIdx((slideIdx) => slideIdx + 1), slideInterval);

  if (slideIdx === 3) {
    if (slideRef.current) slideRef.current.style.transition = '';

    setSlideIdx(0);
    setTimeout(() => {
      if (slideRef.current) {
        slideRef.current.style.transition = 'all 600ms ease-in-out';
      }
    }, 0);
  }

  useEffect(() => {
    if (slideIdx === 0) {
      setSlideInterval(0);
    } else {
      setSlideInterval(5000);
    }
  }, [slideIdx]);

  return (
    <BannerWrapper ref={outRef}>
      <BannerItemsWrapper ref={slideRef} bannerLength={3} idx={slideIdx}>
        {banners.map((banner, idx) => (
          <BannerItemWrapper key={idx} onClick={() => navigate(ROUTES.RECRUITMENT.RECRUITMENTS)}>
            <img src={banner} />
          </BannerItemWrapper>
        ))}
      </BannerItemsWrapper>
      <div className="bannerIdx">{slideIdx !== 1 ? 2 : 1} / 2</div>
    </BannerWrapper>
  );
};

const BannerWrapper = styled.div`
  display: flex;
  position: relative;
  overflow: hidden;
  max-width: 1224px;

  .bannerIdx {
    position: absolute;
    bottom: 20px;
    right: 10px;
    border-radius: var(--Corner-radius-24, 24px);
    padding: 4px 12px;
    border: 1px solid ${({ theme }) => theme.color.black1};
    background: ${({ theme }) => theme.color.black3};
    color: ${({ theme }) => theme.color.white};
  }

  ${media.custom(1224)} {
    width: 1024px;
  }

  ${media.custom(1024)} {
    width: 800px;
  }

  ${media.custom(800)} {
    width: 600px;
  }

  ${media.custom(800)} {
    display: none;
  }
`;

const BannerItemsWrapper = styled.div<{ bannerLength: number; idx: number }>`
  display: flex;
  transition: 'all 500ms ease-in-out';
  transform: ${({ bannerLength, idx }) => `translateX(${-1 * ((100 / bannerLength) * idx)}%)`};

  ${media.custom(1224)} {
    width: ${({ bannerLength }) => `${1024 * bannerLength}px`};
  }

  ${media.custom(1024)} {
    width: ${({ bannerLength }) => `${800 * bannerLength}px`};
  }

  ${media.custom(800)} {
    width: ${({ bannerLength }) => `${600 * bannerLength}px`};
  }
`;

const BannerItemWrapper = styled.div`
  cursor: pointer;
  position: relative;
  overflow: hidden;
  width: 1224px;
  height: 320px;

  img {
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    position: absolute;
  }
`;

export default Banner;
