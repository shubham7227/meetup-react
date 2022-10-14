import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
// import AuthContext from "../context/auth/auth-context";
import LoginForm from "../components/login/LoginForm";

import { useDispatch, useSelector } from "react-redux";
import { Login, Googlelogin } from "../redux/action/userAction";

const LoginPage = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.userReducer.authData);
  // const { user, Login, Googlelogin } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      navigate("/homepage", { replace: true });
    }
  }, [user]);

  //Prev WOrking
  // const Navigate = useNavigate();
  // const [err, setErr] = useState(false);
  // const [user, loading, error] = useAuthState(auth);

  // useEffect(() => {
  //   if (loading) {
  //     return;
  //   }
  //   if (user) {
  //     Navigate("/homepage", { replace: true });
  //   }
  // }, [user, loading]);

  const handleLogin = async (userCredentils) => {
    const res = dispatch(Login(userCredentils, navigate));
    // console.log(user);
  };

  const handleGoogleLogin = async () => {
    const res = dispatch(Googlelogin(navigate));
  };

  return (
    <div>
      <LoginForm onLogin={handleLogin} onGoogleLogin={handleGoogleLogin} />
    </div>
  );
};

export default LoginPage;
