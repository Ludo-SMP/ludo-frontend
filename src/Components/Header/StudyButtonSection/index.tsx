import styled from 'styled-components';
import { media } from '@/Styles/theme';
import Button from '@/Components/Common/Button';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '@/Constants/route';
import { useSelectedMyStudyStore } from '@/store/study';

/** 참여중인, 지원한, 완료된 스터디 버튼 */
const StudyButtonSection = () => {
  const navigate = useNavigate();
  const { setSelectedMyStudyStatus } = useSelectedMyStudyStore();
  return (
    <StudyButtonSectionWrapper>
      <Button
        type="button"
        onClick={() => {
          setSelectedMyStudyStatus('PARTICIPATED');
          navigate(ROUTES.MYPAGE);
        }}
      >
        참여중인 스터디
      </Button>
      <Button
        type="button"
        onClick={() => {
          setSelectedMyStudyStatus('APPLIED');
          navigate(ROUTES.MYPAGE);
        }}
      >
        내가 지원한 스터디
      </Button>
      <Button
        type="button"
        onClick={() => {
          setSelectedMyStudyStatus('COMPLETED');
          navigate(ROUTES.MYPAGE);
        }}
      >
        진행 완료된 스터디
      </Button>
    </StudyButtonSectionWrapper>
  );
};

const StudyButtonSectionWrapper = styled.div`
  display: flex;
  gap: 24px;

  button {
    padding: 0 16px;
    color: ${(props) => props.theme.color.black3};
    border-radius: ${(props) => props.theme.borderRadius.large};
    border: 1px solid ${(props) => props.theme.color.purple2};

    &:hover {
      color: ${(props) => props.theme.color.white};
      border: 1px solid ${(props) => props.theme.color.purple5};
      background: ${(props) => props.theme.color.purple6};
    }

    &:active {
      color: ${(props) => props.theme.color.purple1};
      border: 1px solid ${(props) => props.theme.color.purple5};
      background: ${(props) => props.theme.color.white};
    }
  }

  ${media.custom(920)} {
    display: none;
  }
`;

export default StudyButtonSection;
