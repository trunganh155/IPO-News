import Image from "next/image";
import React from "react";
import styles from "./IntroMagazine.module.scss";

function IntroMagazine() {
	return (
		<div className={styles.intro_magazine + " " + "container"}>
			<div className={styles.box_intro_magazine}>
				<div className={styles.title_box + " " + "row"}>
					<div className="col-4 d-flex justify-content-start">
						<Image
							src="/images/logo_white.png"
							alt="logo"
							width={400}
							height={80}
						/>
					</div>
					<div className={styles.box_border + " " + "col-8"}></div>
				</div>
				<div className={styles.content_box}>
					<div className={styles.center_box}>
						<div className={styles.title}>
							Xem trọn bộ tài liệu không giới hạn.
						</div>
						<div>
							<div className="row d-flex g-0">
								<div className="col-12 col-lg-5 p-0">
									<div className={styles.box_left}>
										<div
											className={
												"row" + " " + styles.ticket_type
											}
										>
											<div className="col-2 d-flex justify-content-center align-items-center">
												<input
													type="radio"
													style={{
														cursor: "pointer",
													}}
													class="form-check-input"
													id="radio1"
													name="optradio"
													value="option1"
												></input>
											</div>
											<div className="col">
												<span>free</span>
												<h5>Giới Hạn Quyền Lợi</h5>
											</div>
										</div>
										<hr
											style={{
												background: "while",
												margin: "35px 10px",
											}}
										/>
										<div
											className={
												"row" + " " + styles.ticket_type
											}
										>
											<div className="col-2 d-flex justify-content-center align-items-center">
												<input
													type="radio"
													style={{
														cursor: "pointer",
													}}
													class="form-check-input"
													id="radio2"
													name="optradio"
													value="option2"
												></input>
											</div>
											<div className="col">
												<span>Standar</span>
												<h5>200.000/Năm</h5>
											</div>
										</div>
										<hr
											style={{
												background: "while",
												margin: "35px 10px",
											}}
										/>
										<div
											className={
												"row" + " " + styles.ticket_type
											}
										>
											<div className="col-2 d-flex justify-content-center align-items-center">
												<input
													type="radio"
													style={{
														cursor: "pointer",
													}}
													class="form-check-input"
													id="radio3"
													name="optradio"
													value="option3"
												></input>
											</div>
											<div className="col">
												<span>Premium</span>
												<h5>350.000/Năm</h5>
											</div>
										</div>
										<hr
											style={{
												background: "while",
												margin: "35px 10px",
											}}
										/>
										<div
											className={
												"row" + " " + styles.ticket_type
											}
										>
											<div className="col-2 d-flex justify-content-center align-items-center">
												<input
													type="radio"
													style={{
														cursor: "pointer",
													}}
													class="form-check-input"
													id="radio4"
													name="optradio"
													value="option4"
												></input>
											</div>
											<div className="col">
												<span>VIP</span>
												<h5>500.000/Năm</h5>
											</div>
										</div>
									</div>
								</div>
								<div className={styles.box_right + " " + "col"}>
									<div className={styles.box_right_title}>
										<div className="d-flex">
											<h3>quyền lợi</h3>
											<div
												style={{
													borderBottom:
														"1px solid black",
													width: "calc(100% - 175px)",
												}}
											></div>
										</div>
									</div>
									<div className={styles.box_left_title}>
										<div className="row mb-3">
											<div className="col-2 d-flex justify-content-center align-items-center p-0">
												<Image
													src="/images/Icons/icon_tick.svg"
													alt="tick"
													width={30}
													height={30}
												/>
											</div>
											<span className="col mb-2">
												Senectus et netus et malesuada.
												Nunc pulvinar sapien et ligula
												ullamcorper malesuada proin.
											</span>
										</div>
										<div className="row mb-3">
											<div className="col-2 d-flex justify-content-center align-items-center p-0">
												<Image
													src="/images/Icons/icon_tick.svg"
													alt="tick"
													width={30}
													height={30}
												/>
											</div>
											<span className="col">
												Senectus et netus et malesuada.
												Nunc pulvinar sapien et ligula
												ullamcorper malesuada proin.
											</span>
										</div>
										<div className="row mb-3">
											<div className="col-2 d-flex justify-content-center align-items-center p-0">
												<Image
													src="/images/Icons/icon_tick.svg"
													alt="tick"
													width={30}
													height={30}
												/>
											</div>
											<span className="col">
												Senectus et netus et malesuada.
												Nunc pulvinar sapien et ligula
												ullamcorper malesuada proin.
											</span>
										</div>
										<div className="row mb-3">
											<div className="col-2 d-flex justify-content-center align-items-center p-0">
												<Image
													src="/images/Icons/icon_tick.svg"
													alt="tick"
													width={30}
													height={30}
												/>
											</div>
											<span className="col">
												Senectus et netus et malesuada.
												Nunc pulvinar sapien et ligula
												ullamcorper malesuada proin.
											</span>
										</div>
										<div className="row mb-3">
											<div className="col-2 d-flex justify-content-center align-items-center p-0">
												<Image
													src="/images/Icons/icon_close.svg"
													alt="tick"
													width={30}
													height={30}
												/>
											</div>
											<span className="col">
												Senectus et netus et malesuada.
												Nunc pulvinar sapien et ligula
												ullamcorper malesuada proin.
											</span>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="col-10 col-sm-5 p-0">
							<button>Đăng ký ngay</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default IntroMagazine;
