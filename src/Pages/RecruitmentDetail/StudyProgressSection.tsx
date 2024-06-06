import { InfoField } from '@/Components/Common/InfoField';
import { RowDivider } from '@/Components/Common/Divider/RowDivider';
import styled from 'styled-components';
import { Category, ProgressMethod } from '@/Types/study';
import { PROGRESS_METHOD } from '@/Shared/study';

export interface StudyProgressSectionProps {
  method?: ProgressMethod;
  platform?: string;
  period?: string;
  category?: string;
  day?: string;
}

const StudyProgressSection = ({ method, platform, period, category, day }: StudyProgressSectionProps) => {
  return (
    <StudyProgressSectionBox>
      <InfoField title="카테고리" content={category || '카테고리'} fontSize={18} flexDirection="column" />
      <RowDivider rowHeight={1} />
      <InfoField
        title="진행 방식"
        content={PROGRESS_METHOD[method] || '진행 방식'}
        fontSize={18}
        flexDirection="column"
      />
      <InfoField title="진행 플랫폼" content={platform || '진행 플랫폼'} fontSize={18} flexDirection="column" />
      <InfoField title="진행 기간" content={period || '진행 기간'} fontSize={18} flexDirection="column" />
      <InfoField title="진행 요일" content={day || '진행 요일'} fontSize={18} flexDirection="column" />
    </StudyProgressSectionBox>
  );
};

const StudyProgressSectionBox = styled.section`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export { StudyProgressSection };
