import style from "./styles.module.css";

export default function Loader() {
  return (
    <div className={style.container}>
      <div className={style.bar}></div>
      <div className={style.bar}></div>
      <div className={style.bar}></div>
      <div className={style.bar}></div>
    </div>
  );
}
