import styled from 'styled-components';
import { Carousel } from '../Common/Carousel';
import { Banner1, Banner2 } from '@/Assets';
import { Settings } from 'react-slick';
import { Link } from 'react-router-dom';
import { NOTION_URL } from '@/Constants/common';

export const carouselOptions: Settings = {
  dots: false,
  autoplay: true,
  autoplaySpeed: 5000,
  draggable: true,
  infinite: true,
  speed: 400,
  slidesToShow: 1,
  arrows: false,
};

/** 메인 페이지 배너 */
const Banner = () => {
  const banners = [Banner2, Banner1];
  // const [slideIdx, setSlideIdx] = useState(1);

  return (
    <BannerBox>
      <Carousel options={carouselOptions}>
        {banners.map((banner, idx) => (
          <BannerItemWrapper key={idx} to={NOTION_URL} target="_blank">
            <img src={banner} />
          </BannerItemWrapper>
        ))}
      </Carousel>
      {/* <div className="bannerIdx">{slideIdx !== 1 ? 2 : 1} / 2</div> */}
    </BannerBox>
  );
};

const BannerBox = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  max-width: 1920px;

  & > div {
    width: 100%;
  }

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
`;

const BannerItemWrapper = styled(Link)`
  cursor: pointer;

  img {
    width: 100%;
  }
`;

export default Banner;
