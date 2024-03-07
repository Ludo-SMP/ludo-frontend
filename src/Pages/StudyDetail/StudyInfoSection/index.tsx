import styled from 'styled-components';
import { InfoField } from '@/Components/Common/InfoField';
import { RowDivider } from '@/Components/Common/Divider/RowDivider';
import { ProgressMethod, StudyCategory } from '@/Types/study';

export interface StudyInfoSectionProps {
  category?: StudyCategory | string;
  progressMethod?: ProgressMethod;
  platform?: string;
  period?: string;
  dDay?: number;
}

const StudyInfoSection = ({ category, progressMethod, platform, period, dDay }: StudyInfoSectionProps) => {
  return (
    <StudyInfoSectionWrapper>
      <div className="study__category">
        <InfoField title="카테고리" content={category || '카테고리'} />
      </div>
      <RowDivider />
      <div className="study__info">
        <InfoField title="진행방식" content={progressMethod || '진행 방식'} />
        <InfoField title="진행플랫폼" content={platform || '진행 플랫폼'} />
        <InfoField title="진행기간" content={period || '진행 기간'} />
        <InfoField title="남은 진행기간" content={`D-${dDay}` || '남은 진행기간'} />
      </div>
    </StudyInfoSectionWrapper>
  );
};

const StudyInfoSectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 32px;
  align-self: stretch;

  .study__info {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    align-items: flex-start;
    grid-gap: 24px;
    align-self: stretch;
    flex-wrap: wrap;
  }
`;

export default StudyInfoSection;
