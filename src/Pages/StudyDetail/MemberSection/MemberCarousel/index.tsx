import { Right, Left } from '@/Assets';
import MemberProfile, { MemberProfileProps } from '@/Components/MemberProfile';
import { useState } from 'react';
import styled from 'styled-components';

export interface MemberCarouselProps {
  memberProfiles: MemberProfileProps[];
}

const MemberCarousel = ({ memberProfiles }: MemberCarouselProps) => {
  const totalIndex = memberProfiles.length - 2;
  const [index, setIndex] = useState<number>(0);

  const leftClickHandler = () => {
    setIndex((prevIndex) => (prevIndex - 1 + totalIndex) % totalIndex);
  };
  const rightClickHandler = () => {
    setIndex((prevIndex) => (prevIndex + 1) % totalIndex);
  };

  return (
    <MemberCarouselWrapper index={index}>
      <div>
        <div onClick={leftClickHandler} role="presentation">
          <Left />
        </div>
      </div>
      <div className="c1">
        <div className="c2">
          {memberProfiles.map((memberProfile: MemberProfileProps) => {
            return <MemberProfile {...memberProfile} />;
          })}
        </div>
      </div>

      <div>
        <div onClick={rightClickHandler} role="presentation">
          <Right />
        </div>
      </div>
    </MemberCarouselWrapper>
  );
};

const MemberCarouselWrapper = styled.div<{ index: number }>`
  display: flex;
  align-items: center;
  max-width: 1224px;
  gap: 24px;

  .c1 {
    overflow: hidden;
    position: relative;
  }

  .c2 {
    display: flex;
    transform: translateX(-(${({ index }) => index} + 420) px);
    transition: '0.3s ease-in-out';
    gap: 24px;
  }
`;
export default MemberCarousel;
