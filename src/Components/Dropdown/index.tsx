import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

interface DropdownProps {
  children: React.ReactNode;
  image: React.ReactNode;
  isOpened?: boolean;
}

const Dropdown = ({ children, image, isOpened = false }: DropdownProps) => {
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
    <DropdownWrapper ref={dropdownRef}>
      <div className="toggle" onClick={() => setIsOpen(!isOpen)}>
        {image}
      </div>
      {isOpen && (
        <div className="panel" onClick={() => setIsOpen(false)}>
          {children}
        </div>
      )}
    </DropdownWrapper>
  );
};

const DropdownWrapper = styled.div`
  border: none;
  box-shadow: none;
  position: relative;

  .toggle {
    padding: 0;
    border: none;
    cursor: pointer;
    outline: none;
    box-shadow: none;
    &:hover {
      svg mask path {
        fill: gray;
      }
    }
  }

  .panel {
    display: flex;
    flex-direction: column;
    padding: 8px 0;
    border: 1px solid ${({ theme }) => theme.color.gray1};
    border-radius: ${({ theme }) => theme.borderRadius.small};
    box-shadow: none;
    position: absolute;
    white-space: nowrap;
    top: 50px;
    right: 0;
    z-index: 100;
  }
`;

export default Dropdown;
