import Cookies from "js-cookie";
import { useSession } from "next-auth/react";
import React, { useEffect, useState } from "react";
import MainLayout from "../../components/layout/mainLayout";
import Sub from "./Sub";
import SubPartner from "./SubPartner";

function Index(props) {
  const { data: session } = useSession();
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

  return (
    <MainLayout>{isLogin || session ? <SubPartner /> : <Sub />}</MainLayout>
  );
}

export default Index;
