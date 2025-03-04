import { postsApi } from "@/entities/posts/api/postsApi.ts";
import Loader from "@/shared/Loader/Loader.tsx";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/app/store/store.ts";
import { useEffect, useState } from "react";
import {
  nextPage,
  isHasMore,
  setPosts,
} from "@/entities/posts/slices/postsSlice.ts";
import Post from "@/entities/posts/ui/Post.tsx";
import styles from "./styles.module.css";

export default function PostList() {
  const [isScrolling, setIsScrolling] = useState(false);
  const page = useSelector((state: RootState) => state.posts.page);
  const hasMore = useSelector((state: RootState) => state.posts.hasMore);
  const posts = useSelector((state: RootState) => state.posts.posts);
  const dispatch = useDispatch();

  const { data, error, isLoading, isFetching } =
    postsApi.useGetPostsQuery(page);

  useEffect(() => {
    if (data) {
      dispatch(setPosts(data));
      dispatch(isHasMore(data.length));
    }
  }, [data]);

  useEffect(() => {
    const handleScroll = () => {
      if (isScrolling || isFetching || !hasMore) return;

      const { scrollTop, scrollHeight, clientHeight } =
        document.documentElement;
      const isNearBottom = scrollTop + clientHeight >= scrollHeight - 100;

      if (isNearBottom) {
        setIsScrolling(true);
        dispatch(nextPage());

        setTimeout(() => setIsScrolling(false), 500);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isFetching, isScrolling]);

  if (isLoading && page === 1) {
    return (
      <div className={styles.loader}>
        <Loader />
      </div>
    );
  }

  if (error) {
    return <div>Error loading posts</div>;
  }

  if (!posts.length) {
    return <div>No posts available</div>;
  }

  return (
    <div className={styles.container}>
      {posts.map((post) => (
        <Post key={post.id} prop={post} />
      ))}
      {isFetching && <Loader />}
    </div>
  );
}
