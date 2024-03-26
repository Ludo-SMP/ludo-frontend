import { Profile, More } from '@/Assets';
import { Member } from '@/Types/study';
import styled from 'styled-components';
import Button from '../Common/Button';
import DropdownItem from '../Common/DropdownItem';
import { useState } from 'react';
import { useModalStore } from '@/store/modal';
import EditProfileModal from '../Modal/EditProfileModal';
import Modal from '../Common/Modal';
import { PROFILE } from '@/Constants/messages';

type UserCardProps = Pick<Member, 'nickname' | 'email'>;

const UserCard = ({ nickname, email }: UserCardProps) => {
  const [isOpened, setIsOpened] = useState<boolean>(false);
  const [editState, setEditState] = useState<'NOT START' | 'EDIT' | 'END'>('NOT START');
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
            <DropdownItem
              onClick={() => {
                setIsOpened(false);
                setEditState('EDIT');
                openModal();
              }}
            >
              닉네임 변경하기
            </DropdownItem>
            <DropdownItem
              onClick={() => {
                setIsOpened(false);
              }}
            >
              프로필 사진 변경하기
            </DropdownItem>
          </DropdownListWrapper>
        )}
        {editState === 'EDIT' && isModalOpen && <EditProfileModal userNickname={nickname} handleEdit={setEditState} />}
        {editState === 'END' && isModalOpen && (
          <Modal
            approveBtnText="확인"
            handleApprove={() => setEditState('NOT START')}
            alignTitle="center"
            title={PROFILE.NICNAME_ERROR.DUPLICATED.title}
          >
            {PROFILE.NICNAME_ERROR.DUPLICATED.content}
          </Modal>
        )}
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
