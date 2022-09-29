import { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../context/auth/auth-context";
import LoginForm from "../components/login/LoginForm";

const LoginPage = () => {
  const { user, Login, Googlelogin } = useContext(AuthContext);
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
    const res = await Login(userCredentils, navigate);
    // console.log(user);
  };

  const handleGoogleLogin = async () => {
    const res = await Googlelogin(navigate);
  };

  return (
    <div>
      <LoginForm onLogin={handleLogin} onGoogleLogin={handleGoogleLogin} />
    </div>
  );
};

export default LoginPage;
