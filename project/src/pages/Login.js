import { useNavigate } from "react-router-dom";
import { useState } from "react";
import styled from "styled-components";

const Login = () => {
  const navigate = useNavigate();

  const dataBase = [{ id: 1, user_id: "구준혁", user_pw: "password" }];

  const [inputId, setInputId] = useState("");
  const [inputPw, setInputPw] = useState("");

  const handleInputId = (e) => {
    setInputId(e.target.value);
  };

  const handleInputPw = (e) => {
    setInputPw(e.target.value);
  };

  const tryLogin = (e) => {
    e.preventDefault();
    let success = false;
    dataBase.map((el) => {
      if (inputId === el.user_id && inputPw === el.user_pw) {
        navigate("/home");
        success = true;
      }
      return true;
    });
    if (success === false) alert("ID 나 PW가 맞지 않습니다.");
    setInputId("");
    setInputPw("");
  };

  return (
    <Box>
      <MainBox>
        <LoginBox onSubmit={tryLogin}>
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
            <InputBox
              type="text"
              placeholder="ID"
              onChange={handleInputId}
              value={inputId}
            />
          </LoginSmallBox>
          <Hr2 />
          <LoginSmallBox>
            <LoginImg src="lock.svg" />
            <InputBox
              type="password"
              placeholder="PW"
              onChange={handleInputPw}
              value={inputPw}
            />
          </LoginSmallBox>
          <Hr2 />
          <BtnBox>
            <LoginBtn type="submit">LOGIN</LoginBtn>
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

const BtnBox = styled.div`
  margin: auto;
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
