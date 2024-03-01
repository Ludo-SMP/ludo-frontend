import { useSelectedPositionStore } from '@/Store/position';
import { PositionType } from '@/Types/study';
import styled from 'styled-components';

type ChipType = 'Primary' | 'Secondary';

export interface ChipProps<T> {
  chipType: ChipType;
  children?: React.ReactNode;
  value: T;
}

const Chip = ({ chipType, children, value }: ChipProps<PositionType>) => {
  const { selectedPosition, setSelectedPosition, resetSelectedPosition } = useSelectedPositionStore();

  const isSelected: boolean = selectedPosition === value;

  return (
    <ChipWrapper
      chipType={chipType}
      isSelected={isSelected}
      onClick={() => {
        if (!isSelected) setSelectedPosition(value);
        else resetSelectedPosition();
      }}
    >
      {children}
    </ChipWrapper>
  );
};

const ChipWrapper = styled.span<{ chipType: ChipType; isSelected: boolean }>`
  display: inline-flex;
  padding: 0px 16px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  color: ${({ isSelected, chipType, theme }) =>
    isSelected ? (chipType === 'Primary' ? theme.color.white : theme.color.orange3) : theme.color.black3};
  text-align: center;
  font-family: Pretendard;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: 48px;
  border-radius: ${({ theme }) => theme.borderRadius.xlarge};
  border: 1px solid ${({ isSelected, theme }) => (isSelected ? theme.color.orange4 : theme.color.black3)};
  background: ${({ isSelected, chipType, theme }) =>
    isSelected && chipType === 'Primary' ? theme.color.orange3 : theme.color.white};

  &:hover {
    cursor: pointer;
  }
`;

export default Chip;
