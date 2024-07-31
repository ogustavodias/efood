import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Types
import { Store } from "../types/restaurant";

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
  }),
});

export const { useGetStoresQuery, useGetStoreQuery } = api;
