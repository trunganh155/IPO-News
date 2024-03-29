import React, { useState, useEffect } from "react";
import Image from "next/image";
import HomePage from "./Home/HomePage";
import HomeUser from "./Home/HomeUser";
import Cookies from "js-cookie";
import { getDetailUserAction } from "../store/redux/AccountReducer/account.action";
import { useDispatch, useSelector } from "react-redux";
import { useSession, signIn, signOut } from "next-auth/react";

export default function Home() {
  const { data: session } = useSession();
  const dispatch = useDispatch();
  const [isLogin, setIsLogin] = useState(false);
  const { detailUser } = useSelector((state) => state.AccountReducer);

  useEffect(() => {
    dispatch(getDetailUserAction());
  }, [dispatch]);

  useEffect(() => {
    const cookie = Cookies.get("access_token");
    if (cookie) {
      setIsLogin(true);
    } else {
      setIsLogin(false);
    }
  }, [detailUser]);

  return <>{isLogin || session ? <HomeUser /> : <HomePage />}</>;
}
