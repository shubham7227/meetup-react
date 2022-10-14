import { useContext, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import CreateAccountForm from "../components/login/CreateAccountForm";
// import AuthContext from "../context/auth/auth-context";

import { Signup } from "../redux/action/userAction";

const CreateAccountPage = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.userReducer.authData);

  // const { user, Signup } = useContext(AuthContext);

  const Navigate = useNavigate();

  useEffect(() => {
    if (user) {
      Navigate("/homepage", { replace: true });
    }
  }, [user]);

  //PRev working
  // const Navigate = useNavigate();
  // const [user, loading, error] = useAuthState(auth);

  // useEffect(() => {
  //   if (loading) {
  //     return;
  //   }
  //   if (user) {
  //     Navigate("/homepage", { replace: true });
  //   }
  // }, [user, loading]);

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
