import MemberProfile, { MemberProfileProps } from '@/Components/MemberProfile';
import { Member } from '@/Assets';
import styled from 'styled-components';
import { InfoField } from '@/Components/Common/InfoField';
import MemberCarousel from './MemberCarousel';

export interface MemberSectionProps {
  goalMemberCnt: number;
  memberProfiles: MemberProfileProps[];
}

const MemberSection = ({ goalMemberCnt, memberProfiles }: MemberSectionProps) => {
  return (
    <MemberSectionWrapper>
      <div className="title">
        <Member width={40} height={40} />
        <span>구성원</span>
      </div>
      <div className="member__info">
        <div className="member__cnt">
          <InfoField title="현재 인원수" content={memberProfiles.length} />
          <InfoField title="목표 인원수" content={goalMemberCnt || '??명'} />
        </div>
        <MemberCarousel memberProfiles={[...memberProfiles]} />

        {/* <div className="member__profiles">
          <MemberProfile nickName="Hyun" email="ksci195@hanmail.net" teamPosition="팀원" skillPosition="FE" />
          <MemberProfile nickName="Hyun" email="ksci195@hanmail.net" teamPosition="팀장" skillPosition="BE" />
          <MemberProfile nickName="Hyun" email="ksci195@hanmail.net" teamPosition="팀원" skillPosition="디자이너" />
          <MemberProfile nickName="Hyun" email="ksci195@hanmail.net" teamPosition="팀원" skillPosition="디자이너" />
          <MemberProfile nickName="Hyun" email="ksci195@hanmail.net" teamPosition="팀원" skillPosition="디자이너" />
          <MemberProfile nickName="Hyun" email="ksci195@hanmail.net" teamPosition="팀원" skillPosition="디자이너" />
        </div> */}
      </div>
    </MemberSectionWrapper>
  );
};

const MemberSectionWrapper = styled.div`
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

  .member__info {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    align-content: flex-start;
    gap: 24px;
    align-self: stretch;
    flex-wrap: wrap;
  }

  .member__cnt {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    align-items: flex-start;
    grid-gap: 24px;
    align-self: stretch;
    flex-wrap: wrap;
  }
`;

export default MemberSection;
