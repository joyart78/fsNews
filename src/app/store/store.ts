import { configureStore } from "@reduxjs/toolkit";
import { postsApi } from "@/entities/posts/api/postsApi.ts";
import { profileApi } from "@/entities/profile";
import { inputSlice } from "@/entities/converter/slices/input/inputSlice.ts";
import { converterApi } from "@/entities/converter/api/converterApi.ts";

export const store = configureStore({
  reducer: {
    [postsApi.reducerPath]: postsApi.reducer,
    [profileApi.reducerPath]: profileApi.reducer,
    input: inputSlice.reducer,
    [converterApi.reducerPath]: converterApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      postsApi.middleware,
      profileApi.middleware,
      converterApi.middleware,
    ),
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
