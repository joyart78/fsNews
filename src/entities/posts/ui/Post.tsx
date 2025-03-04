import styles from "./styles.module.css";
import type { IPost } from "@/entities/posts/model/type.ts";

export default function Post({ prop }: { prop: IPost }) {
  return (
    <div className={styles.post_card}>
      <h2 className={styles.post_title}>{prop.title}</h2>
      <p className={styles.post_body}>{prop.body}</p>
    </div>
  );
}
