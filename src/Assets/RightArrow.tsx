interface RightArrowProps {
  width?: number;
  height?: number;
}

export const RightArrow = ({ width = 24, height = 24 }: RightArrowProps) => {
  return (
    <svg width={width} height={height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M7.91999 21C7.76639 21 7.61279 20.9415 7.49579 20.8242C7.26149 20.5899 7.26149 20.2101 7.49579 19.9758L15.4716 12L7.49579 4.02419C7.26149 3.78989 7.26149 3.41009 7.49579 3.17579C7.73009 2.94149 8.10989 2.94149 8.34419 3.17579L16.3347 11.1663C16.5573 11.3889 16.68 11.6853 16.68 12.0003C16.68 12.3153 16.5573 12.6114 16.3347 12.8343L8.34419 20.8248C8.22689 20.9421 8.07359 21.0006 7.91999 21.0006V21Z"
        fill="black"
        fillOpacity="0.45"
      />
    </svg>
  );
};
