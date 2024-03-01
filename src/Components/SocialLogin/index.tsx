import styled from 'styled-components';
import { Kakao, Naver, Google } from '@/Assets';
import { media } from '@/Styles/theme';
import { useLoginStore } from '@/Store/auth';

export type SocialType = '네이버' | '카카오' | '구글';
export type SignType = '로그인' | '회원가입';
export interface SocialLoginType extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  socialType: SocialType;
  signType: SignType;
}

const SocialLogin = ({ socialType, signType }: SocialLoginType) => {
  const { isLoggedIn, setIsLoggedIn } = useLoginStore();
  return (
    <SocialLoginWrapper
      {...{ socialType, signType }}
      href={`${import.meta.env.VITE_BASE_URL}/auth/${signType === '로그인' ? 'login' : 'signup'}/${
        socialType === '네이버' ? 'naver' : socialType === '카카오' ? 'kakao' : 'google'
      }`}
      onClick={() => {
        !isLoggedIn && setIsLoggedIn();
      }}
    >
      {socialType === '네이버' ? <Naver /> : socialType === '카카오' ? <Kakao /> : <Google />}
      <span>
        {socialType} {signType}
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
    props.socialType === '네이버'
      ? props.theme.color.naver
      : props.socialType === '카카오'
      ? props.theme.color.kakao
      : props.theme.color.white};

  span {
    color: ${(props) =>
      props.socialType === '네이버'
        ? props.theme.color.white
        : props.socialType === '카카오'
        ? props.theme.color.kakaoFontColor
        : props.theme.color.black};
    text-align: center;
    font-family: Pretendard;
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
