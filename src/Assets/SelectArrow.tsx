interface SelectArrowProps {
  isOpen?: boolean;
}

export const SelectArrow = ({ isOpen }: SelectArrowProps) => {
  return (
    <svg
      width="24"
      height="24"
      transform={`${isOpen ? 'rotate(180)' : 'rotate(0)'}`}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{
        transition: 'transform 0.3s ease',
      }}
    >
      <path
        id="Vector"
        d="M20.9999 7.92031C20.9999 8.07391 20.9414 8.22751 20.8241 8.34451L12.8339 16.335C12.374 16.7949 11.6258 16.7949 11.1662 16.335L3.17572 8.34451C2.94142 8.11021 2.94142 7.73041 3.17572 7.49611C3.41002 7.26181 3.78982 7.26181 4.02412 7.49611L11.9999 15.4719L19.9757 7.49611C20.21 7.26181 20.5898 7.26181 20.8241 7.49611C20.9414 7.61341 20.9999 7.76671 20.9999 7.92031Z"
        fill="black"
        fillOpacity="0.45"
      />
    </svg>
  );
};
