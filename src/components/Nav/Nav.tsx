import { Link } from "react-router-dom";
import styles from "./Nav.module.css";

const Nav = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <nav className={styles.links}>
      <Link to="/" onClick={scrollToTop}>
        Início
      </Link>
      <Link to="/burgers">Hambúrgueres</Link>
    </nav>
  );
};

export default Nav;
