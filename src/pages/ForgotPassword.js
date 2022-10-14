import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import ForgotPasswordForm from "../components/login/ForgotPasswordForm";

const ForgotPasswordPage = () => {
  const user = useSelector((state) => state.userReducer.authData);
  const Navigate = useNavigate();

  useEffect(() => {
    if (user) {
      Navigate("/homepage", { replace: true });
    }
  }, [user]);

  const handleReset = async (email) => {
    console.log("Handle Reset", email);
  };
  return (
    <div>
      <ForgotPasswordForm onReset={handleReset} />
    </div>
  );
};

export default ForgotPasswordPage;
