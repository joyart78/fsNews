import Loader from "@/shared/Loader/Loader.tsx";
import Post from "@/entities/posts/ui/Post.tsx";
import styles from "./styles.module.css";
import {useInfiniteScroll} from "@/entities/posts";

export default function PostList() {
  const { posts, isLoading, isFetching, error, loaderRef, hasMore } = useInfiniteScroll();

  if (isLoading) {
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

        {hasMore && (
            <div ref={loaderRef} className={styles.loadingIndicator}>
              {isFetching && <Loader />}
            </div>
        )}
      </div>
  );
}