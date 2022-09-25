import { useContext, useState, useEffect } from "react";
import { auth, logInWithEmailAndPassword, signInWithGoogle } from "../firebase";
import { useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { userAuthContext } from "../store/UserAuthContext";
import LoginForm from "../components/login/LoginForm";

const LoginPage = () => {
  
  const { user } = useContext(userAuthContext);

  const Navigate = useNavigate();

  useEffect(() => {
    if (user) {
      Navigate("/homepage", { replace: true });
    }
  },[user]);

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
    console.log(userCredentils)
    const res = await logInWithEmailAndPassword(userCredentils.Email, userCredentils.Password);
  };

  const handleGoogleLogin = async () => {
    const res = await signInWithGoogle();
  };

  return (
    <div>
      <LoginForm onLogin={handleLogin} onGoogleLogin={handleGoogleLogin} />
    </div>
  );
};

export default LoginPage;
