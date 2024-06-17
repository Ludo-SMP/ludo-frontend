import { NextArrow, PrevArrow } from '@/Assets';
import { media } from '@/Styles/theme';
import { CustomArrowProps } from 'react-slick';
import styled from 'styled-components';

export interface CustomArrowBtnprops {
  type: 'PREV' | 'NEXT';
}

export const CustomArrowBtn = ({
  type,
  onClick,
}: CustomArrowBtnprops & Pick<CustomArrowProps, 'onClick' | 'style'>) => {
  return (
    <CustomArrowBtnWrapper $type={type} onClick={onClick}>
      {type === 'PREV' ? <PrevArrow /> : <NextArrow />}
    </CustomArrowBtnWrapper>
  );
};

const CustomArrowBtnWrapper = styled.button<{ $type: 'PREV' | 'NEXT' }>`
  position: absolute;
  background: none;
  padding: 0;
  z-index: 1;
  top: calc(50% - 36px);
  left: ${({ $type }) => $type === 'PREV' && '40px'};
  right: ${({ $type }) => $type === 'NEXT' && '40px'};

  ${media.custom(500)} {
    display: none;
  }
`;
