import React from "react";
import styled from "styled-components";
import { Close } from "@material-ui/icons";
import { useDispatch, useSelector } from "react-redux";
import { selectCart } from "../features/cartSlice";
import CartItem from "./CartItem";
import { activeMenu, selectMenu } from "../features/menuSlice";
import { selectTotalPrice } from "../features/totalPriceSlice";

const Container = styled.div`
  position: fixed;
  right: ${({ menu }) => (menu ? 0 : "-400px")};
  top: 0;
  bottom: 0;
  height: 100vh;
  width: 400px;
  background: #000;
  border-radius: 8px;
  padding: 10px;
  z-index: 999;
  transition: all 0.7s ease;

  @media (max-width: 425px) {
    width: 100vw;
    right: ${({ menu }) => (menu ? 0 : "-100vw")};
  }
`;

const Wrapper = styled.div`
  position: relative;
  height: 100%;
  padding: 10px;
  background-color: whitesmoke;
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  overflow: hidden;
`;

const CloseContainer = styled.div`
  position: absolute;

  > .MuiSvgIcon-root {
    font-size: 1.6rem;
    cursor: pointer;
  }
`;

const Top = styled.div`
  flex: 1;
  text-align: center;
`;

const TopTitle = styled.span`
  font-size: 25px;
  font-weight: bold;
`;

const Center = styled.div`
  position: relative;
  flex: 10;
  margin: 10px 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const CenterText = styled.h1``;

const ItemsList = styled.div`
  position: absolute;
  top: 0;
  height: 100%;
  width: 100%;
  overflow: scroll;

  ::-webkit-scrollbar {
    display: none;
  }
`;

const Bottom = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #fff;
  border-radius: 8px;
  text-align: center;
`;

const TotalContainer = styled.div``;

const Total = styled.span`
  font-weight: 600;
`;

const CartShop = () => {
  const dispatch = useDispatch();
  const menu = useSelector(selectMenu);
  const cartItems = useSelector(selectCart);
  const totalPrice = useSelector(selectTotalPrice);

  const close = () => {
    dispatch(activeMenu(false));
  };

  return (
    <Container menu={menu}>
      <Wrapper>
        <CloseContainer onClick={close}>
          <Close />
        </CloseContainer>
        <Top>
          <TopTitle>Cart Shop</TopTitle>
        </Top>
        <Center>
          {cartItems.length === 0 && <CenterText>No items</CenterText>}
          <ItemsList>
            {cartItems?.map((item) => {
              const { id, image, title, price, color, size } = item;

              return (
                <CartItem
                  key={id}
                  id={id}
                  image={image}
                  title={title}
                  price={price}
                  color={color}
                  size={size}
                />
              );
            })}
          </ItemsList>
        </Center>
        <Bottom>
          <TotalContainer>
            <Total>Total: ${totalPrice.toFixed(2)}</Total>
          </TotalContainer>
        </Bottom>
      </Wrapper>
    </Container>
  );
};

export default CartShop;
