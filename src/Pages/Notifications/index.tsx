import { Accordion } from '@/Components/Accordion';
import { AccordionList } from '@/Components/AccordionList';
import { Stack } from '@/Components/Common/Stack';
import { Divider } from '../CreateRecruitment/page';
import Button from '@/Components/Common/Button';
import { Link } from 'react-router-dom';
import { textEllipsis } from '@/Styles/theme';
import styled from 'styled-components';

type NotiType = 'accordion' | 'text' | 'button';

/** 루도가 알려요 목록에 들어가는 리스트 공통 타입 */
type NotiListType<T extends NotiType> = {
  type: T;
  title: string;
  description: string;
};

type AccordionNotiType = NotiListType<'accordion'> & {
  content: string;
};

const dummy: Array<AccordionNotiType | NotiListType<'text'> | NotiListType<'button'>> = [
  {
    type: 'accordion',
    title: '스터디 탈퇴 승인 결과가 나왔습니다.',
    description: '20분 전',
    content: '안녕하세요. 루도입니다. 스터디 탈퇴 승인 결과가 나왔습니다. 승인이 완료되었습니다. 감사합니다.',
  },
  {
    type: 'accordion',
    title: '스터디 탈퇴 승인 결과가 나왔습니다.',
    description: '20분 전',
    content: '안녕하세요. 루도입니다. 스터디 탈퇴 승인 결과가 나왔습니다. 승인이 완료되었습니다. 감사합니다.',
  },
  {
    type: 'text',
    title: '스터디 탈퇴 승인 결과가 나왔습니다.',
    description: '20분 전',
  },
  {
    type: 'button',
    title: '관심 항목으로 선택한 ‘디자이너 모집 공고가 나왔습니다.',
    description: '20분 전',
  },
  {
    type: 'button',
    title: '관심 항목으로 선택한 ‘디자이너 모집 공고가 나왔습니다.',
    description: '20분 전',
  },
  {
    type: 'button',
    title: '관심 항목으로 선택한 ‘디자이너 모집 공고가 나왔습니다.',
    description: '20분 전',
  },
  {
    type: 'button',
    title: '관심 항목으로 선택한 ‘디자이너 모집 공고가 나왔습니다.',
    description: '20분 전',
  },
];

//TODO: 명세와 타입 일치시키기
const Notifications = () => {
  return (
    <AccordionList title="제목">
      <Stack divider={<Divider height={3} />} gap={'0px'}>
        {dummy.map((props, idx) => {
          const { title } = props;
          const key = `${title}-${idx}`;
          switch (props.type) {
            case 'accordion':
              return (
                <Accordion key={key} {...props}>
                  {props.content}
                </Accordion>
              );
            case 'text':
              return <AlarmText key={key} {...props} />;
            case 'button':
              return <AlarmTextWithBtn key={key} {...props} />;
            default:
              return null;
          }
        })}
      </Stack>
    </AccordionList>
  );
};

export { Notifications };

interface AlarmTextProps {
  type: string;
  title: string;
  description?: string;
}

const AlarmTextWithBtn = ({ type, title, description }: AlarmTextProps) => {
  return (
    <List>
      <Box>
        <Item>
          <Title>{title}</Title>
          {description && <Description>{description}</Description>}
        </Item>
        <Button type="button" scheme="secondary">
          <Link to="">페이지로 이동</Link>
        </Button>
      </Box>
    </List>
  );
};

const AlarmText = ({ title, description }: AlarmTextProps) => {
  return (
    <List>
      <Box>
        <Item>
          <Title>{title}</Title>
          {description && <Description>{description}</Description>}
        </Item>
      </Box>
    </List>
  );
};

const Item = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  width: calc(100% - 24px);
`;

const List = styled.li`
  display: flex;
  flex-direction: column;
  max-width: 912px;
  padding: 16px 0px;
`;

const Box = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  cursor: pointer;
  min-width: 300px;
  background-color: ${({ theme }) => theme.color.white};
  min-height: 56px;
`;

const Title = styled.span`
  color: ${({ theme }) => theme.color.black5};

  /* TODO: 타이포 브랜치 머지 후, typo 적용 */
  /* Page/Sub Title-Medium */
  font-family: 'Pretendard500';
  font-size: 18px;
  font-weight: 500;
  line-height: 32px;

  ${textEllipsis}
`;

const Description = styled.p`
  color: ${({ theme }) => theme.color.black2};

  /* TODO: 타이포 브랜치 머지 후, typo 적용 */
  /* List,Alert/Lable-Medium */
  font-family: 'Pretendard400';
  font-size: 16px;
  line-height: 24px;

  ${textEllipsis}
`;
