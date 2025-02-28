import { NavLink } from "react-router-dom";
import styles from "./styles.module.css";

const setActive = ({ isActive }: { isActive: boolean }): string =>
  isActive ? `${styles.link} ${styles.active}` : styles.link;

const Nav = () => {
  return (
    <nav className={`${styles.container} ${styles.nav}`}>
      <ul>
        <li>
          <NavLink to="/" className={setActive}>
            Home
          </NavLink>
        </li>
      </ul>
      <ul>
        <li>
          <NavLink to="/news" className={setActive}>
            News
          </NavLink>
        </li>
      </ul>
      <ul>
        <li>
          <NavLink to="/profile" className={setActive}>
            Profile
          </NavLink>
        </li>
      </ul>
      <ul>
        <li>
          <NavLink to="/converter" className={setActive}>
            Converter
            {/*<CurrencyWidget />*/}
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
