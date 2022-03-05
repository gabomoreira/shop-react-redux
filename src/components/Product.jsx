import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const LinkR = styled(Link)`
  text-decoration: none;
  color: #000;
`;

const Container = styled.div`
  height: 100%;
  padding: 25px;
  background: #fff;
  padding: 10px;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;

  :hover {
    transform: scale(1.05);
    box-shadow: 1px 1px 20px rgba(0, 0, 0, 0.3);
  }
`;

const ImageContainer = styled.div`
  height: 200px;
  margin-bottom: 20px;
`;

const Image = styled.img`
  height: 100%;
  width: 100%;
  object-fit: contain;
`;

const Name = styled.span`
  font-size: 20px;
  font-weight: bold;
`;

const Price = styled.p`
  font-size: 18px;
  margin: 15px 0;
  font-weight: 500;
`;

const Product = ({ image, name, price, id }) => {
  return (
    <LinkR to={`/products/${id}`}>
      <Container>
        <ImageContainer>
          <Image src={image} />
        </ImageContainer>
        <Name>{name}</Name>
        <Price>${price}</Price>
      </Container>
    </LinkR>
  );
};

export default Product;
