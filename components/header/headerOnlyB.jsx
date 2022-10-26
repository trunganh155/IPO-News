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
								"px-2 my-2 my-md-5 d-flex justify-content-center flex-column-reverse align-items-center flex-md-row"
							}
						>
							<div
								className={
									styles.search +
									" " +
									"d-flex col-8 col-md-5 col-xl-4 my-3 my-md-0"
								}
                style={{maxHeight: "50px"}}
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
								<Image
									src="/images/logo_black.png"
									alt="logo"
									width={556}
									height={111}
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
