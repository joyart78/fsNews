import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { IPost } from "@/entities/posts/model/type.ts";

interface PostsState {
  page: number;
  hasMore: boolean;
  posts: IPost[];
}

const initialState: PostsState = {
  page: 1,
  hasMore: true,
  posts: [],
};

export const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    nextPage: (state) => {
      state.page = state.page + 1;
    },
    isHasMore: (state, action: PayloadAction<number>) => {
      state.hasMore = action.payload === 10;
    },
    setPosts: (state, action: PayloadAction<IPost[]>) => {
      const set = new Set(state.posts.map((item) => item.id));
      const newPosts = action.payload.filter((item) => !set.has(item.id));
      state.posts = [...state.posts, ...newPosts];
    },
  },
});

export const { nextPage, isHasMore, setPosts } = postsSlice.actions;

export default postsSlice.reducer;
