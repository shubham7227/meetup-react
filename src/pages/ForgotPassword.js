import React, { useContext, useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import ForgotPasswordForm from "../components/login/ForgotPasswordForm";
import AuthContext from "../context/auth/auth-context";

const ForgotPasswordPage = () => {
  const user = useSelector((state) => state.userReducer.authData);
  // const { user } = useContext(AuthContext);
  const Navigate = useNavigate();

  useEffect(() => {
    if (user) {
      Navigate("/homepage", { replace: true });
    }
  }, [user]);

  const handleReset = async (email) => {
    console.log("Handle Reset", email);
    // if (err) {
    //   alert("Email not found");
    // } else {
    //   Navigate("/", { replace: true });
    // }
  };
  return (
    <div>
      <ForgotPasswordForm onReset={handleReset} />
    </div>
  );
};

export default ForgotPasswordPage;
