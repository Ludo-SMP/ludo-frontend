export interface ProfileProps {
  color?: string;
  checked?: boolean;
}

export const Radio = ({ color, checked }: ProfileProps) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
      <circle
        cx="16"
        cy="16"
        r="15.5"
        stroke={checked ? color : 'black'}
        stroke-opacity={checked ? 1 : 0.1}
        fill={checked ? 'white' : 'transparent'}
      />
      {checked && <circle cx="16" cy="16" r="10" fill={color} />}
    </svg>
  );
};
