import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { Form } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { BiSearch } from "react-icons/bi";
import { HeaderData } from "../../utils/DataDemo/Header";
import styles from "./header.module.scss";
function Header(props) {
	const [showMenu, setShowMenu] = useState(false);
	return (
		<Navbar
			expand="lg"
			className={styles.header + "  " + "justify-content-between mx-auto"}
			fixed="top"
		>
			<Container fluid className={styles.wrapper}>
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
							<button className={styles.btn_signin_up}>
								<span>Đăng nhập</span>
							</button>
							<button className={styles.btn_signin_up}>
								<span>Đăng kí tài khoản</span>
							</button>
						</div>
					</div>
					<div
						className={
							styles.header_mid + " " + "row px-2 my-2 my-md-5"
						}
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
							paddingBottom: showMenu ? "250px" : "0",
							transition: "all 0.5s",
							overflow: "hidden",
						}}
						className={
							styles.menu_list +
							" " +
							"d-flex justify-content-xl-center"
						}
					>
						{HeaderData.map((item, index) => {
							return (
								<Link key={index} href="/">
									<a
										className={[
											styles.link,
											styles.dropdown,
										].join(" ")}
										onMouseEnter={() => setShowMenu(true)}
										onClick={(e) => e.preventDefault()}
									>
										<span>
											{item.title}
											<i className="fa fa-chevron-down"></i>
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
															<Link href="/">
																<a>
																	{subItem}
																	{/* <i className="fa fa-chevron-right"></i> */}
																</a>
															</Link>
														</li>
													);
												}
											)}
										</ul>
									</a>
								</Link>
							);
						})}
					</div>
					{/* <div
						style={{
							borderBottom: "0.3px solid #000000",
							position: "absolute",
							bottom: showMenu ? "250px" : "0",
							left: "0",
							width: "100%",
						}}
					></div> */}
				</div>
			</Container>
		</Navbar>
	);
}

export default Header;
