import { Profile, Setting } from '@/Assets';
import { Member } from '@/Types/study';
import styled from 'styled-components';
import Button from '../Common/Button';
import DropdownItem from '../Common/DropdownItem';
import { useState } from 'react';
import { useModalStore } from '@/store/modal';
import { EditProfileModal } from '../Modal/EditProfileModal';
import Modal from '../Common/Modal';
import { PROFILE } from '@/Constants/messages';

type UserCardProps = Pick<Member, 'nickname' | 'email'>;

/** 유저 카드 */
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
          <Setting width={32} height={32} />
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
            <DropdownItem
              onClick={() => {
                setIsOpened(false);
              }}
            >
              설정
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
  align-items: flex-start;
  width: 100%;
  gap: 24px;
`;

const UserProfileWrapper = styled.div`
  display: flex;
  padding: 16px 32px;
  flex-direction: column;
  align-items: flex-start;
  gap: 12px;
  flex: 1 0 0;
  align-self: stretch;

  .nickname {
    color: ${({ theme }) => theme.color.black5};
    font-family: 'Pretendard800';
    font-size: ${({ theme }) => theme.font.large};
    font-style: normal;
    font-weight: 800;
    line-height: 32px;
  }
  .email {
    color: rgba(0, 0, 0, 0.4);
    font-family: 'Pretendard500';
    font-size: ${({ theme }) => theme.font.small};
    font-style: normal;
    font-weight: 500;
    line-height: 32px;
  }
`;
const UserProfileEditSectionWrapper = styled.div`
  position: absolute;
  top: 0px;
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

      svg {
        path {
          fill-opacity: 0.85;
        }
      }
    }
  }
`;

const DropdownListWrapper = styled.div`
  display: inline-flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 8px 0;
  border-radius: ${({ theme }) => theme.borderRadius.small};
  border: 1px solid ${({ theme }) => theme.color.black1};
  box-shadow: 0px 4px 10px 0px ${({ theme }) => theme.color.black1};
`;

export default UserCard;
