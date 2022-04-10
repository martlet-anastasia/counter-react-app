import { Link } from "react-router-dom";
import { ROUTE_NAMES } from "../../Routes/routeNames";

import styles from "./styles.module.scss";

const NavbarView = () => {
  return (
    <nav className={styles.navContainer}>
      <ul>
        <li className={styles.navItem}>
          <Link to={ROUTE_NAMES.HOME}>
            <i className="fas fa-home"></i>Home
          </Link>
        </li>
        <li className={styles.navItem}>
          <Link to={ROUTE_NAMES.COUNTER}>
            <i className="fas fa-calculator"></i>Simple Counter
          </Link>
        </li>
        <li className={styles.navItem}>
          <Link to={ROUTE_NAMES.COUNTERS}>
            <i className="fas fa-calculator"></i>Counter of Counters
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavbarView;
