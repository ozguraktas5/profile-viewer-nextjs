import styles from "../../styles/Home.module.css";
import Image from 'next/image';

function JaneSmith() {
  return (
    <div className={styles.profile}>
      <Image
        className={styles.avatar}
        src="https://xsgames.co/randomusers/assets/avatars/female/78.jpg"
        alt="Jane Smith"
        width={200}
        height={200}
      />
      <h1 className={styles.name}>Name: Jane Smith</h1>
      <p className={styles.info}>Title: Product Manager</p>
      <p className={styles.info}>Location: New York, NY</p>
      <p className={styles.bio}>
        Bio: Dedicated Product Manager with over 5 years of experience in the
        tech industry, specializing in project coordination and team leadership.
      </p>
    </div>
  );
}

export default JaneSmith;
