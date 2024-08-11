import styled from 'styled-components';
import { media } from '@/Styles/theme';
import { SetStateAction } from 'react';

export type MypageGnbMenu = '회원 정보' | '스따-디';
export const mypageGnbMenus: MypageGnbMenu[] = ['회원 정보', '스따-디'];

export interface MypageGnbprops {
  handleMypageGnbMenu: React.Dispatch<SetStateAction<MypageGnbMenu>>;
}

export const MypageGnb = ({ handleMypageGnbMenu }: MypageGnbprops) => {
  return (
    <MypageGnbBox>
      <GnbMenuList>
        {mypageGnbMenus.map((gnbMenu: MypageGnbMenu) => (
          <GnbMenu key={gnbMenu} onClick={() => handleMypageGnbMenu(gnbMenu)}>
            {gnbMenu}
          </GnbMenu>
        ))}
      </GnbMenuList>
    </MypageGnbBox>
  );
};

const MypageGnbBox = styled.div`
  display: none;
  align-items: center;
  width: 100%;
  background: ${(props) => props.theme.color.white2};
  gap: 12px;
  border-top: 1px solid #e5e6e8;
  border-bottom: 1px solid #e5e6e8;

  ${media.custom(800)} {
    display: flex;
  }
`;

const GnbMenu = styled.button`
  display: flex;
  height: 48px;
  width: 288px;
  padding: 16px 12px;
  justify-content: center;
  text-align: center;
  align-items: center;
  flex-shrink: 0;
  background-color: ${(props) => props.theme.color.white2};
  color: ${({ theme }) => theme.color.black3};
  font-family: 'Pretendard600';
  font-size: 16px;
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

const GnbMenuList = styled.div`
  display: flex;
  width: 100%;
`;
