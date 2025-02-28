import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Posts } from "@/entities/posts/model/type.ts";

export const postsApi = createApi({
  reducerPath: "postsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${import.meta.env.VITE_API_URL_PLACEHOLDER}`,
  }),
  endpoints: (builder) => ({
    getPosts: builder.query<Posts, void>({
      query: () => "posts",
    }),
  }),
});
