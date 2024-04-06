import { NextPage } from "next";
import { FormEventHandler, useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import styles from "../../styles/Home.module.css";

interface Props {}

const SignIn: NextPage = (props): JSX.Element => {
  const [userInfo, setUserInfo] = useState({ name: "", email: "" });
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();

    const res = await signIn("credentials", {
      name: userInfo.name,
      email: userInfo.email,
      redirect: false,
    });
    console.log(res);

    if (!res?.error) {
      const userData = {
        name: userInfo.name,
        email: userInfo.email,
      };

      router.push("/admin");
    } else {
      setError("Invalid name or password");
      console.error("Sign in error:", res.error);
    }
  };
  return (
    <div className={styles["container"]}>
      <div className={styles["sign-in-form"]}>
        <form onSubmit={handleSubmit}>
          <h1>Login</h1>
          {error && <p style={{ color: "red" }}>{error}</p>}
          <label htmlFor="name">Name: </label>
          <input
            value={userInfo.name}
            onChange={({ target }) =>
              setUserInfo({ ...userInfo, name: target.value })
            }
            type="text"
            placeholder="ali"
            name="name"
          />
          <label htmlFor="email">Email: </label>
          <input
            value={userInfo.email}
            onChange={({ target }) =>
              setUserInfo({ ...userInfo, email: target.value })
            }
            type="email"
            placeholder="aligel@example.com"
            name="email"
          />
          <input type="submit" value="Login" />
        </form>
      </div>
    </div>
  );
};

export default SignIn;
