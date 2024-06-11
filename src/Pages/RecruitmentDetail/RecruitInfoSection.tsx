import { InfoField } from '@/Components/Common/InfoField';
import { Position, Stack } from '@/Types/study';
import styled from 'styled-components';
import { MemberImage } from '@/Assets';

export interface RecruitInfoSectionProps {
  applicantCnt?: number;
  endDate?: string;
  positions?: Position[];
  stacks?: Stack[];
  contact?: string;
  platformUrl?: string;
}

const RecruitInfoSection = ({
  applicantCnt,
  endDate,
  positions,
  stacks,
  contact,
  platformUrl,
}: RecruitInfoSectionProps) => {
  return (
    <StudyInfoBox>
      <StudyTitleBox>
        <MemberImage />
        <SubTitle>스터디원 모집 안내</SubTitle>
      </StudyTitleBox>
      <GridLayout>
        <InfoField title="모집 인원" content={applicantCnt || '모집 인원'} fontSize={18} flexDirection="column" />
        <InfoField title="모집 마감일" content={endDate || '모집 마감일'} fontSize={18} flexDirection="column" />
        <InfoField
          title="포지션"
          content={positions?.map((position: Position) => position.name).join(', ') || '포지션'}
          fontSize={18}
          flexDirection="column"
        />
        <InfoField
          title="기술 스택"
          content={stacks?.map((stack: Stack) => stack.name).join(', ') || '기술 스택'}
          fontSize={18}
          flexDirection="column"
        />
        <InfoField title="연락 방법" content={contact || '연락 방법'} fontSize={18} flexDirection="column" />
        <InfoField title="연결 url" content={platformUrl || '연결 url'} fontSize={18} flexDirection="column" />
      </GridLayout>
    </StudyInfoBox>
  );
};

export const GridLayout = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 24px;
  margin-top: 24px;
`;

export const StudyInfoBox = styled.div`
  display: flex;
  flex-direction: column;
`;
export const StudyTitleBox = styled.div`
  display: flex;
  gap: 8px;
`;

export const SubTitle = styled.div`
  ${({ theme }) => theme.typo.PageTitle};
`;

export { RecruitInfoSection };
