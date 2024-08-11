import { Profile } from '@/Assets/Profile';
import styled from 'styled-components';
import { SettingButton } from './SettingButton';
import { media } from '@/Styles/theme';

export interface ProfileSectionProps {
  /** 사용자 이름 */
  nickname: string;

  /** 사용자 이메일 주소 */
  email: string;
}

/** 프로필 섹션 컴포넌트 */
export const ProfileSection = ({ nickname, email }: ProfileSectionProps) => {
  return (
    <Box>
      <ProfileBox>
        <Profile width={160} height={160} email={email} />
        <NameBox>
          <Nickname>{nickname}</Nickname>
          <Email>{email}</Email>
        </NameBox>
      </ProfileBox>
      <SettingButton nickname="nickname" />
    </Box>
  );
};

const Box = styled.div`
  display: flex;
  align-items: flex-start;
`;

const ProfileBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;

  ${media.custom(1100)} {
    padding-left: 30px;
  }
`;

const NameBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
`;

const Nickname = styled.span`
  color: ${({ theme }) => theme.color.black5};
  font-size: 20px;
  font-family: 'Pretendard600';
  font-weight: 600;
  line-height: 32px;
  word-wrap: break-word;
`;

const Email = styled.span`
  color: ${({ theme }) => theme.color.black2};
  font-size: 16px;
  font-family: 'Pretendard400';
  font-weight: 400;
  line-height: 24px;
  word-wrap: break-word;
`;
