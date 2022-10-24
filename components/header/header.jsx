import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { Form } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { BiSearch } from "react-icons/bi";
import { HeaderData } from "../../utils/DataDemo/Header";
import IconHome from "../../public/images/icons/icon_home.svg";
import styles from "./header.module.scss";
import { useRouter } from "next/router";
function Header(props) {
	const router = useRouter();
	const { asPath } = useRouter();
	const [showMenu, setShowMenu] = useState(false);
	const [showLogo, setShowLogo] = useState(true);
	const [isHeightHeader, setIsHeightHeader] = useState(0);
	const [isAsPath, setIsAsPath] = useState("/");
	window.addEventListener("scroll", callbackFunc);
	function callbackFunc() {
		var y = window.pageYOffset;
		if (y > 150) {
			setShowLogo(false);
		} else {
			setShowLogo(true);
		}
	}
	useEffect(() => {
		if (asPath === "/") {
			setIsAsPath("/");
		} else {
			setIsAsPath(asPath.replace(/[^\w\s]/gi, ""));
		}
	}, [asPath]);

	const checkActive = (link) => {
		if (link.length === 1) {
			return link || "";
		} else {
			return link.replace(/[^\w\s]/gi, "");
		}
	};
	return (
		<Navbar
			expand="lg"
			className={styles.header + "  " + "justify-content-between mx-auto"}
			fixed="top"
		>
			<Container fluid className={styles.wrapper + " " + "p-0"}>
				<div className="w-100">
					<div className={styles.header_top + " " + "row px-2 my-3"}>
						<div
							className={
								styles.search +
								" " +
								"col-7 col-sm-5 col-md-4 col-xl-3 d-flex justify-content-start"
							}
						>
							<Form className="d-flex justify-content-center align-items-center w-100">
								<Form.Control
									type="search"
									placeholder="Tìm kiếm"
									className={styles.navSearch + " " + "w-90"}
									aria-label="Tìm kiếm"
								/>
								<BiSearch size={25} />
							</Form>
						</div>
						<div className="col-1 col-sm-2 col-md-1 d-xl-none"></div>
						<div
							className={
								styles.box_center +
								" " +
								"col-4 col-sm-5 justify-content-end col-md-2 col-xl-6 d-flex justify-content-md-center align-items-center"
							}
						>
							<div className={styles.vie_eng + styles.active}>
								<span>Viet</span>
							</div>
							<span className="d-flex fs-5">/</span>
							<div className={styles.vie_eng}>
								<span>Eng</span>
							</div>
						</div>
						<div
							className={
								styles.box_bottom +
								" " +
								"justify-content-start p-0 mt-2 mt-md-0 col-md-5 col-xl-3 d-flex justify-content-md-end"
							}
						>
							<Link href="/sign-in">
								<button className={styles.btn_signin_up}>
									<span>Đăng nhập</span>
								</button>
							</Link>
							<Link href="/sign-up">
								<button className={styles.btn_signin_up}>
									<span>Đăng kí tài khoản</span>
								</button>
							</Link>
						</div>
					</div>
					<div
						className={
							styles.header_mid +
							" " +
							"row px-2 my-2 my-md-5" +
							`${showLogo ? " " : " d-none"}`
						}
						// style={{
						// 	transition: "all 0.5s ease",
						// }}
					>
						<div className="col-3"></div>
						<div className="col-6 d-flex justify-content-between">
							<div className={styles.text_logo}>
								<Image
									src="/images/Test/T.svg"
									alt="logo"
									width={65}
									height={70}
								></Image>
								<Image
									src="/images/Test/A.svg"
									alt="logo"
									width={65}
									height={70}
								></Image>
								<Image
									src="/images/Test/P.svg"
									alt="logo"
									width={65}
									height={70}
								></Image>
							</div>
							<div className={styles.text_logo}>
								<Image
									src="/images/Test/C.svg"
									alt="logo"
									width={65}
									height={70}
								></Image>
								<Image
									src="/images/Test/H.svg"
									alt="logo"
									width={65}
									height={70}
								></Image>
								<Image
									src="/images/Test/I.svg"
									alt="logo"
									width={65}
									height={70}
								></Image>
							</div>
							<div className={styles.text_logo}>
								<Image
									src="/images/Test/I.svg"
									alt="logo"
									width={65}
									height={70}
								></Image>
								<Image
									src="/images/Test/P.svg"
									alt="logo"
									width={65}
									height={70}
								></Image>
								<Image
									src="/images/Test/O.svg"
									alt="logo"
									width={65}
									height={70}
								></Image>
							</div>
						</div>
						<div className="col-3 d-lg-none"></div>
						<div
							className={
								styles.box_time +
								" " +
								"col-12 col-lg-3 d-flex justify-content-end flex-md-column align-items-end mt-3 mt-lg-0"
							}
						>
							<span>Thứ năm, ngày 18/08/2022</span>
							<span className={styles.border_text}>14:30 PM</span>
						</div>
					</div>
					<div
						onMouseLeave={() => setShowMenu(false)}
						style={{
							paddingBottom: showMenu
								? `${isHeightHeader}px`
								: "15px",
							transition: "all 0.5s",
							// overflow: "hidden",
						}}
						className={
							styles.menu_list +
							" " +
							"d-flex justify-content-xl-center"
						}
					>
						{HeaderData.map((item, index) => {
							return (
								<Link key={index} href={"/"}>
									<div
										className={[
											styles.link,
											styles.dropdown,
										].join(" ")}
										onMouseEnter={() => {
											setShowMenu(true);
											setIsHeightHeader(
												item.listTag.length * 50
											);
										}}
										onClick={(e) => e.preventDefault()}
									>
										<span
											className={
												isAsPath.includes(
													checkActive(item.link)
												)
													? styles.active +
													  " " +
													  "d-flex"
													: "d-flex"
											}
											onClick={() =>
												router.push(item.link)
											}
										>
											{item.title === "TRANG CHỦ" && (
												<div
													className="mr-2"
													style={{ width: "15px" }}
												>
													<Image
														src={IconHome}
														alt="icon"
														width={15}
														height={15}
													/>
												</div>
											)}
											{item.title}
											<i className="fa fa-chevron-down d-flex align-items-center"></i>
										</span>
										<ul className={styles.dropdown_menu}>
											{item.listTag.map(
												(subItem, subIndex) => {
													return (
														<li
															key={subIndex}
															className={
																styles.dropdown_item_1
															}
														>
															<div
																onClick={() =>
																	router.push(
																		subItem.link
																	)
																}
															>
																{subItem.tag}
															</div>
														</li>
													);
												}
											)}
										</ul>
									</div>
								</Link>
							);
						})}
					</div>
					<div
						style={{
							borderBottom: !showMenu ? "1px solid gray" : "none",
							position: "absolute",
							left: "3%",
							width: "94%",
							bottom: "3%",
						}}
					></div>
				</div>
			</Container>
		</Navbar>
	);
}

export default Header;
