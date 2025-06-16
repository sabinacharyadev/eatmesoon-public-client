import { Routes, Route } from "react-router";
import HomePage from "./pages/HomePage";
import AuthPage from "./pages/AuthPage";
import LoginForm from "./components/LoginForm";
import SignupForm from "./components/SignupForm";

import { ToastContainer } from "react-toastify";
import VerifyUserPage from "./pages/VerifyUserPage";
import DashboardPage from "./pages/DashboardPage";

function App() {
  return (
    <>
      <Routes>
        <Route index element={<HomePage />}></Route>
        <Route element={<AuthPage />}>
          <Route path="login" element={<LoginForm />} />
          <Route path="register" element={<SignupForm />} />
        </Route>
        <Route path="verify_user" element={<VerifyUserPage />}></Route>
        <Route path="dashboard" element={<DashboardPage />}></Route>
      </Routes>
      <ToastContainer />
    </>
  );
}

export default App;
