import { RecruitmentKeywordsForm } from '@/Types/notifications';
import styled from 'styled-components';

export interface KeyWordFormProps {
  /** 라벨 */
  label: string;

  /** 자식 노드 */
  children: React.ReactNode;

  /** keyword Type */
  type: keyof RecruitmentKeywordsForm;
}

export const KeywordForm = ({ label, children, type }: KeyWordFormProps) => {
  return (
    <KeywordFormBox>
      <Title>{label}</Title>
      <KeywordList>{children}</KeywordList>
    </KeywordFormBox>
  );
};

const KeywordFormBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 8px;
  align-self: stretch;
`;

const Title = styled.p`
  color: ${({ theme }) => theme.color.black};
  font-family: 'Pretendard400';
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 30px;
`;

const KeywordList = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;
