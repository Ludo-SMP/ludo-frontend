import styled from 'styled-components';

export const Profile = () => {
  return (
    <>
      <ProfileBox />
    </>
  );
};

const ProfileBox = styled.button`
  border: 2px solid gray;
  width: 60px;
  height: 60px;
  background-color: gray;
  padding-top: 60px;
`;
