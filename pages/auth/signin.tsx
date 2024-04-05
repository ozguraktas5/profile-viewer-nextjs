import { NextPage } from "next";
import { FormEventHandler, useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

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
      setError("Geçersiz kullanıcı adı veya şifre");
      console.error("Sign in error:", res.error);
    }
  };
  return (
    <div className="sign-in-form">
      <form onSubmit={handleSubmit}>
        <h1>Giriş</h1>
        {error && <p style={{ color: "red" }}>{error}</p>}
        <label htmlFor="username">İsim: </label>
        <input
          value={userInfo.name}
          onChange={({ target }) =>
            setUserInfo({ ...userInfo, name: target.value })
          }
          type="name"
          placeholder="ali"
        />
        <label htmlFor="email">Eposta: </label>
        <input
          value={userInfo.email}
          onChange={({ target }) =>
            setUserInfo({ ...userInfo, email: target.value })
          }
          type="email"
          placeholder="aligel@example.com"
        />
        <input type="submit" value="Giriş Yap" />
      </form>
    </div>
  );
};

export default SignIn;
