import styles from "./styles.module.css";
import Loader from "@/shared/Loader/Loader.tsx";
import { ProfileInfo } from "@/features/profile";
import { profileApi } from "@/entities/profile";

function Profile() {
  const { data, error, isLoading } = profileApi.useGetProfileQuery();

  return (
    <div className={styles.profile}>
      {isLoading ? (
        <Loader />
      ) : error ? (
        "Server Error"
      ) : (
        <ProfileInfo
          name={data?.name}
          username={data?.username}
          email={data?.email}
          street={data?.address.street}
          suite={data?.address.suite}
          city={data?.address.city}
        />
      )}
    </div>
  );
}

export default Profile;
