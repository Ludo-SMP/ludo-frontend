import styled from 'styled-components';
import { InfoField } from '@/Components/Common/InfoField';
import { One } from '@/Assets';
import { Position, Stack } from '@/Types/study';

interface RecruitmentInfoSectionProips {
  applicantCnt?: number;
  endDate?: string;
  positions?: Position[];
  stacks?: Stack[];
  contact?: string;
  platformUrl?: string;
}

const RecruitmentInfoSection = ({
  applicantCnt,
  endDate,
  positions,
  stacks,
  contact,
  platformUrl,
}: RecruitmentInfoSectionProips) => {
  return (
    <RecruitmentInfoSectionwrapper>
      <div className="title">
        <One />
        <span>스터디 모집 안내</span>
      </div>
      <div className="recruitment__info">
        <InfoField title="모집 인원" content={applicantCnt || '모집 인원'} flexDirection="column" />
        <InfoField title="모집 마감일" content={endDate || '모집 마감일'} flexDirection="column" />
        <InfoField
          title="포지션"
          content={positions.map((position: Position) => position.name).join(', ') || '포지션'}
          flexDirection="column"
        />
        <InfoField
          title="기술 스택"
          content={stacks.map((stack: Stack) => stack.name).join(', ') || '기술 스택'}
          flexDirection="column"
        />
        <InfoField title="연락 방법" content={contact || '연락 방법'} flexDirection="column" />
        <InfoField title="연결 url" content={platformUrl || '연결 url'} flexDirection="column" />
      </div>
    </RecruitmentInfoSectionwrapper>
  );
};

const RecruitmentInfoSectionwrapper = styled.div`
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

  .recruitment__info {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    align-items: flex-start;
    align-content: flex-start;
    grid-gap: 24px;
    align-self: stretch;
    flex-wrap: wrap;
  }
`;

export default RecruitmentInfoSection;
