import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { User } from "@/entities/profile/model/types/types.ts";

export const profileApi = createApi({
  reducerPath: "profileApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${import.meta.env.VITE_API_URL_PLACEHOLDER}`,
  }),
  endpoints: (builder) => ({
    getProfile: builder.query<User, void>({
      query: () => "users/1",
    }),
  }),
});
