import Image from "next/image";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Slider from "react-slick";
import { removeAccents } from "../../utils/Function";
import MainLayout from "../../components/layout/mainLayout";
import BannerRight from "../../public/images/home/banner_right.png";
import BannerTop from "../../public/images/home/banner_home_1.png";
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

	var x = window.matchMedia("(max-width: 980px)");
	const [slideIndex, setSlideIndex] = useState(0);
	const settings = {
		dots: false,
		infinite: true,
		speed: 500,
		slidesToShow: x.matches ? 2 : 3,
		slidesToScroll: 1,
		arrows: true,
		autoplay: false,
		centerMode: true,
		centerPadding: "0px",
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
					className={styles.banner}
					data-aos="fade-down"
					data-aos-duration="2000"
				>
					<Image
						src={BannerTop}
						alt="banner"
						height={523}
						width={1920}
					/>
				</div>
				<div className={styles.knowledge}>
					<div className="d-flex justify-content-between align-items-baseline">
						<div className="heading" data-aos-duration="2000" data-aos="fade-left">
							<p className="text m-0">KIẾN THỨC IPO</p>
							<p className="col decor"></p>
						</div>
					</div>
					<div className="row">
						<div
							className="col-12 col-lg-7 p-1 p-md-4 mb-3 d-flex flex-column mb-lg-0 flex-lg-none"
							style={{
								borderRight: "0.5px solid #000000",
							}}
							data-aos="fade-right" data-aos-duration="2000"
						>
							<Image
								height={321}
								width={717}
								loader={({ src }) =>
									`https://api.fostech.vn${src}?access_token=${process.env.ACCESS_TOKEN}`
								}
								src={news[0]?.picture}
								alt={news[0]?.title}
							/>
							<span
								onClick={() =>
									router.push(
										`/${removeAccents(news[0]?._id || "")}`
									)
								}
							>
								{news[0]?.title}
							</span>
							<h5>{news[0]?.mieu_ta_ngan}</h5>
						</div>

						<div className="col-12 col-lg-5 p-md-4 p-1">
							{news.slice(1, 5).map((item, index) => (
								<div key={index} data-aos="fade-up" data-aos-duration="2000">
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
									{index < 3 && <hr className="my-3" />}
								</div>
							))}
						</div>
					</div>
					<hr />
					<div
						className="d-flex justify-content-between"
						style={{ overflowY: "auto" }}
						data-aos="fade-up"
						data-aos-duration="2000"
					>
						{news.slice(1, 6).map((item, index) => (
							<div
								key={index}
								style={{
									whiteSpace: "nowrap",
									marginRight: "5px",
									marginBottom: "5px",
								}}
							>
								<div
									style={{ width: "352px", height: "265px" }}
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
								<span style={{ fontSize: "16px" }}>
									{item.title}
								</span>
							</div>
						))}
					</div>
				</div>
				<div className={styles.news_ipo}>
					<div className="d-flex justify-content-between align-items-baseline">
						<div className="heading" data-aos-duration="2000" data-aos="fade-left">
							<p className="text m-0">TIN TỨC IPO</p>
							<p className="col decor"></p>
						</div>
					</div>
					<div className="row">
						<div className={"col-md-9 col-lg-10 col-12"} data-aos="fade-right">
							<div className={styles.box_image_news}>
								<div className={styles.box_image}>
									<Image
										width={1008}
										height={713}
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
						data-aos="fade-left"
							className={
								styles.box_image +
								" " +
								"col-3 col-lg-2 d-md-block d-none"
							}
							style={{ borderLeft: "1px solid #000" }}
						>
							<Image
								width={244}
								height={713}
								src={BannerRight}
								alt="banner"
							/>
						</div>
					</div>
					<hr className="my-4" />
					<div className="row d-flex justify-content-center" >
						<div className="col-12 col-sm-9 col-lg-10">
							{news.length > 0 &&
								news.slice(0, 7).map((item, index) => (
									<div key={index} className="row" data-aos="fade-up">
										<div className="col-12 col-md-7 col-lg-9">
											<div className="text-align-center p-md-3 p-0">
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
												<h5>{item.mieu_ta_ngan}</h5>
											</div>
										</div>
										<div className="col-12 col-md-5 col-lg-3 d-flex flex-column align-items-center mb-3 mb-lg-0 flex-lg-none">
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
										{index < 6 && (
											<hr
												className="my-4"
												style={{
													width: "98%",
													marginLeft: "1%",
												}}
											/>
										)}
									</div>
								))}
						</div>
						<div className="col-3 col-lg-2 d-none d-md-block" data-aos="fade-left">
							<div
								className={styles.box_image_right}
								style={{ height: "50%" }}
							>
								<Image
									width={244}
									height={825}
									src={BannerRight}
									alt="banner"
								/>
							</div>
							<div
								className={styles.box_image_right}
								style={{ height: "50%" }}
							>
								<Image
									width={244}
									height={825}
									src={BannerRight}
									alt="banner"
								/>
							</div>
						</div>
					</div>
				</div>
				<div className={styles.library}>
					<div className="d-flex justify-content-between mb-3 align-items-baseline">
						<div className="heading" data-aos-duration="2000" data-aos="fade-left">
							<p className="text m-0">THƯ VIỆN</p>
							<p className="col decor"></p>
						</div>
					</div>
					<div className="row justify-content-center justify-content-lg-space-around">
						{news.length > 0 &&
							news.slice(0, 3).map((item, index) => (
								<div
									key={index}
									className="col-12 col-md-8 col-lg-4"
									data-aos="zoom-out-up"
								>
									<div className="d-flex flex-column align-items-center">
										<span>CASE STUDY AURA CAPITAL</span>
										<div
											style={{
												borderBottom: "1px solid black",
												width: "50%",
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
										<div className="d-flex justify-content-center">
											<Image
												height={220}
												width={390}
												loader={({ src }) =>
													`https://api.fostech.vn${src}?access_token=${process.env.ACCESS_TOKEN}`
												}
												src={item.picture}
												alt={item.cate_name}
											/>
										</div>
										<h6>#AuraCaseStudy 36:</h6>
										<h3>{item.cate_name}</h3>
										<h5>{item.mieu_ta_ngan}</h5>
									</div>
								</div>
							))}
					</div>
					<div className="d-flex justify-content-center" data-aos="fade-up">
						<button>ĐĂNG KÝ GÓI THÀNH VIÊN</button>
					</div>
				</div>
				<div className={styles.experts}>
					<div className="d-flex justify-content-between mb-3 align-items-baseline">
						<div className="heading" data-aos-duration="2000" data-aos="fade-left">
							<p className="text m-0">CHUYÊN GIA IPO</p>
							<p className="col decor"></p>
						</div>
					</div>
					<div className="row justify-content-center justify-content-lg-space-around">
						<div className={styles.list_expert}>
							{expert.slice(0, 3).map((item, index) => (
								<div key={index} className={styles.item_expert} data-aos="zoom-in-up">
									<div className="d-flex justify-content-center">
										<Image
											loader={({ src }) =>
												`https://api.fostech.vn${src}?access_token=${process.env.ACCESS_TOKEN}`
											}
											src={item.image}
											height={461}
											width={438}
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
					<div className="d-flex justify-content-between mb-3 align-items-baseline">
						<div className="heading" data-aos-duration="2000" data-aos="fade-left">
							<p className="text m-0">THƯ VIỆN IPO</p>
							<p className="col decor"></p>
						</div>
					</div>
					<div className="row">
						<div
							className={
								styles.box_video +
								" " +
								"col-12 mb-3 mb-lg-0 col-lg-8 pe-md-2 h-100"
							}
							data-aos="zoom-in"
							data-aos-duration="2000"
						>
							<div className="ratio ratio-16x9">
								<iframe
									width="100%"
									height="100%"
									src={gallery[0]?.url}
								></iframe>
							</div>
						</div>
						<div className="col-12 col-lg-4 p-0">
							<div className={styles.box_media}>
								<div className={styles.list_library}>
									{gallery.slice(1, 5).map((item, index) => (
										<div key={index} data-aos="fade-up">
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
													<div class="ratio ratio-16x9">
														<iframe
															className="w-100 h-100 w-lg-100 h-lg-80"
															src={item.url}
														></iframe>
													</div>
												</div>
												<div
													className={
														styles.title +
														" " +
														"col-6"
													}
												>
													<h6>{item.title}</h6>
												</div>
											</div>
										</div>
									))}
								</div>
							</div>
						</div>
					</div>
				</div>
				<hr />
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
					<div className="col-12 my-5">
						<div className={styles.slide_bottom}>
							<Slider {...settings}>
								{news.slice(1, 8).map((item, index) => (
									<div key={index} data-aos="zoom-in-up">
										<div
											className={
												slideIndex === index
													? styles.active +
													  styles.slide
													: styles.slide
											}
										>
											<Image
												loader={({ src }) =>
													`https://api.fostech.vn${src}?access_token=${process.env.ACCESS_TOKEN}`
												}
												src={item.picture}
												width={552}
												height={309}
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
