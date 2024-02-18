import { Hamburger } from '@/Assets';
import styled from 'styled-components';

const HamburgerSection = () => {
  return (
    <HamburgerSectionWrapper>
      <Hamburger />
    </HamburgerSectionWrapper>
  );
};

const HamburgerSectionWrapper = styled.div`
  padding-right: 20px;
`;

export default HamburgerSection;
