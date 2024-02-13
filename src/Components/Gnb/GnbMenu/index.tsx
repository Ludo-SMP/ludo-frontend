import styled from 'styled-components';

interface GnbMenuProps {
  name: string;
}

const GnbMenu = ({ name }: GnbMenuProps) => {
  return <GnbMenuWrapper>{name}</GnbMenuWrapper>;
};

const GnbMenuWrapper = styled.li`
  display: flex;
  height: 56px;
  width: 288px;
  padding: 4px 12px;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
`;

export default GnbMenu;
