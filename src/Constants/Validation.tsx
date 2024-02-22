import { useState } from 'react';
import styled from 'styled-components';

type errorProps = {
  children?: React.ReactNode;
};

export const Validation = ({ children }: errorProps) => {
  return (
    <>
      <NoticeContainer>{children}</NoticeContainer>
    </>
  );
};

const NoticeContainer = styled.div`
  color: red;
  padding-top: 5px;
`;
