import styles from "./Section3.module.css";

const Section3 = () => {
  return (
    <section className={styles.section3}>
      <div className={styles.container3}>
        <div className={styles.textos}>
          <h1>Faça seu pedido online</h1>
          <h2>É simples, rápido e fácil!</h2>
        </div>
        <div className={styles.lista}>
          <div>
            <span>01</span>
            <p>
              Explore o nosso cardápio, escolha seus lanches favoritos e
              finalize seu pedido com facilidade.
            </p>
          </div>
          <hr />
          <div>
            <span>02</span>
            <p>
              Nossa equipe entra em ação, preparando tudo com qualidade e muito
              sabor.
            </p>
          </div>
          <hr />
          <div>
            <span>03</span>
            <p>
              Seu pedido sai para entrega, chegando até você quentinho e
              irresistível.
            </p>
          </div>
          <hr />
          <div>
            <span>04</span>
            <p>
              Agora é só aproveitar cada mordida e curtir a experiência
              Notorious B.B.Q!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section3;
