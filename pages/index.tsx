import type { NextPage } from "next";
import Head from "next/head";
import { signIn } from "next-auth/react";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Profile Viewer App" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <button
          onClick={() => {
            signIn();
          }}
        >
          Login
        </button>
      </main>

      <footer className={styles.footer}></footer>
    </div>
  );
};

export default Home;
