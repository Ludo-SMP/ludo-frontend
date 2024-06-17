import styled from 'styled-components';
import { Carousel } from '../Common/Carousel';
import { Banner1, Banner2 } from '@/Assets';
import { Settings } from 'react-slick';
import { Link } from 'react-router-dom';
import { NOTION_URL } from '@/Constants/common';
import { CustomArrowBtn } from './CustomArrowBtn';
import { useState } from 'react';
import { SetStateAction } from 'react';
import { media } from '@/Styles/theme';

export const createCarouselOptions = (handleSlideIdx: React.Dispatch<SetStateAction<number>>): Settings => {
  return {
    /** 배너의 contents 갯수로를 표시하는 dot의 유무 */
    dots: false,

    /** 자동 스크롤 사용 유무 */
    autoplay: true,

    /** 다음으로 넘어가는데 걸리는 시간(ms) */
    autoplaySpeed: 5000,

    /** 드래그 가능 여부 */
    draggable: false,

    /** 무한 반복 */
    infinite: true,

    /** 버튼으로 다음 이미지 보이는데 걸리는 시간(ms) */
    speed: 400,

    /** 배너에 보여질 이미지의 개수 */
    slidesToShow: 1,

    /** 앞뒤로 넘기는 arrow 유무 */
    arrows: true,

    /** 이전으로 이동하는 화살표 컴포넌트 */
    prevArrow: <CustomArrowBtn type="PREV" />,

    /** 다음으로 이동하는 화살표 컴포넌트 */
    nextArrow: <CustomArrowBtn type="NEXT" />,

    /** 슬라이더의 인덱스가 변경되기 직전에 호출되는 콜백함수 */
    beforeChange: (_, next) => handleSlideIdx(next + 1),
  };
};

/** 메인 페이지 배너 */
const Banner = () => {
  const banners = [Banner1, Banner2];
  const [slideIdx, setSlideIdx] = useState(1);
  const carouselOptions = createCarouselOptions(setSlideIdx);

  return (
    <BannerBox>
      <Carousel options={carouselOptions}>
        {banners.map((banner, idx) => (
          <BannerItemList key={idx} to={NOTION_URL} target="_blank">
            <img src={banner} />
          </BannerItemList>
        ))}
      </Carousel>
      <SlideIdxBox>{`${slideIdx}  /  ${banners.length}`}</SlideIdxBox>
    </BannerBox>
  );
};

const BannerBox = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  max-width: 1920px;
  height: 320px;

  & > div:first-child {
    position: relative;
    display: flex;
    width: 100%;

    div {
      width: 100%;
    }
  }
`;

const SlideIdxBox = styled.div`
  position: absolute;
  bottom: 24px;
  right: 349px;
  width: auto;
  border-radius: var(--Corner-radius-24, 24px);
  padding: 4px 12px;
  border: 1px solid ${({ theme }) => theme.color.black1};
  background: ${({ theme }) => theme.color.black3};
  color: ${({ theme }) => theme.color.white};
  white-space: pre;

  ${media.custom(1920)} {
    right: calc((100% - 1224px) / 2);
  }

  ${media.custom(1400)} {
    right: 50px;
  }
`;

const BannerItemList = styled(Link)`
  cursor: pointer;
  width: 100%;

  img {
    height: 320px;
    width: 100%;
    object-fit: cover;
  }
`;

export default Banner;
