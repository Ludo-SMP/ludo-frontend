import styled from 'styled-components';
import { Two } from '@/Assets';
import { InfoField } from '@/Components/Common/InfoField';

export interface StudyProgressInfoSectionProps {
  method: string;
  platform: string;
  period: string;
}

const StudyProgressInfoSection = ({ method, platform, period }: StudyProgressInfoSectionProps) => {
  return (
    <StudyProgressInfoSectionWrapper>
      <div className="title">
        <Two />
        <span>스터디 진행 안내</span>
      </div>
      <div className="progress__info">
        <InfoField title="진행 방식" content={method || '진행 방식'} flexDirection="column" />
        <InfoField title="진행 플랫폼" content={platform || '진행 플랫폼'} flexDirection="column" />
        <InfoField title="진행 기간" content={period || '진행 기간'} flexDirection="column" />
      </div>
    </StudyProgressInfoSectionWrapper>
  );
};

const StudyProgressInfoSectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 24px;
  align-self: stretch;

  .title {
    display: flex;
    align-items: center;
    gap: 12px;
    align-self: stretch;
    color: ${(props) => props.theme.color.black4};
    font-size: ${(props) => props.theme.font.xxlarge};
    font-weight: 800;
    line-height: 48px;
  }

  .progress__info {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    align-items: flex-start;
    align-content: flex-start;
    grid-gap: 24px;
    align-self: stretch;
    flex-wrap: wrap;
  }
`;
export default StudyProgressInfoSection;
