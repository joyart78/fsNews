import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { ExchangeRateData } from "@/entities/converter/model/types/types.ts";

export const converterApi = createApi({
  reducerPath: "converterApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${import.meta.env.VITE_API_URL_CURRENCY}`,
  }),
  endpoints: (builder) => ({
    getCurrency: builder.query<ExchangeRateData, string>({
      query: (str) => `${str}`,
    }),
  }),
});
