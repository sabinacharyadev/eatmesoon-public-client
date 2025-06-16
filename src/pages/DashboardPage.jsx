import { useEffect } from "react";
import { getUserAxios } from "../axios/userAxios";
import { useState } from "react";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";

const DashboardPage = () => {
  const navigate = useNavigate();
  const [userDetails, setUserDetails] = useState({});

  const getUserDetail = async () => {
    const userDetails = await getUserAxios();
    if (userDetails.status === "success") {
      setUserDetails(userDetails.data);
    } else {
      toast(userDetails.message);
      navigate("/login");
    }
  };
  useEffect(() => {
    getUserDetail();
  }, []);

  return <>This is Dashboard for {userDetails.name}</>;
};

export default DashboardPage;
