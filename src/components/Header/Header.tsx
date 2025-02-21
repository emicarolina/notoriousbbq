import styles from "./Header.module.css";
import Nav from "../Nav/Nav";
import logo from "../../assets/Images/logo.png";

const Header = () => {
  return (
    <header className={styles.header}>
      <img src={logo} alt="Logo Notorious B.B.Q" />
      <Nav />
    </header>
  );
};

export default Header;
