import Button from '@/Components/Common/Button';
import { RowDivider } from '@/Components/Common/Divider/RowDivider';
import { PROGRESS_METHOD } from '@/Shared/study';
import { ProgressMethod } from '@/Types/study';
import { getDday, getPeriod } from '@/utils/date';
import { PropsWithChildren } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export interface SidebarProps {
  id: number;
  category: string;
  startDateTime: string;
  endDateTime: string;
  way: ProgressMethod;
}

export const Sidebar = ({ id, category, startDateTime, endDateTime, way }: SidebarProps) => (
  <SidebarBox>
    <SidebarMenu>
      <SidebarMenuItem title="카테고리">{category}</SidebarMenuItem>
      <RowDivider />
      <SidebarMenuItem title="진행 기간">{getPeriod(startDateTime, endDateTime)}</SidebarMenuItem>
      <SidebarMenuItem title="남은 진행 기간">D-{getDday(endDateTime)}</SidebarMenuItem>
      <SidebarMenuItem title="진행 방식">{PROGRESS_METHOD[way]}</SidebarMenuItem>
    </SidebarMenu>
    <Button scheme="secondary" size="fullWidth">
      <Link to={`/studies/${id}/edit`}>스터디 수정하기</Link>
    </Button>
  </SidebarBox>
);

const SidebarBox = styled.div`
  display: flex;
  width: 288px;
  max-width: 912px;
  padding: 16px;
  flex-direction: column;
  align-items: center;
  gap: 32px;
  border-radius: 16px;
  border: 1px solid #0000001a;
`;

const SidebarMenu = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-self: stretch;
`;

const SidebarMenuItem = ({ title, children }: PropsWithChildren<{ title: string }>) => (
  <SidebarMenuItemBox>
    <SidebarMenuItemTitle>{title}</SidebarMenuItemTitle>
    <SidebarMenuItemText>{children}</SidebarMenuItemText>
  </SidebarMenuItemBox>
);

const SidebarMenuItemBox = styled.div`
  display: flex;
  min-width: 268px;
  max-width: 600px;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  flex: 1 0 0;
`;

const SidebarMenuItemTitle = styled.span`
  color: ${({ theme }) => theme.color.black5};
  font-family: Pretendard500;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
`;

const SidebarMenuItemText = styled.span`
  color: ${({ theme }) => theme.color.black2};
  font-family: Pretendard500;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
`;
