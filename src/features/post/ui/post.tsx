import styles from "./styles.module.css";

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export default function Post({ prop }: { prop: Post }) {
  return (
    <div className={styles.post_card}>
      <h2 className={styles.post_title}>{prop.title}</h2>
      <p className={styles.post_body}>{prop.body}</p>
    </div>
  );
}
