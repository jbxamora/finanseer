// Import necessary functions and types from libraries and local files
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import {
  GetKpisResponse,
  GetProductsResponse,
  GetTransactionsResponse,
} from "./types";

// Create a new RTK Query API
export const api = createApi({
  // Use fetchBaseQuery as the base query function with the specified base URL
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_BASE_URL }),
  // Define the reducer path for this API
  reducerPath: "main",
  // Define the tag types for cache invalidation
  tagTypes: ["Kpis", "Products", "Transactions"],
  // Define the API endpoints
  endpoints: (build) => ({
    // Define the getKpis endpoint
    getKpis: build.query<Array<GetKpisResponse>, void>({
      // Define the query for fetching KPIs
      query: () => "kpi/kpis/",
      // Specify that this query provides Kpis tags
      providesTags: ["Kpis"],
    }),
    // Define the getProducts endpoint
    getProducts: build.query<Array<GetProductsResponse>, void>({
      // Define the query for fetching products
      query: () => "product/products/",
      // Specify that this query provides Products tags
      providesTags: ["Products"],
    }),
    // Define the getTransactions endpoint
    getTransactions: build.query<Array<GetTransactionsResponse>, void>({
      // Define the query for fetching transactions
      query: () => "transaction/transactions/",
      // Specify that this query provides Transactions tags
      providesTags: ["Transactions"],
    }),
  }),
});

// Export hooks for each endpoint to use them in components
export const { useGetKpisQuery, useGetProductsQuery, useGetTransactionsQuery } =
  api;
