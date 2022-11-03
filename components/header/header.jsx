import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { Form } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { BiSearch } from "react-icons/bi";
import styles from "./header.module.scss";
import ListTag from "./listTag";
import {
	logoutUserAction,
	getDetailUserAction,
} from "../../store/redux/AccountReducer/account.action";
import Cookies from "js-cookie";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";
function Header(props) {
	const dispatch = useDispatch();
	const [isDate, setIsDate] = useState("");
	const [isTime, setIsTime] = useState("");
	const [isLoop, setIsLoop] = useState(1);
	const [isLogin, setIsLogin] = useState(false);
	const router = useRouter();
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

	// useEffect(() => {
	// 	if (detailUser) {
	// 		setIsLogin(true);
	// 	} else {
	// 		setIsLogin(false);
	// 	}
	// }, [detailUser]);

	const onLogout = async () => {
		try {
			const dataSignIn = await dispatch(logoutUserAction());
			if (dataSignIn) {
				Swal.fire({
					position: "center",
					icon: "success",
					title: "Đăng xuất thành công",
					showConfirmButton: false,
					timer: 1500,
				});
				router.push("/");
			} else {
				Swal.fire({
					position: "center",
					icon: "error",
					title: "Đăng xuất thất bại",
					showConfirmButton: false,
					timer: 1500,
				});
			}
		} catch (err) {
			console.log(err);
		}
	};

	useEffect(() => {
		const day = [
			"Thứ hai",
			"Thứ ba",
			"Thứ tư",
			"Thứ năm",
			"Thứ sáu",
			"Thứ bảy",
			"Chủ nhật",
		];
		var today = new Date();
		setIsDate(
			day[today.getDay()] +
				", ngày " +
				today.getDate() +
				"/" +
				(today.getMonth() + 1) +
				"/" +
				today.getFullYear()
		);
		if (today.getHours() < 12) {
			if (today.getMinutes() < 10) {
				setIsTime(
					today.getHours() + ":0" + today.getMinutes() + " " + "AM"
				);
			} else {
				setIsTime(
					today.getHours() + ":" + today.getMinutes() + " " + "AM"
				);
			}
		} else {
			if (today.getMinutes() < 10) {
				setIsTime(
					today.getHours() + ":0" + today.getMinutes() + " " + "PM"
				);
			} else {
				setIsTime(
					today.getHours() + ":" + today.getMinutes() + " " + "PM"
				);
			}
		}
		setTimeout(() => {
			setIsLoop(isLoop + 1);
		}, 1000);
	}, [isLoop]);
	const [showLogo, setShowLogo] = useState(true);
	window.addEventListener("scroll", callbackFunc);
	function callbackFunc() {
		var y = window.pageYOffset;
		if (y > 150) {
			setShowLogo(false);
		} else {
			setShowLogo(true);
		}
	}

	return (
		<Navbar
			expand="lg"
			className={styles.header + "  " + "justify-content-between mx-auto"}
			fixed="top"
		>
			<Container fluid className={styles.wrapper + " " + "p-0"}>
				<div className="w-100">
					<div
						className={
							styles.header_top + " " + "row px-2 mt-3 mb-1"
						}
					>
						<div
							className={
								styles.box_bottom +
								" " +
								"justify-content-start p-0 mt-0 col-10 col-md-4 col-xl-3 d-flex justify-content-md-start gap-3"
							}
						>
							{isLogin ? (
								<>
									<button
										onClick={() => {
											onLogout();
										}}
										className={styles.btn_signin_up}
									>
										<span style={{ fontSize: "18px" }}>
											Đăng xuất
										</span>
									</button>
									<button
										className={[
											styles.btn_signin_up,
											styles.active_button,
										].join(" ")}
									>
										<span style={{ fontSize: "18px" }}>
											Trang cá nhân
										</span>
									</button>
								</>
							) : (
								<>
									<Link href="/sign-in">
										<button
											className={[
												styles.btn_signin_up,
												styles.active_button,
											].join(" ")}
										>
											<span style={{ fontSize: "18px" }}>
												Đăng nhập
											</span>
										</button>
									</Link>
									<Link href="/sign-up">
										<button
											className={styles.btn_signin_up}
										>
											<span style={{ fontSize: "18px" }}>
												Đăng kí tài khoản
											</span>
										</button>
									</Link>
								</>
							)}
						</div>
						<div
							className={
								styles.box_center +
								" " +
								"justify-content-end col-2 col-md-4 col-xl-6 d-flex justify-content-md-center align-items-center"
							}
						>
							<div
								className={[styles.vie_eng, styles.active].join(
									" "
								)}
							>
								<span>Viet</span>
							</div>
							<span className="d-flex fs-5">/</span>
							<div className={styles.vie_eng}>
								<span>Eng</span>
							</div>
						</div>
						<div
							className={
								styles.search +
								" " +
								"col-10 col-sm-7 col-md-4 col-xl-3 d-flex justify-content-end mt-3 mt-md-0"
							}
						>
							<Form className="d-flex justify-content-center align-items-center w-100">
								<Form.Control
									type="search"
									placeholder="Tìm kiếm"
									className={styles.navSearch + " " + "w-90"}
									aria-label="Tìm kiếm"
								/>
								<BiSearch style={{ color: "gray" }} size={25} />
							</Form>
						</div>
					</div>
					<div
						className={
							styles.header_mid +
							" " +
							"row pb-1" +
							`${showLogo ? " " : " d-none"}`
						}
					>
						<div className="col-2 col-md-3"></div>
						<div className="col-8 col-md-6 d-flex justify-content-center">
							<Image
								src="/images/logo_black.png"
								alt="logo"
								width={422}
								height={85}
							/>
						</div>
						<div className="col-2 d-md-none"></div>
						<div
							className={
								styles.box_time +
								" " +
								"col-12 col-md-3 d-flex justify-content-center justify-content-md-end flex-md-column align-items-end mt-3 mt-md-0 mb-3 mb-md-0"
							}
						>
							<span className="text-right">{isDate}</span>
							<span className={styles.border_text}>{isTime}</span>
						</div>
					</div>
					<ListTag />
				</div>
			</Container>
		</Navbar>
	);
}

export default Header;
