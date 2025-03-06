import { NavLink } from "react-router-dom";
import styles from "./styles.module.css";
import { CurrencyNav } from "@/features/converter/ui";

const setActive = ({ isActive }: { isActive: boolean }): string =>
  isActive ? `${styles.link} ${styles.active}` : styles.link;

const Nav = () => {
  return (
    <nav className={styles.container}>
      <ul className={styles.nav}>
        <li>
          <NavLink to="/" className={setActive}>
            Home
          </NavLink>
        </li>

        <li>
          <NavLink to="/news" className={setActive}>
            News
          </NavLink>
        </li>

        <li>
          <NavLink to="/profile" className={setActive}>
            Profile
          </NavLink>
        </li>

        <li>
          <NavLink to="/converter" className={setActive}>
            <CurrencyNav />
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
