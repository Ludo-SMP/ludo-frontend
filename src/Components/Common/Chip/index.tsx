import styled from 'styled-components';

export type ChipState = 'default' | 'InProgress' | 'Completed' | 'Apply';

export interface ChipProps {
  chipState: ChipState;
  children: React.ReactNode;
}

const Chip = ({ chipState = 'default', children }: ChipProps) => {
  return <ChipWrapper {...{ chipState }}>{children}</ChipWrapper>;
};

const ChipWrapper = styled.span<{ chipState: ChipState }>`
  display: flex;
  padding: 4px 12px;
  justify-content: center;
  align-items: center;

  color: ${({ chipState, theme }) =>
    chipState === 'InProgress'
      ? theme.color.purple1
      : chipState === 'Completed'
      ? `rgba(0, 0, 0, 0.25)`
      : theme.color.orange3};

  background: #f2f2f2;
  border-radius: ${({ theme }) => theme.borderRadius.large};
  text-align: center;
  font-size: ${({ theme }) => theme.font.small};
  font-family: Pretendard;
  font-style: normal;
  font-weight: 500;
  line-height: 30px;
`;

export default Chip;
