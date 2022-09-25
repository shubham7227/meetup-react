import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ForgotPasswordForm from "../components/login/ForgotPasswordForm";
import { auth, sendPasswordReset } from "../firebase";
import { userAuthContext } from "../store/UserAuthContext";

const ForgotPasswordPage = () => {
    const { user } = useContext(userAuthContext)
    const Navigate = useNavigate();

    useEffect(() => {
      if(user) {
        Navigate("/homepage", {replace:true})
      }
    }, [user])
    
  const handleReset = async (email) => {
    const err = await sendPasswordReset(email)
    console.log("Handle Reset", email);
    if(err) {
        alert("Email not found")
    }
    else {
        Navigate("/", {replace:true})
    }
  };
  return (
    <div>
      <ForgotPasswordForm onReset={handleReset} />
    </div>
  );
};

export default ForgotPasswordPage;
