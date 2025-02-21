import styles from "./Burgers.module.css";
import classicburger from "../../assets/Images/classicburger.webp";
import beat2 from "../../assets/Images/smashbeat2.webp";
import beat3 from "../../assets/Images/smashbeat3.webp";
import blessedburger from "../../assets/Images/blessedburger.webp";
import bigburgeat from "../../assets/Images/bigburgeat.webp";
import smashsalad from "../../assets/Images/smashsalad.webp";
import brtburger from "../../assets/Images/brtburger.webp";
import beansblessed from "../../assets/Images/beansblessed.webp";
import beanssalad from "../../assets/Images/beanssalad.webp";

const Burgers = () => {
  return (
    <section className={styles.container}>
      <div className={styles.headerTitle}>
        <h1>Nossos Hambúrgueres</h1>
      </div>

      <div className={styles.content}>
        <img src={classicburger} alt="" />
        <div className={styles.texts}>
          <h1>Classic Burger</h1>
          <p>
            Um delicioso hambúrguer com 140g de carne, queijo mussarela
            derretido, picles e salada fresca (tomate, cebola roxa e alface
            americana), tudo isso envolvido em um pão brioche macio lambuzado
            com barbecue e a exclusiva maionese especial.
          </p>
        </div>
      </div>
      <div className={styles.content}>
        <img src={beat2} alt="" />
        <div className={styles.texts}>
          <h1>Smash Beat 2.0</h1>
          <p>
            Um hambúrguer com 2 carnes (140g) ao estilo smash cobertas com
            queijo cheddar cremoso e tiras de bacon crocantes acompanhadas de
            molho barbecue, tudo isso combinado com um pão brioche selado na
            manteiga e a exclusiva maionese especial.
          </p>
        </div>
      </div>
      <div className={styles.content}>
        <img src={beat3} alt="" />
        <div className={styles.texts}>
          <h1>Smash Beat 3.0</h1>
          <p>
            Um hambúrguer com 3 carnes (210g) ao estilo smash cobertas com
            queijo cheddar cremoso e tiras de bacon crocantes acompanhadas de
            molho barbecue, tudo isso combinado com um pão brioche selado na
            manteiga e a exclusiva maionese especial.
          </p>
        </div>
      </div>
      <div className={styles.content}>
        <img src={blessedburger} alt="" />
        <div className={styles.texts}>
          <h1>Blessed Burger</h1>
          <p>
            A irresistível cebola caramelizada acompanhada de 140g de carne
            cobertas com queijo cheddar cremoso e tiras de bacon crocantes
            acompanhadas de molho barbecue, tudo isso combinado com um pão
            brioche selado na manteiga e a exclusiva maionese especial.
          </p>
        </div>
      </div>
      <div className={styles.content}>
        <img src={bigburgeat} alt="" />
        <div className={styles.texts}>
          <h1>Big Burgeat</h1>
          <p>
            Um hambúrguer com 2 carnes (280g) cobertas com fatias de cheddar e
            mussarela derretidos, tiras de bacon crocantes e molho barbecue,
            tudo isso combinado com um pão brioche selado na manteiga e a
            exclusiva maionese especial.
          </p>
        </div>
      </div>
      <div className={styles.content}>
        <img src={smashsalad} alt="" />
        <div className={styles.texts}>
          <h1>Smash Salad</h1>
          <p>
            Um hambúrguer com 1 carne (70g) ao estilo smash coberta com queijo
            mussarela derretido e salada fresca (tomate e alface americana),
            tudo isso envolvido em um pão brioche macio com barbecue e a nossa
            exclusiva maionese especial.
          </p>
        </div>
      </div>
      <div className={styles.content}>
        <img src={brtburger} alt="" />
        <div className={styles.texts}>
          <h1>BRT Burger</h1>
          <p>
            A combinação perfeita de bacon crocante, rúcula e tomate seco
            acompanhados de 140g de carne e queijo mussarela derretido, pão
            brioche selado na manteiga com barbecue e a exclusiva maionese
            especial completam essa obra de arte.
          </p>
        </div>
      </div>
      <div className={styles.content}>
        <img src={beansblessed} alt="" />
        <div className={styles.texts}>
          <h1>Beans Blessed</h1>
          <p>
            A irresistível cebola caramelizada acompanhada de um hambúrguer de
            feijão fradinho e queijo cheddar derretido, pão brioche selado na
            manteiga, molho barbecue e o nossa maionese especial.
          </p>
        </div>
      </div>
      <div className={styles.content}>
        <img src={beanssalad} alt="" />
        <div className={styles.texts}>
          <h1>Beans Salad</h1>
          <p>
            Um delicioso hambúrguer de feijão fradinho, queijo cheddar
            derretido, rúcula, tomate e cebola roxa, tudo isso envolvido em um
            pão brioche macio lambuzado com barbecue e a nossa maionese
            especial.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Burgers;
