import React from "react";
import styled from "styled-components";
import { auth, provider } from "../firebase";

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  background: whitesmoke;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #000;
  border-radius: 8px;
  padding: 20px;
  width: 300px;
`;

const LogoContainer = styled.div`
  flex: 1;
  text-align: center;
`;

const Logo = styled.h1`
  font-size: 50px;
  color: #fff;
`;

const Button = styled.button`
  margin-top: 20px;
  border: none;
  outline: none;
  padding: 10px 20px;
  width: 100%;
  background-color: #fff;
  color: #000;
  font-weight: 600;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  :hover {
    opacity: 0.8;
  }
`;

const Login = () => {
  const signin = (e) => {
    e.preventDefault();

    auth.signInWithPopup(provider).catch((error) => alert(error));
  };

  return (
    <Container>
      <Wrapper>
        <LogoContainer>
          <Logo>Shop.</Logo>
        </LogoContainer>
        <Button onClick={signin}>Sign In with Google</Button>
      </Wrapper>
    </Container>
  );
};

export default Login;
