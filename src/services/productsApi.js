import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseUrl = "https://fakestoreapi.com";

const createRequest = (url) => ({ url });

export const productsApi = createApi({
  reducerPath: "productsApi",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => createRequest(`/products`),
    }),
    getProduct: builder.query({
      query: (id) => createRequest(`/products/${id}`),
    }),
  }),
});
export const { useGetProductsQuery } = productsApi;
export const { useGetProductQuery } = productsApi;
