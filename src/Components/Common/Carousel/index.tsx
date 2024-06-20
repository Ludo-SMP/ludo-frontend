import Slider, { Settings } from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export interface CarouselProps {
  options?: Settings;
  children?: React.ReactNode;
}

export const Carousel = ({ options, children }: CarouselProps) => {
  return <Slider {...options}>{children}</Slider>;
};
