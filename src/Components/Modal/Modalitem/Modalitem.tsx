import styled from 'styled-components';
import { StackItem } from '@/Types/studies';
import axios from 'axios';
import { useStack } from '@/Apis/stack';

type Props = { item: StackItem[] };

export const ModalItem = ({ item }: Props) => {
  const { data } = useStack();
  console.log({ data });

  <div>
    {data?.data.map((data: any) => (
      <div>
        <li>{data.stacks}</li>
      </div>
    ))}
  </div>;

  // return (
  //   <ItemContainer>
  //     <ImageUrl />
  //     <StackName>dsdas</StackName>
  //   </ItemContainer>
  // );
};

const ItemContainer = styled.div`
  width: 172px;
  height: 48px;
`;

const ImageUrl = styled.span`
  border-radius: var(--Corner-radius-circle, 999px);
  width: 32px;
  height: 32px;
  margin-right: 10px;
  background-color: red;
`;

const StackName = styled.p`
  width: 108px;
  font-size: 14px;
`;
