import Image from "next/image";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Slider from "react-slick";
import { removeAccents } from "../../utils/Function";
import MainLayout from "../../components/layout/mainLayout";
import BannerRight from "../../public/images/home/banner_right.png";
import BannerTop from "../../public/images/home/banner_home_1_1.png";
import ArrowLeft from "../../public/images/icons/arrow_left.svg";
import ArrowRight from "../../public/images/icons/arrow_right.svg";
import { getExpert } from "../../store/redux/ExpertReducer/expert.action";
import { getGallery } from "../../store/redux/GalleryReducer/gallery.action";
import { getNews } from "../../store/redux/NewsReducer/news.action";
import styles from "./Home.module.scss";

function HomePage(props) {
	const router = useRouter();
	const dispatch = useDispatch();
	const expert = useSelector((state) => state.ExpertReducer.expert);
	const news = useSelector((state) => state.NewsReducer.news);
	const gallery = useSelector((state) => state.GalleryReducer.gallery);
	const SlickArrowLeft = ({ currentSlide, slideCount, ...props }) => (
		<div className={styles.arrow_left}>
			<Image
				src={ArrowLeft}
				alt="prevArrow"
				width={24}
				height={44}
				{...props}
			/>
		</div>
	);

	const SlickArrowRight = ({ currentSlide, slideCount, ...props }) => (
		<div className={styles.arrow_right}>
			<Image src={ArrowRight} alt="nextArrow" layout="fill" {...props} />
		</div>
	);
	useEffect(() => {
		dispatch(getExpert());
		dispatch(getNews());
		dispatch(getGallery());
	}, [dispatch]);
	var x = window.matchMedia("(max-width: 992px)");
	const [slideIndex, setSlideIndex] = useState(0);
	const settingsNew = {
		dots: false,
		infinite: true,
		speed: 500,
		slidesToShow: 5,
		slidesToScroll: 1,
		arrows: false,
		autoplay: true,
	};
	const settings = {
		dots: false,
		infinite: true,
		speed: 500,
		slidesToShow: x.matches ? 2 : 3,
		slidesToScroll: 1,
		arrows: true,
		autoplay: true,
		centerMode: true,
		centerPadding: "0px",
		pauseOnHover: false,
		prevArrow: (
			<button type="button" class="slick-prev" style={{ height: "42px" }}>
				<SlickArrowLeft />
			</button>
		),
		nextArrow: (
			<button style={{ height: "42px" }} type="button" class="slick-prev">
				<SlickArrowRight />
			</button>
		),

		beforeChange: (current, next) => setSlideIndex(next),
	};
	return (
		<MainLayout>
			<div className={styles.homepage}>
				<div
					className={
						styles.banner + " " + "d-flex justify-content-center"
					}
				>
					<Image
						src={BannerTop}
						alt="banner"
						height={452}
						width={1111}
					/>
				</div>
				<div className={styles.knowledge}>
					<div className="d-flex justify-content-between align-items-baseline">
						<div className="heading">
							<p className="text m-0">KIẾN THỨC IPO</p>
							<p
								className="col decor"
								style={{
									marginTop: "7px",
									borderBottom: "0.5px solid black",
								}}
							></p>
						</div>
					</div>
					<div className="row">
						<div
							// className="col-12 col-lg-7 p-1 p-md-4 ps-lg-5 mb-3 d-flex flex-column mb-lg-0 flex-lg-none"
							className={
								styles.box_image +
								" " +
								"col-12 col-lg-7 mb-3 d-flex flex-column mb-lg-0 flex-lg-none"
							}
						>
							<Image
								height={345}
								width={616}
								loader={({ src }) =>
									`https://api.fostech.vn${src}?access_token=${process.env.ACCESS_TOKEN}`
								}
								src={news[0]?.picture}
								alt={news[0]?.title}
							/>
							<div
								style={{
									marginTop: "12px",
								}}
							>
								<h3
									onClick={() =>
										router.push(
											`/${removeAccents(
												news[0]?._id || ""
											)}`
										)
									}
								>
									{news[0]?.title}
								</h3>
								<h5>{news[0]?.mieu_ta_ngan}</h5>
							</div>
						</div>

						<div
							className="col-12 col-lg-5 p-lg-4 p-2 pt-md-1"
							style={{ paddingLeft: "30px !important" }}
						>
							{news.slice(1, 5).map((item, index) => (
								<div key={index}>
									<h4
										className="mb-2"
										onClick={() =>
											router.push(
												`/${removeAccents(
													item?._id || ""
												)}`
											)
										}
									>
										{item.title}
									</h4>
									<h5>{item.mieu_ta_ngan}</h5>
									{index < 3 && (
										<hr
											className="my-3"
											style={{ height: "0.5px" }}
										/>
									)}
								</div>
							))}
						</div>
					</div>
					<hr style={{ height: "0.5px" }} />
					<Slider {...settingsNew} className={styles.box_slide}>
						{news.slice(1, 8).map((item, index) => (
							<div key={index}>
								<div
									style={{
										marginRight: "5px",
									}}
								>
									<Image
										loader={({ src }) =>
											`https://api.fostech.vn${src}?access_token=${process.env.ACCESS_TOKEN}`
										}
										src={item.picture}
										alt={item.title}
										height={265}
										width={357}
									/>
								</div>
								<h4 style={{ fontSize: "16px" }}>
									{item.title}
								</h4>
							</div>
						))}
					</Slider>
				</div>
				<div className={styles.news_ipo}>
					<div className="d-flex justify-content-between align-items-baseline">
						<div className="heading">
							<p className="text m-0">TIN TỨC IPO</p>
							<p
								className="col decor"
								style={{
									borderBottom: "0.5px solid black",
								}}
							></p>
						</div>
					</div>
					<div className="row" style={{ marginTop: "20px" }}>
						<div className={"col-lg-9 col-12 pe-0"}>
							<div className={styles.box_image_news}>
								<div className={styles.box_image}>
									<Image
										width={855}
										height={470}
										loader={({ src }) =>
											`https://api.fostech.vn${src}?access_token=${process.env.ACCESS_TOKEN}`
										}
										src={news[0]?.picture}
										alt={news[0]?.cate_name}
									/>
								</div>
								<div className={styles.bg}></div>
								<div className={styles.content}>
									<span
										onClick={() =>
											router.push(
												`/${removeAccents(
													news[0]?._id || ""
												)}`
											)
										}
									>
										{news[0]?.title}
									</span>
									<h5 className="d-none d-md-block">
										{news[0]?.mieu_ta_ngan}
									</h5>
								</div>
							</div>
						</div>
						<div
							className={
								styles.box_image +
								" " +
								"col-3 d-lg-flex d-none align-items-center"
							}
						>
							<div
								style={{
									background: "black",
									height: "100%",
									width: "0.5px",
									marginRight: "11px",
								}}
							></div>
							<Image
								width={244}
								height={470}
								src={BannerRight}
								alt="banner"
							/>
						</div>
					</div>
					<hr
						style={{
							width: "calc(100% - 5px)",
							margin: "25px 0px 25px 0px",
							height: "0.5px",
						}}
					/>
					<div className="row d-flex justify-content-center">
						<div className="col-12 col-lg-9">
							{news.length > 0 &&
								news.slice(0, 6).map((item, index) => (
									<div key={index} className="row">
										<div className="col-12 col-lg-6">
											<div
												className={
													styles.box_content_news +
													" " +
													"text-align-center"
												}
											>
												<h4
													style={{ fontSize: "20px" }}
													className="mb-2"
													onClick={() =>
														router.push(
															`/${removeAccents(
																item?._id || ""
															)}`
														)
													}
												>
													{item.title}
												</h4>
												<h5
													className={
														"d-none d-lg-block"
													}
												>
													{item.mieu_ta_ngan}
												</h5>
											</div>
										</div>
										<div className="col-12 col-lg-6 d-flex flex-md-row flex-column align-items-center mb-3 mb-lg-0 flex-lg-none justify-content-end p-0">
											<div
												className={
													"row px-lg-0 d-lg-flex px-2"
												}
											>
												<div
													className={
														"col-6 col-lg-12"
													}
												>
													<Image
														width={418}
														height={229}
														loader={({ src }) =>
															`https://api.fostech.vn${src}?access_token=${process.env.ACCESS_TOKEN}`
														}
														src={item.picture}
														alt={item.cate_name}
													/>
												</div>
												<h5
													className={
														"col-6 d-lg-none"
													}
												>
													{item.mieu_ta_ngan}
												</h5>
											</div>
										</div>
										{index < 5 && (
											<hr
												style={{
													width: "calc(100% - 35px)",
													margin: "18px 0px 18px 10px",
													height: "0.5px",
												}}
											/>
										)}
									</div>
								))}
						</div>
						<div
							className={
								styles.box_banner_right +
								" " +
								"col-3 d-none d-lg-block"
							}
						>
							<div
								className={styles.box_image_right}
								style={{ marginBottom: "35px" }}
							>
								<Image
									width={244}
									height={759}
									src={BannerRight}
									alt="banner"
								/>
							</div>
							<div className={styles.box_image_right} style={{}}>
								<Image
									width={244}
									height={759}
									src={BannerRight}
									alt="banner"
								/>
							</div>
						</div>
					</div>
				</div>
				<div className={styles.library}>
					<div className="d-flex justify-content-between mb-3 align-items-baseline">
						<div className="heading">
							<p className="text m-0">THƯ VIỆN</p>
							<p
								className="col decor"
								style={{
									marginTop: "7px",
									borderBottom: "0.5px solid black",
								}}
							></p>
						</div>
					</div>
					<div className="row justify-content-center justify-content-lg-space-around">
						{news.length > 0 &&
							news.slice(0, 3).map((item, index) => (
								<div
									key={index}
									className="col-12 col-md-8 col-lg-4 d-flex flex-column align-items-center"
									style={{ padding: "0 7px" }}
								>
									<div
										className={
											styles.box_tag +
											" " +
											"d-flex flex-column align-items-center"
										}
									>
										{index === 0 && (
											<span
												onClick={() =>
													router.push(
														"/library/case-study"
													)
												}
											>
												CASE STUDY DOANH NGHIỆP
											</span>
										)}
										{index === 1 && (
											<span
												onClick={() =>
													router.push(
														"/library/case-study"
													)
												}
											>
												CASE STUDY AURA CAPITAL
											</span>
										)}
										{index === 2 && (
											<span
												onClick={() =>
													router.push(
														"/library/case-study"
													)
												}
											>
												TÀI LIỆU IPO
											</span>
										)}
										<div
											style={{
												borderBottom: "1px solid black",
												width: "55%",
											}}
										></div>
									</div>
									<div
										className={
											styles.item_libary +
											" " +
											"d-flex flex-column text-align-left mb-3 mb-lg-0 flex-lg-none gap-2"
										}
									>
										<div
											className={
												styles.box_image +
												" " +
												"d-flex justify-content-center"
											}
										>
											<Image
												height={191}
												width={340}
												loader={({ src }) =>
													`https://api.fostech.vn${src}?access_token=${process.env.ACCESS_TOKEN}`
												}
												src={item.picture}
												alt={item.cate_name}
											/>
										</div>
										<h6>#AuraCaseStudy 36:</h6>
										<h3
											onClick={() =>
												router.push(
													`/${removeAccents(
														item?._id || ""
													)}`
												)
											}
										>
											{item.cate_name}
										</h3>
										<h5>{item.mieu_ta_ngan}</h5>
									</div>
								</div>
							))}
					</div>
					<div className="d-flex justify-content-center">
						<button onClick={() => router.push("/intro-magazine")}>
							ĐĂNG KÍ GÓI THÀNH VIÊN
						</button>
					</div>
				</div>
				<div className={styles.experts}>
					<div
						className="d-flex justify-content-between align-items-baseline"
						style={{ marginBottom: "16px" }}
					>
						<div className="heading">
							<p className="text m-0">CHUYÊN GIA IPO</p>
							<p
								className="col decor"
								style={{
									marginTop: "7px",
									borderBottom: "0.5px solid black",
								}}
							></p>
						</div>
					</div>
					<div className="row justify-content-center justify-content-lg-space-around">
						<div className={styles.list_expert}>
							{expert.slice(0, 3).map((item, index) => (
								<div key={index} className={styles.item_expert}>
									<div
										className="d-flex justify-content-center"
										style={{ marginBottom: "22px" }}
									>
										<Image
											loader={({ src }) =>
												`https://api.fostech.vn${src}?access_token=${process.env.ACCESS_TOKEN}`
											}
											src={item.image}
											height={386}
											width={367}
											alt={item.name}
										/>
									</div>
									<h5>{item.name}</h5>
									<h6>{item.position}</h6>
								</div>
							))}
						</div>
					</div>
				</div>
				<div className={styles.library_ipo}>
					<div className="d-flex justify-content-between mb-4 align-items-baseline">
						<div className="heading">
							<p className="text m-0">THƯ VIỆN IPO</p>
							<p
								className="col decor"
								style={{
									marginTop: "7px",
									borderBottom: "0.5px solid black",
								}}
							></p>
						</div>
					</div>
					<div className={styles.box_content + " " + "row"}>
						<div
							className={
								styles.box_video +
								" " +
								"col-12 mb-3 mb-lg-0 col-lg-8 pe-md-2"
							}
						>
							<div
								className="h-100"
								style={{ background: "gray" }}
							>
								{/* <iframe
									width="100%"
									height="100%"
									src={gallery[0]?.url}
								></iframe> */}
								<video
									width="100%"
									height="100%"
									controls
									poster="https://api.fostech.vn/api/60939744ac969b4078488026/file/download/634f699804d76f369bb2ad4f?access_token=f2ff5f0947d68f32d344142f38a2094b"
								>
									<source
										src="https://api.fostech.vn/getfile/anytype/6281eb1d900bb51266dee8a9_1666147327971_f1.mp4?access_token=08e7053b9472cd9a981907f915742c79"
										type="video/mp4"
									/>
									<source src="movie.ogg" type="video/ogg" />
								</video>
							</div>
						</div>
						<div
							className={
								styles.box_content_media +
								" " +
								"col-12 col-lg-4 p-0"
							}
							style={{ overflowY: "auto", overflowX: "hidden" }}
						>
							<div className={styles.box_media}>
								<div className={styles.list_library}>
									{gallery.slice(1, 8).map((item, index) => (
										<div key={index}>
											<div
												className={
													styles.item_library +
													" " +
													"row"
												}
											>
												<div
													className={
														styles.video +
														" " +
														"p-0 col-6"
													}
												>
													<div>
														{/* <iframe
															className="w-100 h-100 w-lg-100 h-lg-80"
															src={item.url}
														></iframe> */}
														<video
															width="100%"
															height="100%"
															controls
															poster="https://api.fostech.vn/api/60939744ac969b4078488026/file/download/634f699804d76f369bb2ad4f?access_token=f2ff5f0947d68f32d344142f38a2094b"
														>
															<source
																src="https://api.fostech.vn/getfile/anytype/6281eb1d900bb51266dee8a9_1666147327971_f1.mp4?access_token=08e7053b9472cd9a981907f915742c79"
																type="video/mp4"
															/>
															<source
																src="movie.ogg"
																type="video/ogg"
															/>
														</video>
													</div>
												</div>
												<div
													className={
														styles.title +
														" " +
														"col-6"
													}
												>
													<h6
														style={{
															fontSize: "18px",
															cursor: "pointer",
														}}
														onClick={() =>
															router.push(
																`/${removeAccents(
																	item._id ||
																		""
																)}`
															)
														}
													>
														{item.title}
													</h6>
												</div>
											</div>
										</div>
									))}
								</div>
							</div>
						</div>
					</div>
				</div>
				<hr style={{ height: "0.5px" }} />
				{/* <div className={styles.slide_bottom}>
					<div className={styles.slider}>
						<Slider {...settings} styles={{ width: "1440px" }}>
							{news.slice(0, 5).map((item, index) => (
								<div
									key={index}
									className={
										styles.box_image_content +
										" " +
										(slideIndex === index
											? styles.active + styles.slide
											: styles.slide)
									}
								>
									<div
										className={
											styles.images +
											" " +
											"d-flex justify-content-center"
										}
									>
										<Image
											loader={({ src }) =>
												`https://api.fostech.vn${src}?access_token=${process.env.ACCESS_TOKEN}`
											}
											src={item.picture}
											width={542}
											height={309}
											alt="banner"
										/>
									</div>
									<div className={styles.content}>
										<div>
											<h3>{item.cate_name}</h3>
										</div>
										<h5 className="my-2">{item.title}</h5>
										<button
											onClick={() =>
												router.push(
													`/${removeAccents(
														item?._id || ""
													)}`
												)
											}
										>
											Xem thêm
										</button>
									</div>
									<div className={styles.box_bg}></div>
								</div>
							))}
						</Slider>
					</div>
					<div className="row justify-content-center">
						<div className="col-10 col-lg-4 text-center mb-5 pt-0 ">
							<h3>{news[0]?.cate_name}</h3>
							<h5>{news[0]?.mieu_ta_ngan}</h5>
						</div>
					</div>
				</div> */}
				<section>
					<div className="col-12 my-3 px-2">
						<div className={styles.slide_bottom}>
							<Slider {...settings}>
								{news.slice(1, 8).map((item, index) => (
									<div key={index}>
										<div
											className={
												slideIndex === index
													? styles.active
													: styles.slide
											}
											style={{
												display: "flex",
												justifyContent: "center",
											}}
										>
											<Image
												loader={({ src }) =>
													`https://api.fostech.vn${src}?access_token=${process.env.ACCESS_TOKEN}`
												}
												src={item.picture}
												width={432}
												height={246}
												alt="banner"
												className="rounded_20"
											/>
										</div>

										<div
											className={styles.content_active}
											style={{
												visibility:
													slideIndex === index
														? "visible"
														: "hidden",
											}}
										>
											<p
												onClick={() =>
													router.push(
														`/${removeAccents(
															item?._id || ""
														)}`
													)
												}
												className={
													styles.homepage_title_slider
												}
											>
												{item.title}
											</p>
											<p
												className={
													styles.homepage_content_slider
												}
											>
												{item.mieu_ta_ngan}
											</p>
										</div>
									</div>
								))}
							</Slider>
						</div>
					</div>
				</section>
			</div>
		</MainLayout>
	);
}

export default HomePage;
