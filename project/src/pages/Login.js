import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Login = () => {
  const navigate = useNavigate();

  const onClickLoginBtn = () => {
    navigate("/signup");
  };

  return (
    <Box>
      <MainBox>
        <LoginBox>
          <LoginTitle>LOGIN</LoginTitle>
          <Hr1 />
          <LogoBox>
            <Logo src="logo.png" />
            <Title>
              FOOD
              <br />
              TRACK
            </Title>
          </LogoBox>
          <LoginSmallBox>
            <LoginImg src="user.svg" />
            <InputBox type="text" placeholder="ID" />
          </LoginSmallBox>
          <Hr2 />
          <LoginSmallBox>
            <LoginImg src="lock.svg" />
            <InputBox type="password" placeholder="PW" />
          </LoginSmallBox>
          <Hr2 />
          <BtnBox>
            <SignupBtn onClick={onClickLoginBtn}>Sign Up</SignupBtn>
            <LoginBtn
              onClick={() => {
                navigate("/home");
              }}
            >
              LOGIN
            </LoginBtn>
          </BtnBox>
        </LoginBox>
      </MainBox>
    </Box>
  );
};

const Box = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

const MainBox = styled.div`
  height: 50%;
  margin: 30px auto;
  display: flex;
  align-items: center;
`;

const LoginBox = styled.form`
  border: 5px solid #ff99cc;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  padding: 20px 30px;
`;

const LoginTitle = styled.div`
  align-items: center;
  padding: 20px 20px 0px 0px;
  color: #ff99cc;
  font-size: 30px;
  font-weight: bold;
`;

const Hr1 = styled.hr`
  background-color: gray;
  width: 100%;
  height: 1px;
`;

const LogoBox = styled.div`
  display: flex;
`;

const Logo = styled.img`
  height: 100px;
  width: 130px;
  padding: 10px;
`;

const LoginSmallBox = styled.div`
  display: flex;
  align-items: center;
`;

const LoginImg = styled.img`
  height: 20px;
`;

const Title = styled.div`
  display: flex;
  align-items: center;
  font-size: 40px;
  font-weight: bold;
  color: #ff99cc;
`;

const Hr2 = styled.hr`
  background-color: gray;
  width: 100%;
  height: 1px;
`;

const InputBox = styled.input`
  margin: 5px;
  font-size: 20px;
  font-weight: bold;
  border: none;
`;

const BtnBox = styled.div``;

const SignupBtn = styled.button`
  width: 150px;
  font-size: 20px;
  padding: 10px 20px;
  background-color: white;
  border: 2px solid #ff99cc;
  border-radius: 50px;
  margin-top: 10px;
  color: #ff99cc;
`;

const LoginBtn = styled.button`
  width: 150px;
  font-size: 20px;
  padding: 10px 20px;
  background-color: #ff99cc;
  border: 2px solid #ff99cc;
  border-radius: 50px;
  margin-top: 10px;
  color: white;
`;

export default Login;
