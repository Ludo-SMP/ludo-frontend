import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

interface DropdownProps {
  children: React.ReactNode;
  toggleButton: React.ReactNode;
  isOpened?: boolean;
}

const Dropdown = ({ children, toggleButton, isOpened = false }: DropdownProps) => {
  const [isOpen, setIsOpen] = useState(isOpened);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleOutSideClick = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleOutSideClick);

    return () => {
      document.removeEventListener('mousedown', handleOutSideClick);
    };
  }, [dropdownRef]);

  return (
    <DropdownWrapper isOpen={isOpen} ref={dropdownRef}>
      <button className="toggle" onClick={() => setIsOpen(!isOpen)}>
        {toggleButton}
      </button>
      {isOpen && <div className="panel">{children}</div>}
    </DropdownWrapper>
  );
};

const DropdownWrapper = styled.div<{ isOpen: boolean }>`
  border: none;
  box-shadow: none;
  position: relative;

  button {
    background: none;
    border: none;
    cursor: pointer;
    outline: none;
    box-shadow: none;
  }

  .panel {
    box-shadow: none;
    position: absolute;
    white-space: nowrap;
    top: 50px;
    right: 0;
    padding: 8px 16px;
    font-family: Pretendard;
    color: ${({ theme }) => theme.color.black3};
    font-size: ${({ theme }) => theme.font.small};
    font-style: normal;
    font-weight: 400;
    line-height: 24px;
    border: 1px solid ${({ theme }) => theme.color.gray1};
    border-radius: ${({ theme }) => theme.borderRadius.small};
    z-index: 100;

    &:hover {
      cursor: pointer;
      color: ${({ theme }) => theme.color.black4};
      background: linear-gradient(
          0deg,
          ${({ theme }) => theme.color.black1} 0%,
          ${({ theme }) => theme.color.black1} 100%
        ),
        ${({ theme }) => theme.color.white};
      cursor: pointer;
    }
  }
`;

export default Dropdown;
