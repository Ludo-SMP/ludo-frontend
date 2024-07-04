import { useState } from 'react';
import Button from '../Common/Button';
import DropdownItem from '../Common/DropdownItem';
import Modal from '../Common/Modal';
import { EditProfileModal } from '../Modal/EditProfileModal';
import { useModalStore } from '@/store/modal';
import { Setting } from '@/Assets';
import styled from 'styled-components';
import { PROFILE } from '@/Constants/messages';

interface SettingButtonProps {
  nickname: string;
}

/** 프로필 섹션에 종속된 설정 버튼 */
const SettingButton = ({ nickname }: SettingButtonProps) => {
  const [isOpened, setIsOpened] = useState<boolean>(false);
  const [editState, setEditState] = useState<'NOT START' | 'EDIT' | 'END'>('NOT START');
  const { isModalOpen, openModal } = useModalStore();

  return (
    <SettingButtonBox>
      <Button onClick={() => setIsOpened((prev) => !prev)}>
        <Setting width={32} height={32} />
      </Button>
      {isOpened && (
        <DropdownList>
          <DropdownItem
            onClick={() => {
              setIsOpened(false);
              setEditState('EDIT');
              openModal();
            }}
          >
            닉네임 변경하기
          </DropdownItem>
          {/* <DropdownItem
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
          </DropdownItem> */}
        </DropdownList>
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
    </SettingButtonBox>
  );
};

export { SettingButton };

const SettingButtonBox = styled.div`
  position: relative;
  display: flex;
  align-items: flex-start;

  & > button {
    padding: 0;
    border: none;
    &:hover {
      border: none;

      svg path {
        fill-opacity: 0.85;
      }
    }
  }
`;

const DropdownList = styled.div`
  display: inline-flex;
  flex-direction: column;
  position: absolute;
  top: calc(32px + 8px);
  left: 0;
  padding: 8px 0;
  border-radius: ${({ theme }) => theme.borderRadius.small};
  border: 1px solid ${({ theme }) => theme.color.black1};
  box-shadow: 0px 4px 10px 0px ${({ theme }) => theme.color.black1};
  background-color: white;
`;
