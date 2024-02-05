import { useState } from 'react';
import styled from 'styled-components';

export const Validation = () => {
  return (
    <>
      <NoticeContainer />
    </>
  );
};

const NoticeContainer = styled.div`
  color: red;
  padding-top: 5px;
`;
