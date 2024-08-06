import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://fake-api-tau.vercel.app/api/efood/",
  }),
  endpoints: (builder) => ({
    getStores: builder.query<Store[], undefined>({
      query: () => "restaurantes",
    }),
    getStore: builder.query<Store, string>({
      query: (id) => `restaurantes/${id}`,
    }),
    sendOrder: builder.mutation<OrderResponse, Order>({
      query: (body) => {
        const options = { url: "checkout", method: "POST", body };
        return options;
      },
    }),
  }),
});

export const { useGetStoresQuery, useGetStoreQuery, useSendOrderMutation } =
  api;
