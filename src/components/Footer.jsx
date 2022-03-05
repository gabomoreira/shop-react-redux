import React from "react";
import styled from "styled-components";
import { GitHub, LinkedIn } from "@material-ui/icons";

const Container = styled.div`
  background: #000;
`;

const Wrapper = styled.div`
  padding: 20px 0;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Links = styled.div`
  margin-bottom: 10px;
  flex: 1;
`;

const Link = styled.a`
  text-decoration: none;
  color: #fff;
  margin: 0 10px;
  cursor: pointer;

  > .MuiSvgIcon-root {
    font-size: 30px;
    transition: all 0.3s ease;
  }
  > .MuiSvgIcon-root:hover {
    transform: scale(1.1);
  }
`;

const Autor = styled.span`
  color: #fff;
`;

const Footer = () => {
  return (
    <Container>
      <Wrapper>
        <Links>
          <Link href="https://github.com/gabomoreira" target="_blank">
            <GitHub />
          </Link>
          <Link
            href="https://www.linkedin.com/in/gabrielmoreiradev"
            target="_blank"
          >
            <LinkedIn />
          </Link>
        </Links>
        <Autor>Created by Gabriel</Autor>
      </Wrapper>
    </Container>
  );
};

export default Footer;
