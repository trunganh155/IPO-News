import React, { useEffect, useState } from "react";
import MainLayout from "../../components/layout/mainLayout";
import Sub from "./Sub";
import SubPartner from "./SubPartner";
import Cookies from "js-cookie";

function Index(props) {
  const [isLogin, setIsLogin] = useState(false);
  const token = Cookies.get("access_token");

  const checkLogin = () => {
    if (token) {
      setIsLogin(true);
    } else {
      setIsLogin(false);
    }
  };

  useEffect(() => {
    checkLogin();
  }, []);

  return <MainLayout>{isLogin ? <SubPartner /> : <Sub />}</MainLayout>;
}

export default Index;
