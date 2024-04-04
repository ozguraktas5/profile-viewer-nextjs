import { useDispatch } from "react-redux";
import { setUser } from "@/store/sessionSlice";

const LoginForm = () => {
  const dispatch = useDispatch();

  const handleLogin = () => {
    // Oturum açma işlemi başarılı olduğunda Redux store'unu güncelle
    const user = { name: "John Doe" }; // Örnek kullanıcı bilgileri
    dispatch(setUser(user));
  };

  return (
    <div>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default LoginForm;
