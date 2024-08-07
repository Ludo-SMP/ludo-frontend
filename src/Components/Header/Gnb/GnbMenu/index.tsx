import { media } from '@/Styles/theme';
import styled from 'styled-components';

interface GnbMenuProps {
  name: string;
  onClick: () => void;
}

const GnbMenu = ({ name, onClick }: GnbMenuProps) => {
  return <GnbMenuWrapper onClick={onClick}>{name}</GnbMenuWrapper>;
};

const GnbMenuWrapper = styled.button`
  display: flex;
  height: 56px;
  width: 288px;
  padding: 4px 12px;
  justify-content: center;
  text-align: center;
  align-items: center;
  flex-shrink: 0;
  color: ${(props) => props.theme.color.black3};
  background-color: ${(props) => props.theme.color.white2};
  color: var(--Font-text-default, rgba(0, 0, 0, 0.65));
  font-family: 'Pretendard600';
  font-size: calc((${(props) => props.theme.font.small} + ${(props) => props.theme.font.medium}) / 2);
  font-style: normal;
  font-weight: 600;
  line-height: 30px;

  &:hover,
  &:active {
    background: linear-gradient(93deg, #6262b2 0%, #f7a477 100%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    box-shadow: 0px -5px linear-gradient(93deg, #6262b2 0%, #f7a477 100%); inset;
  }

  ${media.custom(900)} {
    width: calc((100% / 3))    
  }
`;

export default GnbMenu;
