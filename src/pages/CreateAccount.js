import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { auth, registerWithEmailAndPassword } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { userAuthContext } from "../store/UserAuthContext";

import CreateAccountForm from "../components/login/CreateAccountForm";

const CreateAccountPage = () => {
    
  const { user } = useContext(userAuthContext);

  const Navigate = useNavigate();

  useEffect(() => {
    if (user) {
      Navigate("/homepage", { replace: true });
    }
  },[user]);
  
  
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
    const email = userData.email;
    const password = userData.password;
    const name = userData.name;
    const res = await registerWithEmailAndPassword(name, email, password)
  };

  return (
    <div>
      <CreateAccountForm onCreateAccount={handleCreateAccount} />
    </div>
  );
};

export default CreateAccountPage;
