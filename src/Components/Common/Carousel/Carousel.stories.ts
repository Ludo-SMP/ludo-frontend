import type { Meta, StoryObj } from '@storybook/react';
import { Carousel } from '.';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const meta = {
  component: Carousel,
} satisfies Meta<typeof Carousel>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    options: {
      dots: true,
      autoplay: true,
      autoplaySpeed: 5000,
      draggable: true,
      infinite: true,
      speed: 400,
      slidesToShow: 1,
      arrows: false,
    },
  },
};
