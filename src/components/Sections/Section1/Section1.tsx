import { Instagram } from "lucide-react";
import { Facebook } from "lucide-react";
import { MessageCircle } from "lucide-react";
import styles from "./Section1.module.css";

const Section1 = () => {
  return (
    <section className={styles.section1}>
      <h1 className={styles.title}>Aqui, o sabor é Biggie.</h1>
      <div className={styles.icons}>
        <a href="#">
          <Instagram className={styles.icon} color="white" size={48} />
        </a>
        <a href="#">
          <Facebook className={styles.icon} color="white" size={48} />
        </a>
        <a href="#">
          <MessageCircle className={styles.icon} color="white" size={48} />
        </a>
      </div>
    </section>
  );
};

export default Section1;
