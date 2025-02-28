import styles from "./styles.module.css";
import { NavLink } from "react-router-dom"; // Или используйте next/link, если работаете с Next.js

const NotFound = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>404</h1>
        <h2 className={styles.subtitle}>Oops! Page Not Found</h2>
        <p className={styles.text}>
          The page you're looking for doesn't exist or has been moved.
        </p>
        <NavLink to="/" className={styles.homeButton}>
          Go Back Home
        </NavLink>
      </div>
    </div>
  );
};

export default NotFound;
