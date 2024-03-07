import styled from 'styled-components';
import { StackItem } from '@/Types/studies';
import axios from 'axios';
import { useStack } from '@/Apis/stack';
import { useRef, useState } from 'react';

const VITE_BASE_URL = 'https://ludoapi.store';
type Props = { item: StackItem[] };

export const ModalItem = ({ item }: Props) => {
  const { data } = useStack();
  // console.log({ data });
  const imgRef = useRef<HTMLImageElement>(null);
  const [isValid, setIsValid] = useState(true);
  return (
    // <ListContainer>
    //   {data?.data.map((item: any) => (
    //     <div key={item.id}>
    //       {item?.stacks.map((item: StackItem) => (
    //         <ItemContainer>
    //           <ImageUrl src={VITE_BASE_URL + item.imageUrl} ref={imgRef} />
    //           <StackName>{item.name}</StackName>
    //         </ItemContainer>
    //       ))}
    //     </div>
    //   ))}
    // </ListContainer>

    <ListContainer>
      {data?.stacks.map((item: any) => (
        <div key={item.id}>
          {/* 기술 스택 id */}
          {/* {item?.stacks.map((item: StackItem) => ( */}
          <ItemContainer>
            <ImageUrl src={VITE_BASE_URL + item.imageUrl} ref={imgRef} />
            <StackName>{item.name}</StackName>
          </ItemContainer>
          {/* ))} */}
        </div>
      ))}
    </ListContainer>
  );
};

const ListContainer = styled.section`
  max-width: 1096px;
  height: 588px;
  grid-template-columns: repeat(10, 48px);
  grid-template-rows: repeat(6, 210px);
  grid-gap: 12px;
  grid-column-gap: 12px;
  display: flex;
  overflow: scroll;
  /* .height_scroll {
    height: 400px;
    overflow-x: hidden;
    overflow-y: auto;
  } */
  & button:focus {
    background: #efecff;
    color: #9f99e5;
  }
`;

const ItemContainer = styled.button`
  width: 172px;
  height: 48px;
  /* justify-content: space-evenly; */
  justify-content: space-between;
  align-items: stretch;
`;

const StackName = styled.span`
  width: 75px;
  height: 32px;
  font-size: 10px;
  line-height: 32px;
  margin: auto;
  margin-left: 12px;
  margin-bottom: 10px;
`;

const ImageUrl = styled.img`
  border-radius: var(--Corner-radius-circle, 999px);
  width: 32px;
  margin: auto;
  margin-top: 5px;
`;
