import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import { Form } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { BiSearch } from "react-icons/bi";
import styles from "./headerOnly.module.scss";
function HeaderOnlyB(props) {
	const router = useRouter();
	return (
		<Navbar
			expand="lg"
			className={styles.header + "  " + "justify-content-between mx-auto"}
			fixed="top"
			style={{ backgroundColor: "black" }}
		>
			<Container fluid className={styles.wrapper}>
				<div className="w-100">
					<div
						className={
							styles.header_top +
							" " +
							"row d-flex justify-content-end px-2 my-3 w-100"
						}
					>
						<div
							className={
								styles.header_mid +
								" " +
								"px-2 my-2 my-md-5 d-flex justify-content-center flex-column-reverse align-items-center flex-md-row"
							}
						>
							<div
								className={
									styles.search +
									" " +
									"d-flex col-8 col-md-5 col-xl-4 my-3 my-md-0"
								}
							>
								<Form className="d-flex justify-content-center align-items-center w-100">
									<Form.Control
										type="search"
										placeholder="Tìm kiếm"
										className={
											styles.navSearch + " " + "w-90"
										}
										aria-label="Tìm kiếm"
									/>
									<BiSearch size={25} />
								</Form>
							</div>
							<div className={"col-md-2 col-xl-4"}></div>
							<div className="col-10 col-md-5 col-xl-4 d-flex justify-content-between">
								<div className={styles.text_logo}>
									<Image
										src="/images/Test/T_w.svg"
										alt="logo"
										width={65}
										height={70}
									></Image>
									<Image
										src="/images/Test/A_w.svg"
										alt="logo"
										width={65}
										height={70}
									></Image>
									<Image
										src="/images/Test/P_w.svg"
										alt="logo"
										width={65}
										height={70}
									></Image>
								</div>
								<div className={styles.text_logo}>
									<Image
										src="/images/Test/C_w.svg"
										alt="logo"
										width={65}
										height={70}
									></Image>
									<Image
										src="/images/Test/H_w.svg"
										alt="logo"
										width={65}
										height={70}
									></Image>
									<Image
										src="/images/Test/I_w.svg"
										alt="logo"
										width={65}
										height={70}
									></Image>
								</div>
								<div className={styles.text_logo}>
									<Image
										src="/images/Test/I_w.svg"
										alt="logo"
										width={65}
										height={70}
									></Image>
									<Image
										src="/images/Test/P_w.svg"
										alt="logo"
										width={65}
										height={70}
									></Image>
									<Image
										src="/images/Test/O_w.svg"
										alt="logo"
										width={65}
										height={70}
									></Image>
								</div>
							</div>
						</div>
					</div>
				</div>
			</Container>
		</Navbar>
	);
}

export default HeaderOnlyB;
