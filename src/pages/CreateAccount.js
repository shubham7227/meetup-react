import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import CreateAccountForm from "../components/login/CreateAccountForm";

import { Signup } from "../redux/action/userAction";

const CreateAccountPage = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.userReducer.authData);

  const Navigate = useNavigate();

  useEffect(() => {
    if (user) {
      Navigate("/homepage", { replace: true });
    }
  }, [user]);

  const handleCreateAccount = async (userData) => {
    const res = await Signup(userData, Navigate);
    console.log(res);
  };

  return (
    <div>
      <CreateAccountForm onCreateAccount={handleCreateAccount} />
    </div>
  );
};

export default CreateAccountPage;
