import { NextPage } from "next";
import { FormEventHandler, useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

interface Props {}

const SignIn: NextPage = (props): JSX.Element => {
  const [userInfo, setUserInfo] = useState({ name: "", email: "" });
  const router = useRouter();
  const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();

    const res = await signIn("credentials", {
      name: userInfo.name,
      email: userInfo.email,
      redirect: false,
    });
    console.log(res);

    if (res?.error) {
      console.error("Sign in error:", res.error);
    } else {
      // Redirect to admin page
      router.push("/admin");
    }
  };
  return (
    <div className="sign-in-form">
      <form onSubmit={handleSubmit}>
        <h1>Login</h1>
        <label htmlFor="username">Name: </label>
        <input
          value={userInfo.name}
          onChange={({ target }) =>
            setUserInfo({ ...userInfo, name: target.value })
          }
          type="name"
          placeholder="ali"
        />
        <label htmlFor="email">Email: </label>
        <input
          value={userInfo.email}
          onChange={({ target }) =>
            setUserInfo({ ...userInfo, email: target.value })
          }
          type="email"
          placeholder="aligel@example.com"
        />
        <input type="submit" value="Login" />
      </form>
    </div>
  );
};

export default SignIn;
