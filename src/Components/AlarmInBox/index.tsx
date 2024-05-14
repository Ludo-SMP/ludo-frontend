import styled from 'styled-components';
import { AlarmPreview, AlarmPreviewProps } from './AlarmPreview';
import { useState } from 'react';

interface AlarmInboxProps {
  alarmPreviews?: AlarmPreviewProps[];
}

const dropdownContent = '알림 (원래 해당 버튼은 ‘종 버튼’ 아래에 드랍다운으로 보여집니다)';

export const AlarmInbox = ({ alarmPreviews }: AlarmInboxProps) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <AlarmInboxWrapper>
      {/* 해당 Topbar 컴포넌트는 추후에, 종 버튼 아래의 숫자 또는 버튼으로 교체 또는 분리 예정 */}
      <Topbar onClick={() => setIsOpen(!isOpen)}>{dropdownContent}</Topbar>
      <RowDivider />
      <Title>루도가 알려요</Title>
      <AlarmPreviewsWrapper>
        {alarmPreviews?.map((alarmPreview: AlarmPreviewProps) => (
          <AlarmPreview {...alarmPreview} key={alarmPreview.createdAt} />
        ))}
      </AlarmPreviewsWrapper>
    </AlarmInboxWrapper>
  );
};

const AlarmInboxWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 600px;
  border: 1px solid ${({ theme }) => theme.color.black1};
  border-radius: ${({ theme }) => theme.borderRadius.small};
`;

const Topbar = styled.div`
  display: flex;
  height: 40px;
  min-width: 348px;
  max-width: 600px;
  padding: 4px 24px;
  align-items: flex-start;
  gap: 10px;
  align-self: stretch;
  background: ${({ theme }) => theme.color.white};
  border-top-left-radius: ${({ theme }) => theme.borderRadius.small};
  border-top-right-radius: ${({ theme }) => theme.borderRadius.small};
  color: ${({ theme }) => theme.color.black5};
  font-family: 'Pretendard600';
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: 32px;
`;

const RowDivider = styled.div`
  height: 0px;
  align-self: stretch;
  border: 0.5px solid #e5e6e8;
`;

const Title = styled.div`
  display: flex;
  height: 40px;
  min-width: 348px;
  max-width: 600px;
  padding: 4px 24px;
  align-items: flex-start;
  gap: 10px;
  align-self: stretch;
  background: ${({ theme }) => theme.color.white};
  color: ${({ theme }) => theme.color.black5};
  font-family: 'Pretendard600';
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: 32px;
`;

const AlarmPreviewsWrapper = styled.div`
  display: flex;
  flex-direction: column;

  & > div {
    border: 1px solid ${({ theme }) => theme.color.negative};
  }

  & > div:last-child {
    border-bottom-left-radius: ${({ theme }) => theme.borderRadius.small};
    border-bottom-right-radius: ${({ theme }) => theme.borderRadius.small};
  }
`;
