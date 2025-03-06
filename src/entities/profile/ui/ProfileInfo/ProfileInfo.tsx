import styles from "./styles.module.css";

interface IProfileInfo {
  name: string | undefined;
  username: string | undefined;
  email: string | undefined;
  street: string | undefined;
  suite: string | undefined;
  city: string | undefined;
}

export default function ProfileInfo({
  name,
  username,
  email,
  street,
  suite,
  city,
}: IProfileInfo) {
  return (
    <div>
      <div className={styles.info}>
        <p>
          <strong>Name:</strong> {name}
        </p>
        <p>
          <strong>Username:</strong> {username}
        </p>
        <p>
          <strong>Email:</strong> {email}
        </p>
        <p>
          <strong>Address:</strong> {street}, {suite}, {city}
        </p>
      </div>
    </div>
  );
}
