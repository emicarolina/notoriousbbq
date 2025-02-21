import styles from "./Footer.module.css";
import logo from "../../assets/Images/logo.png";

const Footer = () => {
  return (
    <section className={styles.container}>
      <img src={logo} />
      <div className={styles.row}>
        <div className={styles.content}>
          <h1>Endereço</h1>
          <p>Rua Tal</p>
          <span>Florianópolis - SC</span>
        </div>
        <div className={styles.content}>
          <h1>Horários</h1>
          <p>Aberto de terça a domingo </p>
          <span>18h às 23h</span>
        </div>
        <div className={styles.content}>
          <h1>Contatos</h1>
          <p>notoriousbbq@gmail.com </p>
          <span>Tel: (00) 00000-0000</span>
        </div>
      </div>
      <div className={styles.footer}>
        <h1>Desenvolvido por Emilly. 2025</h1>
      </div>
    </section>
  );
};

export default Footer;
