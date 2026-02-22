import styles from "./Slider.module.css";

const Slider = () => {
  return (
    <section className={styles.slider}>
      <img src="/assets/slider1.jpg" alt="slider" />

      <div className={styles.hero}>
        <h2>Tienda Oficial Yeison Jiménez</h2>
        <p>Nueva colección disponible</p>
      </div>
    </section>
  );
};

export default Slider;
