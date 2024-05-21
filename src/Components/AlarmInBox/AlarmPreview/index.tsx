import styled from 'styled-components';
import { Logo, DefaultStudyThumbnail } from '@/Assets';
import { getElapsedTime } from '@/utils/date';

type AlarmType = 'LUDO' | 'STUDY';

export interface AlarmPreviewProps {
  /** 알람 타입 */
  alarmType: AlarmType;

  /** 알람 제목*/
  title: string;

  /** 알람에 대한 간략한 설명 */
  description: string;

  /** 최초 알림이 생성된 후 경과한 시간 */
  createdAt: string;
}

export const AlarmPreview = ({ alarmType, description, title, createdAt }: AlarmPreviewProps) => {
  return (
    <AlarmPreviewWrapper>
      <ImageWrapper alarmType={alarmType}>
        <img src={alarmType == 'LUDO' ? Logo : DefaultStudyThumbnail} width={32} height={32} />
      </ImageWrapper>
      <SummaryWrapper>
        <Title>{title}</Title>
        <Description>{description}</Description>
        <ElapsedTime>{getElapsedTime(createdAt)}</ElapsedTime>
      </SummaryWrapper>
    </AlarmPreviewWrapper>
  );
};

const AlarmPreviewWrapper = styled.div`
  display: flex;
  width: 100%;
  min-width: 348px;
  max-width: 600px;
  padding: 16px 24px;
  align-items: flex-start;
  gap: 16px;
  background: ${({ theme }) => theme.color.white};

  &:hover {
    cursor: pointer;
  }
`;

const ImageWrapper = styled.div<{ alarmType: AlarmType }>`
  img {
    border: 1px solid ${({ theme, alarmType }) => (alarmType === 'LUDO' ? theme.color.black1 : theme.color.gray5)};
    border-radius: ${({ theme }) => theme.borderRadius.xlarge};
    object-fit: contain;
  }
`;

const SummaryWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  flex: 1 0 0;
`;

const Title = styled.p`
  color: ${({ theme }) => theme.color.black5};
  font-family: 'Pretendard600';
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: 32px;
  align-self: stretch;
`;

const Description = styled.p`
  color: ${({ theme }) => theme.color.black4};
  font-family: 'Pretendard400';
  font-size: ${({ theme }) => theme.font.medium};
  font-style: normal;
  font-weight: 400;
  line-height: 32px;
  align-self: stretch;
`;

const ElapsedTime = styled.p`
  color: ${({ theme }) => theme.color.black2};
  font-family: Pretendard;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: 16px;
  align-self: stretch;
`;
