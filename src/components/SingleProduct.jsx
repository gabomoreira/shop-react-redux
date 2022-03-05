import React, { useState } from "react";
import styled from "styled-components";
import { useGetProductQuery } from "../services/productsApi";
import { useParams } from "react-router-dom";
import { Comment, ArrowBack } from "@material-ui/icons";
import { stars } from "./Stars";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addItemToCart, selectCart } from "../features/cartSlice";
import Loading from "./Loading";

const Container = styled.div`
  position: relative;
  min-height: 100vh;
  padding: 50px;
  background: whitesmoke;
  display: flex;

  @media (max-width: 425px) {
    padding: 50px 10px;
  }
`;

const LinkContainer = styled.div`
  position: absolute;
  left: 50px;
  top: 12.5px;
  display: flex;
  align-items: center;

  @media (max-width: 425px) {
    left: 10px;
  }
`;

const LinkR = styled(Link)`
  font-weight: 700;
  margin-left: 5px;
  text-decoration: none;
  color: #000;
`;

const Wrapper = styled.div`
  background: #fff;
  display: flex;
  border-radius: 8px;
  padding: 30px;
  gap: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
  }

  @media (max-width: 425px) {
    flex-direction: column;
    padding: 10px;
  }
`;

const ImgContainer = styled.div`
  height: 100%;
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const Image = styled.img`
  height: 100%;
  width: 50%;
  max-height: 400px;
  object-fit: contain;
`;

const Info = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const Title = styled.h1`
  margin-right: auto;
  @media (max-width: 425px) {
    font-size: 20px;
  }
`;

const Stars = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  margin: 10px 0 20px;

  @media (max-width: 768px) {
    justify-content: space-between;
  }
`;

const RatingContainer = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 425px) {
    > .MuiSvgIcon-root {
      font-size: 1rem;
    }
  }
`;

const Rating = styled.span`
  font-weight: 600;
  margin-left: 5px;

  @media (max-width: 425px) {
    font-size: 16px;
  }
`;

const AvaliablesContainer = styled.div`
  display: flex;
  align-items: center;
  margin-left: 20px;

  @media (max-width: 425px) {
    margin-left: 10px;

    > .MuiSvgIcon-root {
      font-size: 1rem;
    }
  }
`;

const Avaliables = styled.span`
  font-weight: 600;
  margin-left: 5px;

  @media (max-width: 425px) {
    font-size: 16px;
  }
`;

const Desc = styled.p`
  color: rgba(0, 0, 0, 0.7);
`;

const Options = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin: 20px 0 40px;
`;

const Select = styled.select`
  padding: 10px;
  cursor: pointer;
`;

const Size = styled.option``;

const ColorContainer = styled.div`
  display: flex;
`;

const Color = styled.div`
  cursor: pointer;
  background: ${({ bg }) => bg};
  height: 20px;
  width: 20px;
  border-radius: 50%;
  margin-right: 10px;
  box-shadow: ${({ bs }) => (bs ? "1px 1px 12px #000" : "none")};
`;

const PriceContainer = styled.div`
  margin: 0px 10px;
`;

const Price = styled.span`
  font-weight: 600;
  font-size: 20px;
`;

const ButtonContainer = styled.div`
  width: 100%;
`;

const Button = styled.button`
  padding: 15px 20px;
  width: 100%;
  background: #000;
  color: #fff;
  font-weight: 600;
  border: none;
  outline: none;
  cursor: pointer;
  border-radius: 8px;
  transition: all 0.3s ease;
  font-size: 16px;

  :hover {
    background: rgba(0, 0, 0, 0.7);
  }
`;

const SingleProduct = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCart);
  const { productId } = useParams();
  const { data, error, isLoading, isError } = useGetProductQuery(productId);
  const [color, setColor] = useState(null);
  const [size, setSize] = useState(null);
  const [red, setRed] = useState(false);
  const [green, setGreen] = useState(false);
  const [blue, setBlue] = useState(false);

  if (isLoading) return <Loading />;

  if (isError) return alert(error.message);

  const addToCart = () => {
    let cartItemsId = cartItems.map((item) => item.id);

    if (cartItemsId.indexOf(data?.id) >= 0) {
      return;
    } else if (!size) {
      alert("Selecione um tamanho");
    } else if (!color) {
      alert("Selecione uma cor");
    } else {
      dispatch(
        addItemToCart([
          ...cartItems,
          {
            id: data?.id,
            image: data?.image,
            title: data?.title,
            price: data?.price,
            color: color,
            size: size,
          },
        ])
      );
    }
  };

  const handleColor = (color) => {
    setColor(color);

    if (color === "red") {
      setRed(true);
      setGreen(false);
      setBlue(false);
    } else if (color === "green") {
      setRed(false);
      setGreen(true);
      setBlue(false);
    } else if (color === "blue") {
      setRed(false);
      setGreen(false);
      setBlue(true);
    }
  };

  return (
    <Container>
      <LinkContainer>
        <ArrowBack />
        <LinkR to="/">Back</LinkR>
      </LinkContainer>
      <Wrapper>
        <ImgContainer>
          <Image src={data?.image} />
        </ImgContainer>
        <Info>
          <Title>{data?.title}</Title>
          <Stars>
            <RatingContainer>
              {stars(data?.rating.rate)}
              <Rating>{data?.rating.rate}</Rating>
            </RatingContainer>
            <AvaliablesContainer>
              <Comment />
              <Avaliables>{data?.rating.count} comments</Avaliables>
            </AvaliablesContainer>
          </Stars>
          <Desc>{data?.description}</Desc>
          <Options>
            <Select
              defaultValue="Size"
              onChange={(e) => setSize(e.target.value)}
            >
              <Size value="Size" disabled>
                Size
              </Size>
              <Size value="PP">PP</Size>
              <Size value="P">P</Size>
              <Size value="M">M</Size>
              <Size value="G">G</Size>
              <Size value="GG">GG</Size>
            </Select>
            <PriceContainer>
              <Price>${data?.price}</Price>
            </PriceContainer>
            <ColorContainer>
              <Color bs={red} bg="red" onClick={() => handleColor("red")} />
              <Color
                bs={green}
                bg="green"
                onClick={() => handleColor("green")}
              />
              <Color bs={blue} bg="blue" onClick={() => handleColor("blue")} />
            </ColorContainer>
          </Options>
          <ButtonContainer>
            <Button onClick={() => addToCart()}>Add to Cart</Button>
          </ButtonContainer>
        </Info>
      </Wrapper>
    </Container>
  );
};

export default SingleProduct;
