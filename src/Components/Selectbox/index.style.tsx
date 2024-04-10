import styled from 'styled-components';

export const IconWrap = styled.div`
  display: flex;
  position: absolute;
  top: 10px;
  right: 16px;
`;

export const Container = styled.div`
  display: flex;
  position: relative;
`;

export const Select = styled.select`
  width: 392px;
  height: 44px;
  background-color: ${(props) => props.theme.color.white};
  border-radius: 8px;
  border: 1px solid #cbcdd1;
  color: ${(props) => props.theme.color.gray3};
  padding-left: 16px;
  cursor: pointer;
`;

export const TextWrap = styled.option`
  background: ${(props) => props.theme.color.gray1};
  color: ${(props) => props.theme.color.gray3};
  padding-left: 16px;

  &[disabled] {
    display: none;
  }
`;
