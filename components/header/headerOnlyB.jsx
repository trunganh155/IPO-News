import Image from "next/image";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { Form } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { BiSearch } from "react-icons/bi";
import { IoCloseOutline } from "react-icons/io5";
import styles from "./headerOnly.module.scss";
function HeaderOnlyB(props) {
	const router = useRouter();
	const [isShowSearch, setIsShowSearch] = useState(true);
	return (
		<Navbar
			expand="lg"
			className={styles.header + "  " + "justify-content-between mx-auto"}
			fixed="top"
			style={{ backgroundColor: "black" }}
		>
			<Container fluid className={styles.wrapper + " " + "p-0"}>
				<div className="w-100">
					<div
						className={
							styles.header_top +
							" " +
							"row d-flex justify-content-end px-2 w-100"
						}
					>
						<div
							className={
								[styles.header_mid, styles.padding_b].join(
									" "
								) +
								" " +
								"px-2 d-flex justify-content-center align-items-center flex-md-row align-self-center"
							}
						>
							<div className="d-md-none d-flex col-6 col-md-5 col-xl-4 my-3 my-md-0 align-self-center">
								<div className={styles.search}>
									{isShowSearch ? (
										<button
											onClick={() => {
												setIsShowSearch(!isShowSearch);
											}}
										>
											<BiSearch
												size={35}
												color={"#B5B5B5"}
											/>
										</button>
									) : (
										<>
											<Form
												style={{
													padding: "0 17px 0 20px",
												}}
												className="d-flex justify-content-center align-items-center w-100"
											>
												<Form.Control
													type="search"
													placeholder="Tìm kiếm"
													className={
														styles.navSearch +
														" " +
														"w-90"
													}
													aria-label="Tìm kiếm"
												/>
												<div
													className="d-flex align-items-center"
													style={{
														cursor: "pointer",
													}}
													onClick={() => {
														setIsShowSearch(
															!isShowSearch
														);
													}}
												>
													<IoCloseOutline
														size={35}
														color={"#B5B5B5"}
													/>
												</div>
											</Form>
										</>
									)}
								</div>
							</div>
							<div
								className={
									styles.search +
									" " +
									"d-md-flex d-none col-7 col-md-5 col-xl-4 my-3 my-md-0 align-self-center"
								}
							>
								<Form
									style={{ padding: "0 17px 0 20px" }}
									className="d-flex justify-content-center align-items-center w-100"
								>
									<Form.Control
										type="search"
										placeholder="Tìm kiếm"
										className={
											styles.navSearch + " " + "w-90"
										}
										aria-label="Tìm kiếm"
									/>
									<BiSearch size={35} color={"#B5B5B5"} />
								</Form>
							</div>
							<div className={"col-1 col-md-2 col-xl-4"}></div>
							<div className="col-5 col-xl-4 d-flex justify-content-between" style={{cursor:"pointer"}}>
								<Image
									onClick={() => router.push("/")}
									src="/images/logo_white.png"
									alt="logo"
									width={319}
									height={64}
								/>
							</div>
						</div>
					</div>
				</div>
			</Container>
		</Navbar>
	);
}

export default HeaderOnlyB;
