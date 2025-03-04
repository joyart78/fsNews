import styles from "./styles.module.css";
import PostList from "@/features/post";

const Posts = () => {
  return (
    <div className={styles.container}>
      <PostList />
    </div>
  );
};

export default Posts;
