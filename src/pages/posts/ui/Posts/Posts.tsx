import MappedPosts from "@/entities/posts";
import styles from "./Posts.module.css";

const Posts = () => {
  return (
    <div className={styles.container}>
      <MappedPosts />
    </div>
  );
};

export default Posts;
