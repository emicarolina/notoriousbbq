import styles from "./Section2.module.css";
import BurgerCarousel from "../../Carousel/BurgerCarousel";

const Section2 = () => {
  return (
    <section className={styles.section2}>
      <div className={styles.container2}>
        <h2>Conheça nossos </h2>
        <h1>Hambúrgueres</h1>
        <BurgerCarousel />
        <h3>Da rua para o prato, com todo o sabor do hip-hop.</h3>
      </div>
    </section>
  );
};

export default Section2;
