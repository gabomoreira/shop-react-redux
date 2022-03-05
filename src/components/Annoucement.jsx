import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: whitesmoke;
`;
const Text = styled.span`
  font-weight: 600;
`;

const Annoucement = () => {
  return (
    <Container>
      <Text>All products available at 50% off</Text>
    </Container>
  );
};

export default Annoucement;
