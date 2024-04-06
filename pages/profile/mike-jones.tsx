import styles from "../../styles/Home.module.css";
import Image from 'next/image';

function MikeJones() {
  return (
    <div className={styles.profile}>
      <Image
        className={styles.avatar}
        src="https://xsgames.co/randomusers/assets/avatars/female/64.jpg"
        alt="Mike Jones"
        width={200}
        height={200}
      />
      <h1 className={styles.name}>Name: Mike Jones</h1>
      <p className={styles.info}>Title: UI/UX Designer</p>
      <p className={styles.info}>Location: Austin, TX</p>
      <p className={styles.bio}>
        Bio: Creative UI/UX Designer with a strong background in designing
        interfaces that improve user experience and user interaction.
      </p>
    </div>
  );
}

export default MikeJones;
