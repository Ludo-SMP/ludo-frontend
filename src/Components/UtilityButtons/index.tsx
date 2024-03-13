import styled from 'styled-components';

export interface UtilityButtonsProps {
  children: React.ReactNode;
}

const UtiltiyButtons = ({ children }: UtilityButtonsProps) => {
  return <UtiltiyButtonsWrapper>{children}</UtiltiyButtonsWrapper>;
};

const UtiltiyButtonsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  align-items: center;
  position: fixed;
  right: 24px;
  bottom: 24px;

  button {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 112px;
    height: 112px;
    border: 1px solid ${(props) => props.theme.color.black1};
    background-color: ${(props) => props.theme.color.white};
    border-radius: 50%;
    align-items: center;
    gap: 0;
    text-align: center;
    svg {
      position: absolute;
      top: -2px;
    }
    span {
      padding-top: 30px;
    }
  }

  svg {
    height: 72px;
  }

  span {
    text-align: center;
    font-family: Pretendard;
    font-size: 18px;
    font-style: normal;
    font-weight: 600;
  }

  .scroll__btn {
    svg {
      width: 72px;
      path {
        fill: ${(props) => props.theme.color.purple1};
      }
    }
    span {
      color: ${(props) => props.theme.color.purple1};
    }

    &:hover {
      background-color: ${(props) => props.theme.color.purple1};
      svg {
        path {
          fill: ${(props) => props.theme.color.white};
        }
      }
      span {
        color: ${(props) => props.theme.color.white};
      }
    }
  }

  .create__btn {
    svg {
      height: 72px;
      path {
        fill: ${(props) => props.theme.color.orange3};
      }
    }
    span {
      color: ${(props) => props.theme.color.orange3};
    }

    &:hover {
      background: linear-gradient(93deg, #6262b2 0%, #f7a477 100%);
      svg {
        path {
          fill: ${(props) => props.theme.color.white};
        }
      }
      span {
        color: ${(props) => props.theme.color.white};
      }
    }
  }
`;

export default UtiltiyButtons;
