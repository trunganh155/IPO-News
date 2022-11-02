import React, { useState, useEffect } from "react";
import Image from "next/image";
import HomePage from "./Home/HomePage";
import HomeUser from "./Home/HomeUser";
import Cookies from "js-cookie";

export default function Home() {
	const [isLogin, setIsLogin] = useState(false);

	useEffect(() => {
		Cookies.get("token") && setIsLogin(true);
	}, []);
	return <>{isLogin ? <HomeUser /> : <HomePage />}</>;
}
