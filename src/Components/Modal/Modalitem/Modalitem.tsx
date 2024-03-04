import styled from 'styled-components';
import { StackItem } from '@/Types/studies';
import axios from 'axios';
import { useStack } from '@/Apis/stack';

type Props = { item: StackItem[] };

export const ModalItem = ({ item }: Props) => {
  // async function post() {
  //   const { data } = await axios.get('https://ludoapi.store/api/stacks');
  //   console.log(data);
  //   // console.log(data && data.data.stackCategory);  영역별 분리
  //   // console.log(data && data.data.stackCategory[0]); 프론트엔드 id=4
  //   // console.log(data && data.data.stackCategory[0].stacks); 안에 있는 항목들
  // }
  // post();
  const { data } = useStack();
  console.log({ data });

  <div>
    {/* {data?.map((data: any) => ( */}
    <div>
      {/* <li>{message?.pages}</li> */}
      <li>data</li>
    </div>
    {/* ))} */}
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
