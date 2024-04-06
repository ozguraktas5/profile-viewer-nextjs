import styles from "../../styles/Home.module.css";

function JohnDoe() {
  return (
    <div className={styles.profile}>
      <img
        src="https://xsgames.co/randomusers/assets/avatars/female/77.jpg"
        alt="John Doe"
      />
      <h1 className={styles.name}>Name: John Doe</h1>
      <p className={styles.info}>Title: Software Engineer</p>
      <p className={styles.info}>Location: San Francisco, CA</p>
      <p className={styles.bio}>
        Bio: Experienced Software Engineer with a passion for developing
        innovative programs that expedite the efficiency and effectiveness of
        organizational success.
      </p>
      
    </div>
  );
}

export default JohnDoe;
