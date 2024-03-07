import { Profile, More } from '@/Assets';
import { Member } from '@/Types/study';
import styled from 'styled-components';
import Button from '../Common/Button';
import Dropdown from '../Common/Dropdown';
import { useState } from 'react';
import { useModalStore } from '@/Store/modal';
import EditProfileModal from '../Modal/EditProfileModal';

type UserCardProps = Pick<Member, 'nickname' | 'email'>;

const UserCard = ({ nickname, email }: UserCardProps) => {
  const [isOpened, setIsOpened] = useState<boolean>(false);
  const { isModalOpen, openModal } = useModalStore();
  return (
    <UserCardWrapper>
      <Profile width={180} height={180} />
      <UserProfileWrapper>
        <span className="nickname">{nickname}</span>
        <span className="email">{email}</span>
      </UserProfileWrapper>
      <UserProfileEditSectionWrapper>
        <Button onClick={() => setIsOpened((prev) => !prev)}>
          <More width={32} height={32} />
        </Button>
        {isOpened && (
          <DropdownListWrapper>
            <Dropdown
              onClick={() => {
                setIsOpened(false);
                openModal();
              }}
            >
              닉네임 변경하기
            </Dropdown>
            <Dropdown
              onClick={() => {
                setIsOpened(false);
              }}
            >
              프로필 사진 변경하기
            </Dropdown>
          </DropdownListWrapper>
        )}
        {isModalOpen && <EditProfileModal />}
      </UserProfileEditSectionWrapper>
    </UserCardWrapper>
  );
};

const UserCardWrapper = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  padding: 28px 0px;
  align-items: flex-start;
  gap: 24px;
`;

const UserProfileWrapper = styled.div`
  display: flex;
  padding: 20px 20px 18px 32px;
  flex-direction: column;
  align-items: flex-start;
  gap: 4px;

  .nickname {
    font-size: ${({ theme }) => theme.font.xxlarge};
    color: ${({ theme }) => theme.color.black5};
    font-weight: 700;
  }
  .email {
    font-size: ${({ theme }) => theme.font.medium};
    color: rgba(0, 0, 0, 0.4);
    font-weight: 400;
  }
`;
const UserProfileEditSectionWrapper = styled.div`
  position: absolute;
  top: 28px;
  right: 0px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 10px;

  button {
    padding: 0;
    border: none;
    &:hover {
      border: none;
    }
  }
`;

const DropdownListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 8px 0;
  border: 1px solid ${({ theme }) => theme.color.gray1};
  border-radius: ${({ theme }) => theme.borderRadius.small};
`;

export default UserCard;
