import { useSelector } from "react-redux";
import { selectUser } from "@/store/sessionSlice";

const Header = () => {
  const user = useSelector(selectUser);

  return (
    <div>
      {user ? <p>Hoşgeldiniz, {user.name}</p> : <p>Oturum açmadınız</p>}
    </div>
  );
};

export default Header;
