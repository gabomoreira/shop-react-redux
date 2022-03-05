import React from "react";
import styled from "styled-components";

const Container = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999;
`;

const TextContainer = styled.div``;

const Text = styled.h1`
  margin: auto;
`;

const Loading = () => {
  return (
    <Container>
      <TextContainer>
        <Text>Loading...</Text>
      </TextContainer>
    </Container>
  );
};

export default Loading;
