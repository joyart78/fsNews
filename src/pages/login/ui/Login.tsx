import { useNavigate } from "react-router-dom";
import styles from "./styles.module.css";
import { useState } from "react";
import * as React from "react";
import { useAuth, useVerific } from "@/entities/login";

function Login() {
  const navigate = useNavigate();
  const { signin } = useAuth();
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const user: string = form.username.value;
    const password: string = form.password.value;

    if (useVerific(user, password)) {
      signin(() => navigate("/profile", { replace: true }));
    } else {
      form.username.value = "";
      form.password.value = "";
      setError("вы ввели неправильный логин или пароль");
      setTimeout(() => setError(""), 3000);
    }
  };

  return (
    <div className={styles.login}>
      {error && <p className={styles.error}>{error}</p>}
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.form__input}>
          <label className={styles.form__label}>
            Name :
            <input type="text" name={"username"} className={styles.input} />
          </label>
          <label className={styles.form__label}>
            Password :
            <input type="password" name={"password"} className={styles.input} />
          </label>
        </div>
        <button type="submit" className={styles.submit_btn}>
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;
