import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import { Form } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { BiSearch } from "react-icons/bi";
import styles from "./headerOnly.module.scss";
function HeaderOnlyW(props) {
	const router = useRouter();
	return (
		<Navbar
			expand="lg"
			className={styles.header + "  " + "justify-content-between mx-auto"}
			fixed="top"
			style={{ backgroundColor: "#F4ECDB" }}
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
								styles.header_mid +
								" " +
								"row px-2 d-flex justify-content-center align-items-end"
							}
						>
							<div className="col-10 col-md-5 col-xl-4 d-flex justify-content-between align-self-center">
								<Image
									src="/images/logo_black.png"
									alt="logo"
									width={460}
									height={92}
								/>
							</div>
							<div className={"col-md-2 col-xl-4"}></div>
							<div
								className={
									styles.search +
									" " +
									"d-flex col-8 col-md-5 col-xl-4 my-3 my-md-2 align-self-center"
								}
							>
								<Form
									style={{ padding: "0 17px 0 79px" }}
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
						</div>
					</div>
				</div>
			</Container>
		</Navbar>
	);
}

export default HeaderOnlyW;
