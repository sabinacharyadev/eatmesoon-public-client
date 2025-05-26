import { Routes, Route } from "react-router";
import HomePage from "./pages/HomePage";
import AuthPage from "./pages/AuthPage";
import LoginForm from "./components/LoginForm";
import SignupForm from "./components/SignupForm";

function App() {
  return (
    <>
      <Routes>
        <Route index element={<HomePage />}></Route>
        <Route element={<AuthPage />}>
          <Route path="login" element={<LoginForm />} />
          <Route path="register" element={<SignupForm />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
