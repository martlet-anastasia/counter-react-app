import { Link } from "react-router-dom";

import styles from "./styles.module.scss";

const NavbarView = () => {
  return (
    <nav className={styles.navContainer}>
      <ul>
        <li className={styles.navItem}>
          <Link to={"/"}>
            <i className="fas fa-home"></i>Home
          </Link>
        </li>
        <li className={styles.navItem}>
          <Link to={"/counter"}>
            <i className="fas fa-calculator"></i>Counter
          </Link>
        </li>
      </ul>
      <i className="fas fa-abacus"></i>
    </nav>
  );
};

export default NavbarView;