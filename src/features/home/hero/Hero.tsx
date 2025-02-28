import styles from "./Hero.module.css";

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.hero__content}>
        <h1 className={styles.hero__title}>Welcome to Our Platform</h1>
        <p className={styles.hero__subtitle}>
          Discover amazing features and services that will transform your
          experience
        </p>
      </div>
    </section>
  );
};

export default Hero;
