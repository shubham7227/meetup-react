import { BrowserRouter, Routes, Route } from "react-router-dom";
import AllMeetupsPage from "./pages/AllMeetups";
import NewMeetupPage from "./pages/NewMeetup";
import FavouritePage from "./pages/Favourite";
import ForgotPasswordPage from "./pages/ForgotPassword";
import Layout from "./components/layout/Layout";
import LoginPage from "./pages/Login";
import CreateAccountPage from "./pages/CreateAccount";
import { FavouriteContextProvider } from "./store/favourite-context";
import UserAuthContextProvider from "./store/UserAuthContext"
function App() {
  return (
    <UserAuthContextProvider>
    <FavouriteContextProvider>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <LoginPage />
              </>
            }
          />
          <Route
            path="/forgot-password"
            element={
              <>
                <ForgotPasswordPage />
              </>
            }
          />
          <Route
            path="/homepage"
            element={
              <>
                <Layout>
                  <AllMeetupsPage />
                </Layout>
              </>
            }
          />
          <Route
            path="/new-meetup"
            element={
              <>
                <Layout>
                  <NewMeetupPage />
                </Layout>
              </>
            }
          />
          <Route
            path="/favourites"
            element={
              <>
                <Layout>
                  <FavouritePage />
                </Layout>
              </>
            }
          />
          <Route
            path="/create-account"
            element={
              <>
                <CreateAccountPage />
              </>
            }
          />
        </Routes>
      </BrowserRouter>
    </FavouriteContextProvider>
    </UserAuthContextProvider>
  );
}

export default App;
