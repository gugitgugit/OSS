import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const NavBar = () => {
  const navigate = useNavigate();

  const onClickBasketBtn = () => {
    navigate("/basket");
  };

  const onClickHomeBtn = () => {
    navigate("/home");
  };

  const onClickLogOutBtn = () => {
    navigate("/");
  };

  return (
    <Box>
      <NavBarBox>
        <TitleBox>
          <Logo src="logo.png" />
          <Title>Food Track</Title>
        </TitleBox>
        <HomeBtn onClick={onClickHomeBtn}>Home</HomeBtn>
        <UserBox>
          <BasketBtn onClick={onClickBasketBtn}>
            <img src="basket.svg" alt="장바구니" />
          </BasketBtn>
          <LogOutBtn onClick={onClickLogOutBtn}>Logout</LogOutBtn>
        </UserBox>
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

const HomeBtn = styled.button`
  height: 50px;
  background-color: #ff99cc;
  border: none;
  display: flex;
  align-items: center;
  font-size: 30px;
  color: white;
  font-weight: bold;
  &:hover {
    border: 2px solid white;
    border-radius: 5px;
    font-size: 25px;
  }
`;

const UserBox = styled.div`
  display: flex;
  gap: 10px;
`;

const BasketBtn = styled.button`
  width: 50px;
  height: 50px;
  background-color: #ff99cc;
  border: none;
  display: flex;
  align-items: center;
  &:hover {
    border: 2px solid white;
    border-radius: 5px;
  }
`;

const LogOutBtn = styled.button`
  height: 50px;
  background-color: #ff99cc;
  border: none;
  display: flex;
  align-items: center;
  font-size: 20px;
  color: white;
  font-weight: bold;
  &:hover {
    border: 2px solid white;
    border-radius: 5px;
    font-size: 15px;
  }
`;

const WhiteHr = styled.hr`
  background-color: white;
  height: 2px;
  border: none;
`;

export default NavBar;
