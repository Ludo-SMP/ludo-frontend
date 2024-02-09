import { createGlobalStyle } from 'styled-components';
import { reset } from 'styled-reset';

export const GlobalStyle = createGlobalStyle`
  ${reset}

  * {
    font-family: AppleSDGothicNeo, Noto Sans KR, sans-serif;
    max-width: 100vw;
    max-height: 100vh;
    box-sizing: border-box;
    -ms-overflow-style: none; 
    scrollbar-width: none; 
    &::-webkit-scrollbar {
      display: none;
    }
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
`;
