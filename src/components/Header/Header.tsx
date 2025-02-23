import styles from "./Header.module.css";
import Nav from "../Nav/Nav";
import logoDesktop from "../../assets/Images/logo.png";
import logoMobile from "../../assets/Images/icon2.png";
import { useWindowSize } from "../../hooks/useWindowSize";

const Header = () => {
  const { width } = useWindowSize();

  const logoSrc = width <= 480 ? logoMobile : logoDesktop;
  return (
    <header className={styles.header}>
      <img src={logoSrc} alt="Logo Notorious B.B.Q" />
      <Nav />
    </header>
  );
};

export default Header;
