import styled from 'styled-components';
import { Kakao, Naver, Google } from '@/Assets';

export type SocialLoginType = '네이버' | '카카오' | '구글';
export interface LoginButtonType {
  type: SocialLoginType;
  onClick?: () => void;
}

const LoginButton = ({ type, onClick }: LoginButtonType) => {
  return (
    <LoginButtonWrapper type={type} onClick={onClick}>
      {type === '네이버' ? <Naver /> : type === '카카오' ? <Kakao /> : <Google />}
      <img src="" alt="" />
      <span>{type} 로그인</span>
    </LoginButtonWrapper>
  );
};

const LoginButtonWrapper = styled.button<{ type: LoginButtonType }>`
  display: flex;
  align-items: center;
  width: 600px;
  padding: 2px 24px 2px 16px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  border-radius: 8px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.05);
  background-color: ${(props) =>
    props.type === '네이버'
      ? props.theme.color.naver
      : props.type === '카카오'
      ? props.theme.color.kakao
      : props.theme.color.white};

  span {
    color: ${(props) =>
      props.type === '네이버'
        ? props.theme.color.white
        : props.type === '카카오'
        ? props.theme.color.kakaoFontColor
        : props.theme.color.black};
    text-align: center;
    font-family: Pretendard;
    font-size: ${(props) => props.theme.font.medium};
    font-style: normal;
    font-weight: 600;
    line-height: 52px;
  }
`;

export default LoginButton;
