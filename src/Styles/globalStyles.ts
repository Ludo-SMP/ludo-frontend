import { createGlobalStyle } from 'styled-components';
import { reset } from 'styled-reset';

export const GlobalStyle = createGlobalStyle`
  ${reset}

  * {
    font-family: AppleSDGothicNeo, Noto Sans KR, sans-serif;
    box-sizing: border-box;
    -ms-overflow-style: none; 
    scrollbar-width: none; 
    &::-webkit-scrollbar {
      display: none;
    }
  }

  body {
    font-family: "Pretendard500";
  }

  button,
  input,
  select,
  textarea {
      color: inherit;
      font: inherit;
      margin: 0;
      background: #fff;
      border: none;
      box-shadow: none;
  }

  button,
  input,
  select,
  textarea {
    &:focus {
      outline: none;
    }
  }

  
  a {
    text-decoration: none;
  }
  button:hover {
    cursor: pointer;
  }

  ul, li {
    list-style: none;
  }

  /* 셀렉트 박스 화살표 제거 */
  select{
    -webkit-appearance: none; /* 크롬 화살표 없애기 */
    -moz-appearance: none; /* 파이어폭스 화살표 없애기 */
    appearance: none; /* 화살표 없애기 */
  }

  input[type="checkbox"] {
    appearance: none;
  }
`;
