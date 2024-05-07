interface SpacingProps {
  size: number;
}

const Spacing = ({ size }: SpacingProps) => {
  return <div style={{ marginTop: size }}></div>;
};

export default Spacing;
