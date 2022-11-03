import React, { useState, useEffect } from "react";
import Image from "next/image";
import HomePage from "./Home/HomePage";
import HomeUser from "./Home/HomeUser";
import Cookies from "js-cookie";
import { getDetailUserAction } from "../store/redux/AccountReducer/account.action";
import { useDispatch, useSelector } from "react-redux";

export default function Home() {
	const dispatch = useDispatch();
	const [isLogin, setIsLogin] = useState(false);
	const { detailUser } = useSelector((state) => state.AccountReducer);

	console.log(detailUser);

	useEffect(() => {
		dispatch(getDetailUserAction());
	}, [dispatch]);

	useEffect(() => {
		detailUser.length === 0 ? setIsLogin(false) : setIsLogin(true);
	}, [detailUser]);

	return <>{isLogin ? <HomeUser /> : <HomePage />}</>;
}
