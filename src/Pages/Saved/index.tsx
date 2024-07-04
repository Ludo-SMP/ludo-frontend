import { Children, PropsWithChildren, ReactNode, useCallback, useEffect, useState } from 'react';
import ChipMenu from '@/Components/Common/ChipMenu';
import TemporarySavedCard from '@/Components/TemporarySavedCard';
import Modal from '@/Components/Common/Modal';
import { RecruitmentForm } from '@/Types/study';
import { useModalStore } from '@/store/modal';
import { useSavedKeyStore, useSelectedCardStore } from '@/store/study';
import { SignUpFail, Study } from '@/Assets';
import styled from 'styled-components';
import { DELETE } from '@/Constants/messages';
import { getMillisec } from '@/utils/date';

const Saved = () => {
  const { selectedCard, setSelectedCard } = useSelectedCardStore();
  const [savedList, setSavedList] = useState<Array<Partial<RecruitmentForm> & { savedKey: string }>>([]);
  const { isModalOpen, closeModal } = useModalStore();

  const storedSavedKey = useSavedKeyStore((state) => state.savedKey);

  const onRemove = useCallback(
    (savedKey: string) => {
      setSavedList((prev) => prev.filter((item) => item.savedKey !== savedKey));
    },
    [storedSavedKey],
  );

  useEffect(() => {
    getTempList(selectedCard);
  }, [selectedCard]);

  const getTempList = (selectedCard: 'STUDY' | 'RECRUITMENT') => {
    const storageList: Array<Partial<RecruitmentForm> & { savedKey: string }> = [];
    for (const key in window.localStorage) {
      if (Object.prototype.hasOwnProperty.call(window.localStorage, key) && key.toUpperCase().includes(selectedCard)) {
        storageList.push({ ...JSON.parse(localStorage.getItem(key)), savedKey: key });
      }
    }

    storageList.sort((a, b) => getMillisec(b.savedKey) - getMillisec(a.savedKey));
    setSavedList(storageList);
  };

  return (
    <>
      {isModalOpen && (
        <Modal
          handleApprove={() => {
            localStorage.removeItem(storedSavedKey);
            onRemove(storedSavedKey);
            closeModal();
          }}
          cancelBtnText="취소하기"
          title={DELETE.TEMP_SAVED.title}
          approveBtnText="삭제하기"
        >
          {DELETE.TEMP_SAVED.content}
        </Modal>
      )}

      <SavedLayout>
        <div className="title">
          <Study width="40" height="40" />
          <h5>임시 저장된 글</h5>
        </div>
        <ChipMenuBox>
          <ChipMenu checked={selectedCard === 'STUDY'} onClick={() => setSelectedCard('STUDY')}>
            스터디 생성
          </ChipMenu>
          <ChipMenu checked={selectedCard === 'RECRUITMENT'} onClick={() => setSelectedCard('RECRUITMENT')}>
            스터디 모집공고
          </ChipMenu>
        </ChipMenuBox>
        <CardList
          placeholder={
            <PlaceHolder>
              <PlaceHolderTitle>아직 작성 중인 게시글이 없습니다.</PlaceHolderTitle>
              <img src={SignUpFail} width={392} height={240} alt="no saved items" />
            </PlaceHolder>
          }
        >
          {savedList?.map((form: Partial<RecruitmentForm> & { savedKey: string }) => (
            <TemporarySavedCard key={form.savedKey} onRemove={onRemove} {...form} />
          ))}
        </CardList>
      </SavedLayout>
    </>
  );
};

export { Saved };

const SavedLayout = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 368px;
  gap: 16px;
  width: 100%;
  max-width: 912px;

  .title {
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 18px;
    font-family: 'Pretendard600';
    line-height: 32px;
  }
`;

const ChipMenuBox = styled.div`
  display: flex;
  gap: 12px;
  overflow-x: hidden;
`;

const CardList = ({
  placeholder,
  children,
}: PropsWithChildren<{
  placeholder?: ReactNode;
}>) => (Children.toArray(children).length !== 0 ? <CardListInner>{children}</CardListInner> : placeholder);

const CardListInner = styled.ul`
  display: flex;
  width: 100%;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  align-content: center;
  gap: 12px;
`;

const PlaceHolder = styled.div`
  padding: 72px 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  border-radius: ${({ theme }) => theme.borderRadius.cornerRadius12};
  border: 1px solid ${({ theme }) => theme.color.black1};
  background: ${({ theme }) => theme.color.white};
`;

const PlaceHolderTitle = styled.span`
  color: ${({ theme }) => theme.color.black4};
  ${({ theme }) => theme.typo.ListLabel};
`;
