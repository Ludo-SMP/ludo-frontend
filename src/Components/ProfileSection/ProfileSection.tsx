import { Profile } from '@/Assets';
import styled from 'styled-components';

/** 프로필 섹션 컴포넌트 */
export const ProfileSection = () => {
  return (
    <Box>
      <Profile width={160} height={160} />
      <NameBox>
        <Nickname>닉네임</Nickname>
        <Email>이메일</Email>
      </NameBox>
    </Box>
  );
};

const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
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
  font-family: Pretendard;
  font-weight: 600;
  line-height: 32px;
  word-wrap: break-word;
`;

const Email = styled.span`
  color: ${({ theme }) => theme.color.black2};
  font-size: 16px;
  font-family: Pretendard;
  font-weight: 400;
  line-height: 24px;
  word-wrap: break-word;
`;
