import styled from 'styled-components';

interface HeadingProps {
  component: 'Input' | 'Page';
  type: 'Head' | 'Title' | 'SubTitle' | 'Body';
  children?: React.ReactNode;
  size?: number;
}

const Property = {
  Page: {
    Head: {
      fontSize: '40px',
      lineHeight: '48px',
      fontFamily: 'Pretendard800',
    },
    Title: {
      fontSize: '32px',
      lineHeight: '40px',
      fontFamily: 'Pretendard800',
    },
    SubTitle: {
      fontSize: '18px',
      lineHeight: '32px',
      fontFamily: 'Pretendard500',
    },
    Body: {
      fontSize: '20px',
      lineHeight: '40px',
      fontFamily: 'Pretendard500',
    },
  },
  Input: {
    Title: {
      fontSize: '18px',
      lineHeight: '20px',
      fontFamily: 'Pretendard700',
    },
    Head: {},
    SubTitle: {},
    Body: {},
  },
};

const Bold = {
  fontSize: '50px',
};

const Heading = ({ component, type, children }: HeadingProps) => {
  if (Property[component][type])
    switch (type) {
      case 'Head':
        return <H1 style={{ ...Property[component][type] }}>{children}</H1>;
      case 'Title':
        return <H2 style={{ ...Property[component][type] }}>{children}</H2>;
      case 'SubTitle':
        return <H3 style={{ ...Property[component][type] }}>{children}</H3>;
      case 'Body':
        return <H4 style={{ ...Property[component][type] }}>{children}</H4>;
    }
};

export default Heading;

const H1 = styled.h1`
  display: flex;
  align-items: center;
`;

const H2 = styled.h2`
  display: flex;
  align-items: center;
`;

const H3 = styled.h3`
  display: flex;
  align-items: center;
`;

const H4 = styled.h4`
  display: flex;
  align-items: center;
`;
