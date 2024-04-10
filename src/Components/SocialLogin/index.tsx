import styled from 'styled-components';
import { Kakao, Naver, Google } from '@/Assets';
import { media } from '@/Styles/theme';
import { useLoginStore } from '@/store/auth';
import { API_END_POINT } from '@/Constants/api';
import { SocialType, SignType } from '@/Types/auth';

export interface SocialLoginType extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  socialType: SocialType;
  signType: SignType;
}

const social = Object.freeze({
  naver: '네이버',
  kakao: '카카오',
  google: '구글',
});

const sign = Object.freeze({
  login: '로그인',
  signup: '회원가입',
});

const SocialLogin = ({ socialType, signType }: SocialLoginType) => {
  const { isLoggedIn, setIsLoggedIn } = useLoginStore();
  return (
    <SocialLoginWrapper
      {...{ socialType, signType }}
      href={
        signType === 'login'
          ? `${import.meta.env.VITE_BASE_API_URL}/${API_END_POINT.LOGIN(socialType)}`
          : `${import.meta.env.VITE_BASE_API_URL}/${API_END_POINT.SIGNUP(socialType)}`
      }
      onClick={() => {
        !isLoggedIn && setIsLoggedIn();
      }}
    >
      {socialType === 'naver' ? <Naver /> : socialType === 'kakao' ? <Kakao /> : <Google />}
      <span>
        {social[socialType]} {sign[signType]}
      </span>
    </SocialLoginWrapper>
  );
};

const SocialLoginWrapper = styled.a<{ socialType: SocialType; signType: SignType }>`
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
    props.socialType === 'naver'
      ? props.theme.color.naver
      : props.socialType === 'kakao'
      ? props.theme.color.kakao
      : props.theme.color.white};

  span {
    color: ${(props) =>
      props.socialType === 'naver'
        ? props.theme.color.white
        : props.socialType === 'kakao'
        ? props.theme.color.kakaoFontColor
        : props.theme.color.black};
    text-align: center;
    font-family: 'Pretendard600';
    font-size: ${(props) => props.theme.font.medium};
    font-style: normal;
    font-weight: 600;
    line-height: 52px;
  }

  ${media.custom(600)} {
    width: 400px;
  }
`;

export default SocialLogin;
