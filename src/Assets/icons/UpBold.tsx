export interface SVGAttributeProps {
  width?: number;
  height?: number;
  color?: string;
}

export const UpBold = ({ width = 53.333, height = 53.333, color = '#BCC0C4' }: SVGAttributeProps) => {
  return (
    <svg width={width} height={height} viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M47.0001 36.0665C47.0001 36.4078 46.8701 36.7492 46.6094 37.0092C46.0887 37.5298 45.2447 37.5298 44.7241 37.0092L27.0001 19.2852L9.27608 37.0092C8.75541 37.5298 7.91141 37.5298 7.39074 37.0092C6.87008 36.4885 6.87008 35.6445 7.39074 35.1238L25.1474 17.3672C25.6421 16.8725 26.3007 16.5998 27.0007 16.5998C27.7007 16.5998 28.3587 16.8725 28.8541 17.3672L46.6107 35.1238C46.8714 35.3845 47.0014 35.7252 47.0014 36.0665H47.0001Z"
        fill={color}
      />
    </svg>
  );
};
