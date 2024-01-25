export interface SVGAttributeProps {
  width?: number;
  height?: number;
  color?: string;
}
export const DownBold = ({ width = 18, height = 18, color = 'black' }: SVGAttributeProps) => {
  return (
    <svg width={width} height={height} viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clip-path="url(#clip0_959_2129)">
        <path
          d="M15.75 5.94029C15.75 6.05549 15.7061 6.17069 15.6182 6.25844L9.6255 12.2513C9.28058 12.5962 8.71943 12.5962 8.37473 12.2513L2.38185 6.25844C2.20613 6.08272 2.20613 5.79787 2.38185 5.62214C2.55758 5.44642 2.84243 5.44642 3.01815 5.62214L9 11.604L14.9819 5.62214C15.1576 5.44642 15.4424 5.44642 15.6182 5.62214C15.7061 5.71012 15.75 5.82509 15.75 5.94029Z"
          fill={color}
          fill-opacity="0.45"
        />
      </g>
      <defs>
        <clipPath id="clip0_959_2129">
          <rect width="18" height="18" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};
