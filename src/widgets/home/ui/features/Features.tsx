import styles from "./Features.module.css";

const Features = () => {
  return (
    <section className={styles.features}>
      <h2 className={styles.section__title}>Why Choose Us</h2>
      <div className={styles.features__grid}>
        <div className={styles.feature__card}>
          <div className={styles.feature__icon}>🚀</div>
          <h3 className={styles.feature__title}>Fast Performance</h3>
          <p className={styles.feature__text}>
            Lightning-fast loading speeds and smooth interactions
          </p>
        </div>

        <div className={styles.feature__card}>
          <div className={styles.feature__icon}>🔒</div>
          <h3 className={styles.feature__title}>Secure Platform</h3>
          <p className={styles.feature__text}>
            Enterprise-grade security for your peace of mind
          </p>
        </div>

        <div className={styles.feature__card}>
          <div className={styles.feature__icon}>💡</div>
          <h3 className={styles.feature__title}>Innovative Solutions</h3>
          <p className={styles.feature__text}>
            Cutting-edge technology for modern challenges
          </p>
        </div>
      </div>
    </section>
  );
};

export default Features;
