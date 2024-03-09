import MemberProfile from '@/Components/MemberProfile';
import { MemberImage } from '@/Assets';
import styled from 'styled-components';
import { InfoField } from '@/Components/Common/InfoField';
import { Member } from '@/Types/study';

export interface MemberSectionProps {
  memberLimit: number;
  members: Member[];
}

const MemberSection = ({ memberLimit, members }: MemberSectionProps) => {
  return (
    <MemberSectionWrapper>
      <div className="title">
        <MemberImage width={40} height={40} />
        <span>구성원</span>
      </div>
      <div className="member__info">
        <div className="member__cnt">
          <InfoField title="현재 인원수" content={members?.length || '??명'} />
          <InfoField title="목표 인원수" content={memberLimit || '??명'} />
        </div>

        <div className="member__profiles">
          <ul>
            {members?.map((member) => (
              <li>
                <MemberProfile {...member} />
              </li>
            ))}
          </ul>
        </div>
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

  .member__profiles > ul {
    display: flex;
    align-items: flex-start;
    flex-wrap: wrap;
    gap: 24px;
  }
`;

export default MemberSection;
