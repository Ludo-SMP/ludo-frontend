import styled from 'styled-components';
import { Three } from '@/Assets';
import { InfoField } from '@/Components/Common/InfoField';
import { Category } from '@/Types/study';

export interface StudyBasicInfoSectionProps {
  studyTitle?: string;
  category?: Category;
  participantLimit?: number;
}

const StudyBasicInfoSection = ({ studyTitle, category, participantLimit }: StudyBasicInfoSectionProps) => {
  return (
    <StudyBasicInfoSectionWrapper>
      <div className="title">
        <Three />
        <span>스터디 기본 구성 안내</span>
      </div>
      <div className="basic__info">
        <InfoField title="스터디 제목" content={studyTitle || '스터디 제목'} flexDirection="column" width="100%" />
        <InfoField title="카테고리" content={category.name || '카테고리'} flexDirection="column" width="600px" />
        <InfoField
          title="스터디 최대 인원"
          content={participantLimit || '스터디 최대 인원'}
          flexDirection="column"
          width="600px"
        />
      </div>
    </StudyBasicInfoSectionWrapper>
  );
};

const StudyBasicInfoSectionWrapper = styled.div`
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

  .basic__info {
    display: flex;
    flex-wrap: wrap;
    gap: 24px;
  }
`;
export default StudyBasicInfoSection;
