import { InfoField } from '@/Components/Common/InfoField';
import { RowDivider } from '@/Components/Common/Divider/RowDivider';
import { GridLayout, StudyInfoBox, StudyTitleBox, SubTitle } from './RecruitInfoSection';
import { StudyInfo } from '@/Assets';
import { Accordion } from '@/Components/Accordion';
import styled from 'styled-components';

export interface StudyBasicInfoSectionProps {
  studyTitle?: string;
  participantLimit?: number;
  content?: string;
}

const StudyBasicInfoSection = ({ studyTitle, participantLimit, content }: StudyBasicInfoSectionProps) => {
  return (
    <StudyInfoBox>
      <StudyTitleBox>
        <StudyInfo />
        <SubTitle>스터디원 기본 구성</SubTitle>
      </StudyTitleBox>
      <GridLayout>
        <InfoField title="스터디 제목" content={studyTitle || '스터디 제목'} fontSize={18} flexDirection="column" />
        <InfoField
          title="스터디 최대 인원"
          content={participantLimit || '스터디 최대 인원'}
          fontSize={18}
          flexDirection="column"
        />
      </GridLayout>
      <RowDivider rowHeight={1} margin={24} />
      <Accordion title="상세 내용" description="상세 내용">
        <Content>{content}</Content>
      </Accordion>
    </StudyInfoBox>
  );
};

export { StudyBasicInfoSection };

const Content = styled.div`
  ${({ theme }) => theme.typo.ListChip};
  color: ${({ theme }) => theme.color.black2};
  padding: 10px;
  white-space: pre-wrap;
`;
