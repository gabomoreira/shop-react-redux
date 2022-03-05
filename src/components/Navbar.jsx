import React, { useEffect } from "react";
import styled from "styled-components";
import { Badge, Avatar } from "@material-ui/core";
import { ShoppingCartOutlined } from "@material-ui/icons";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { activeMenu } from "../features/menuSlice";
import { selectCart } from "../features/cartSlice";
import CartShop from "./CartShop";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase";

const Container = styled.div`
  height: 60px;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #000;
  color: #fff;
  padding: 10px 50px;

  @media (max-width: 425px) {
    padding: 10px 20px;
  }
`;

const Left = styled.div`
  flex: 1;
`;

const AvatarContainer = styled.div`
  height: 40px;
  width: 40px;
  transition: all 0.3s ease;
  overflow: hidden;
  border-radius: 50%;
  cursor: pointer;

  :hover {
    box-shadow: 1px 1px 12px #fff;
  }
`;

// const Avatar = styled.img`
//   width: 100%;
// `;

const Center = styled.div`
  flex: 1;
  text-align: center;

  > a {
    text-decoration: none;
  }
`;

const Logo = styled.span`
  color: #fff;
  font-weight: 700;
  font-size: 30px;
  cursor: pointer;
`;

const Right = styled.div`
  flex: 1;
  text-align: right;

  > .MuiBadge-root {
    transition: all 0.3s ease;
    cursor: pointer;

    :hover {
      transform: scale(1.1);
    }
    > .MuiSvgIcon-root {
      font-size: 25px;
      transition: all 0.3s ease;
      cursor: pointer;
    }

    > .MuiSvgIcon-root:hover {
      transform: scale(1.2);
    }
  }
`;

const Navbar = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCart);
  const [user] = useAuthState(auth);

  useEffect(() => {
    dispatch(activeMenu(false));
  }, []);

  const open = () => {
    dispatch(activeMenu(true));
  };

  return (
    <Container>
      <Wrapper>
        <Left>
          <AvatarContainer>
            <Avatar
              src={user?.photoURL}
              alt={user?.displayName}
              onClick={() => auth.signOut()}
            />
          </AvatarContainer>
        </Left>
        <Center>
          <Link to="/">
            <Logo>Shop.</Logo>
          </Link>
        </Center>
        <Right>
          <Badge badgeContent={cartItems.length} color="primary">
            <ShoppingCartOutlined onClick={open} />
          </Badge>
        </Right>
      </Wrapper>
      <CartShop />
    </Container>
  );
};

export default Navbar;
