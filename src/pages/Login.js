import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import LoginForm from "../components/login/LoginForm";

import { useDispatch, useSelector } from "react-redux";
import { Login, Googlelogin } from "../redux/action/userAction";

const LoginPage = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.userReducer.authData);
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      navigate("/homepage", { replace: true });
    }
  }, [user]);

  const handleLogin = async (userCredentils) => {
    const res = dispatch(Login(userCredentils, navigate));
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
