import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { Form } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { BiSearch } from "react-icons/bi";
import styles from "./header.module.scss";
import ListTag from "./listTag";
function Header(props) {
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
					<div className={styles.header_top + " " + "row px-2 my-3"}>
						<div
							className={
								styles.box_bottom +
								" " +
								"justify-content-start p-0 mt-0 col-10 col-md-5 col-xl-3 d-flex justify-content-md-start gap-3"
							}
						>
							<Link href="/sign-in">
								<button
									className={
										(styles.btn_signin_up,
										styles.active_button)
									}
								>
									<span>Đăng nhập</span>
								</button>
							</Link>
							<Link href="/sign-up">
								<button className={styles.btn_signin_up}>
									<span>Đăng kí tài khoản</span>
								</button>
							</Link>
						</div>
						<div
							className={
								styles.box_center +
								" " +
								"justify-content-end col-2 col-md-2 col-xl-6 d-flex justify-content-md-center align-items-center"
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
								styles.search +
								" " +
								"col-10 col-sm-7 col-md-5 col-xl-3 d-flex justify-content-end mt-3 mt-md-0"
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
							"row px-2 my-2 my-md-5" +
							`${showLogo ? " " : " d-none"}`
						}
					>
						<div className="col-2 col-md-3"></div>
						<div className="col-8 col-md-6 d-flex justify-content-center">
							<Image
								src="/images/logo_black.png"
								alt="logo"
								width={556}
								height={111}
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
							<span className="text-right">
								Thứ năm, ngày 18/08/2022
							</span>
							<span className={styles.border_text}>14:30 PM</span>
						</div>
					</div>
					<ListTag />
				</div>
			</Container>
		</Navbar>
	);
}

export default Header;
