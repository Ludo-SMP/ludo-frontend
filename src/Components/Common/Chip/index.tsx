import { useSelectedPositionStore } from '@/Store/position';
import { Position } from '@/Types/study';
import { POSITION } from '@/Store/position';
import styled from 'styled-components';

type ChipType = 'Primary' | 'Secondary';

export interface ChipProps {
  chipType: ChipType;
  children?: React.ReactNode;
  value: '백엔드' | '프론트엔드' | '디자이너' | '데브옵스';
}

const Chip = ({ chipType, children, value }: ChipProps<Position>) => {
  const { selectedPosition, setSelectedPosition, resetSelectedPosition } = useSelectedPositionStore();

  const isSelected: boolean = selectedPosition === POSITION[value];

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
