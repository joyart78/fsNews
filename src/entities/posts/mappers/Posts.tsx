import { postsApi } from "@/entities/posts/api/postsApi.ts";
import Post from "@/features/post";
import Loader from "@/shared/Loader/Loader.tsx";

export default function Posts() {
  const { data, error, isLoading } = postsApi.useGetPostsQuery();

  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    return <>error</>;
  }

  if (!data || !Array.isArray(data)) {
    return <div>No posts available</div>;
  }

  return data.map((post) => {
    return <Post key={post.id} prop={post} />;
  });
}
