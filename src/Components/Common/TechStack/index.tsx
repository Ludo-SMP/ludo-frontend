import styled from 'styled-components';

export interface TechStackProps {
  name: string;
  imgUrl?: string;
  id: number;
  selected?: boolean;
}

export const TechStack = ({ name, imgUrl, id, selected = false }: TechStackProps) => {
  return (
    <TechStackWrapper selected={selected} imgUrl={imgUrl} onClick={() => !selected}>
      {imgUrl ? <img className="stack__iamge" src={imgUrl} /> : <div className="blank__image" />}
      <p className="stack__name">{name}</p>
    </TechStackWrapper>
  );
};

const TechStackWrapper = styled.div<{ selected: boolean; imgUrl?: string }>`
  display: inline-flex;
  padding: 8px 12px 8px 8px;
  justify-content: center;
  align-items: center;
  gap: 12px;
  border-radius: ${({ theme }) => theme.borderRadius.small};
  background: ${({ theme, selected }) => (selected ? theme.color.purple2 : theme.color.white)};

  .stack__image {
    width: 32px;
    height: 32px;
    border-radius: ${({ theme }) => theme.borderRadius.xlarge};
  }

  .blank__image {
    width: 32px;
    height: 32px;
    border-radius: ${({ theme }) => theme.borderRadius.xlarge};
    background: ${({ theme }) => theme.color.gray5};
  }

  .stack__name {
    min-width: 108px;
    color: ${({ theme, selected }) => (selected ? theme.color.purple1 : theme.color.black3)};
    font-family: Pretendard600;
    font-size: ${({ theme }) => theme.font.xsmall};
    font-style: normal;
    font-weight: 600;
    line-height: 32px;
  }

  &:hover {
    background: ${({ theme }) => theme.color.purple5};
    cursor: pointer;

    .stack__name {
      color: ${({ theme }) => theme.color.white};
    }
  }
`;
