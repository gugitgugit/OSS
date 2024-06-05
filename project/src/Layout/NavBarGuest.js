import styled from "styled-components";

const NavBarGuest = () => {
  return (
    <Box>
      <NavBarBox>
        <TitleBox>
          <Logo src="logo.png" />
          <Title>Food Track</Title>
        </TitleBox>
      </NavBarBox>
      <WhiteHr />
    </Box>
  );
};

const Box = styled.div`
  background-color: #ff99cc;
  padding-bottom: 5px;
`;

const NavBarBox = styled.div`
  background-color: #ff99cc;
  padding: 10px;
  padding-bottom: 0px;
  height: 50px;
  display: flex;
  justify-content: space-between;
`;
const TitleBox = styled.div`
  display: flex;
  height: 100%;
`;

const Logo = styled.img`
  height: 100%;
`;

const Title = styled.div`
  display: flex;
  align-items: center;
  font-size: 50px;
  font-weight: bold;
  color: white;
  margin-left: 10px;
`;

const WhiteHr = styled.hr`
  background-color: white;
  height: 2px;
  border: none;
`;

export default NavBarGuest;
