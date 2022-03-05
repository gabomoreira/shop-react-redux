import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { addItemToCart, selectCart } from "../features/cartSlice";
import { Add, Remove } from "@material-ui/icons";
import { selectTotalPrice, totalPriceItems } from "../features/totalPriceSlice";

const Container = styled.div`
  display: flex;
  padding: 5px;
  background: #fff;
  border-radius: 8px;
  margin: 10px 0;
`;

const ImageContainer = styled.div`
  width: 150px;
  height: 100px;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

const Center = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
`;

const SizeContainer = styled.div``;

const Size = styled.span`
  font-weight: 600;
`;

const ColorContainer = styled.div``;

const Color = styled.span`
  font-weight: 600;
`;

const PriceContainer = styled.div``;

const Price = styled.span`
  font-weight: 600;
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
`;

const IconContainer = styled.div`
  .MuiSvgIcon-root {
    cursor: pointer;
  }
`;

const Amount = styled.span`
  font-weight: 600;
`;

const CartItem = ({ id, image, price, color, size }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCart);
  const totalPrice = useSelector(selectTotalPrice);
  const [amount, setAmount] = useState(1);

  if (cartItems.length === 0) {
    dispatch(totalPriceItems(0));
  }

  const removed = () => {
    let removedItem = cartItems.filter((item) => item.id !== id);
    dispatch(addItemToCart(removedItem));
    dispatch(totalPriceItems(totalPrice - total()));
  };

  const addAmount = () => {
    setAmount(amount + 1);
  };

  const removeAmount = () => {
    if (amount > 1) {
      setAmount(amount - 1);
    } else if (amount === 1) {
      removed();
    }
  };

  useEffect(() => {
    total();
  }, [amount, cartItems]);

  const total = () => {
    let newTotal = null;
    if (cartItems.length > 0) {
      let itemIndex = cartItems.findIndex((item) => item.id === id);
      let prices = cartItems.map((item) => item.price);
      prices.splice(itemIndex, 1, price * amount);

      if (cartItems[itemIndex].id === id) {
        newTotal = prices.reduce((soma, i) => soma + i);
      }
      dispatch(totalPriceItems(newTotal));
    }
    return newTotal;
  };

  return (
    <Container>
      <ImageContainer>
        <Image src={image} />
      </ImageContainer>
      <Center>
        <SizeContainer>
          <Size>{size}</Size>
        </SizeContainer>
        <ColorContainer>
          <Color>{color}</Color>
        </ColorContainer>
        <PriceContainer>
          <Price>${price}</Price>
        </PriceContainer>
      </Center>

      <Right>
        <IconContainer>
          <Remove onClick={removeAmount} />
        </IconContainer>
        <Amount>{amount}</Amount>
        <IconContainer>
          <Add onClick={addAmount} />
        </IconContainer>
      </Right>
    </Container>
  );
};

export default CartItem;
