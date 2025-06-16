import { useEffect } from "react";
import { useSearchParams, useNavigate } from "react-router";
import { toast } from "react-toastify";
import { verifyUserAxios } from "../axios/userAxios";

const VerifyUserPage = () => {
  const navigate = useNavigate();
  // Extract user email and token from url
  const [params] = useSearchParams();

  const userEmail = params.get("email");
  const token = params.get("token");

  const verifyUser = async () => {
    const result = await verifyUserAxios({ email: userEmail, token: token });
    if (result.status === "success") {
      toast(result.message);
      navigate("/login");
    } else {
      toast(result.message);
      navigate("/register");
    }
  };

  //   verify user
  useEffect(() => {
    if (userEmail && token) {
      verifyUser();
    }
  }, []);

  return <>Verifying . . .</>;
};

export default VerifyUserPage;
