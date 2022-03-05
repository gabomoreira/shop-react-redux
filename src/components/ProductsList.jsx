import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useGetProductsQuery } from "../services/productsApi";
import Loading from "./Loading";
import Product from "./Product";

const Container = styled.div`
  min-height: 100vh;
  background: whitesmoke;
  text-align: center;
`;

const Title = styled.h1`
  padding: 20px 0;
  margin-bottom: 30px;
`;

const Filter = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;

  @media (max-width: 425px) {
    flex-direction: column;
  }
`;

const FilterOption = styled.div`
  padding: 10px 20px;
  border-radius: 8px;
  background: #fff;
  margin: 0 10px;
  cursor: pointer;
  transition: all 0.3s ease;

  :hover {
    transform: scale(1.1);
  }

  @media (max-width: 425px) {
    margin-bottom: 10px;
  }
`;

const FilterTitle = styled.span`
  font-weight: 700;
`;

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 25px;
  padding: 30px;

  @media (max-width: 425px) {
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  }
`;

const ProductsList = () => {
  const {
    data: productsData,
    error,
    isSuccess,
    isError,
    isLoading,
  } = useGetProductsQuery();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(productsData);
  }, [productsData]);

  const filter = (name) => {
    if (name) {
      setProducts(productsData.filter((item) => item.category === name));
    } else {
      setProducts(productsData);
    }
  };

  if (isLoading) return <Loading />;

  if (isError) return alert(error.message);

  return (
    <Container>
      <Title>All Products</Title>
      <Filter>
        <FilterOption onClick={() => filter(``)}>
          <FilterTitle>all</FilterTitle>
        </FilterOption>
        <FilterOption onClick={() => filter(`men's clothing`)}>
          <FilterTitle>men's clothing</FilterTitle>
        </FilterOption>
        <FilterOption onClick={() => filter(`jewelery`)}>
          <FilterTitle>jewelery</FilterTitle>
        </FilterOption>
        <FilterOption onClick={() => filter(`electronics`)}>
          <FilterTitle>electronics</FilterTitle>
        </FilterOption>
        <FilterOption onClick={() => filter(`women's clothing`)}>
          <FilterTitle>women's clothing</FilterTitle>
        </FilterOption>
      </Filter>
      <Wrapper>
        {isSuccess &&
          products &&
          products?.map((item) => {
            const { id, title, price, image } = item;
            return (
              <Product
                key={id}
                id={id}
                name={title}
                price={price}
                image={image}
              />
            );
          })}
      </Wrapper>
    </Container>
  );
};

export default ProductsList;
