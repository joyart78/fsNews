import { Outlet } from "react-router-dom";
import Nav from "@/widgets/nav";
import styles from "./styles.module.css";

const Layout = () => {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <Nav />
      </header>

      <main className={styles.main}>
        <Outlet />
      </main>
      <footer></footer>
    </div>
  );
};

export default Layout;
