import React, { useState, useEffect } from "react";
import styles from "./Home.module.scss";
import Image from "next/image";
import Link from "next/link";
import MainLayout from "../../components/layout/mainLayout";
import { useRouter } from "next/router";
import Slider from "react-slick";
import Banner from "../../public/images/home/banner_home.png";
import Banner1 from "../../public/images/home/banner_1.png";
import Banner2 from "../../public/images/home/banner_2.png";
import Banner3 from "../../public/images/home/banner_3.png";
import BannerLeft from "../../public/images/home/banner_left.png";
import BannerRight from "../../public/images/home/banner_right.png";
import Maxresdefault1 from "../../public/images/home/maxresdefault_1.png";
import Maxresdefault2 from "../../public/images/home/maxresdefault_2.png";
import Maxresdefault3 from "../../public/images/home/maxresdefault_3.png";
import Experts from "../../public/images/home/experts.png";
import { useDispatch, useSelector } from "react-redux";
import { getExpert } from "../../store/redux/ExpertReducer/expert.action";
import { getNews } from "../../store/redux/NewsReducer/news.action";
import { getGallery } from "../../store/redux/GalleryReducer/gallery.action";

function HomePage(props) {
	const dispatch = useDispatch();
	const expert = useSelector((state) => state.ExpertReducer.expert);
	const news = useSelector((state) => state.NewsReducer.news);
	const gallery = useSelector((state) => state.GalleryReducer.gallery);
	useEffect(() => {
		dispatch(getExpert());
		dispatch(getNews());
		dispatch(getGallery());
	}, [dispatch]);

	var x = window.matchMedia("(max-width: 768px)");
	const [slideIndex, setSlideIndex] = useState(0);
	const settings = {
		dots: false,
		infinite: true,
		speed: 500,
		slidesToShow: x.matches ? 1 : 3,
		slidesToScroll: 1,
		arrows: false,
		autoplay: true,
		centerMode: true,
		beforeChange: (current, next) => setSlideIndex(next),
	};
	return (
		<MainLayout>
			<div className={styles.homepage}>
				<div className={styles.banner}>
					<div className="row justify-content-center">
						<div className="col-10 col-lg-6 text-center mb-5 pt-0 px-0 pt-sm-5 px-sm-5">
							<h3>{news[0]?.cate_name}</h3>
							<h5>{news[0]?.mieu_ta_ngan}</h5>
						</div>
					</div>
					<div className={styles.slider}>
						<Slider {...settings}>
							{news.length > 0 &&
								news.slice(0, 5).map((item, index) => (
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
											<Image src={Banner} alt="banner" />
										</div>
										<div className={styles.content}>
											<div>
												<h3>{item.cate_name}</h3>
											</div>
											<h5 className="my-2">
												{item.title}
											</h5>
											<button>Xem thêm</button>
										</div>
										<div className={styles.box_bg}></div>
									</div>
								))}
						</Slider>
					</div>
				</div>
				<div className={styles.knowledge}>
					<div className="d-flex justify-content-between mb-2 align-items-baseline">
						<div className="heading">
							<p className="text">KIẾN THỨC IPO</p>
							<p className="col decor"></p>
						</div>
					</div>
					<div className="row">
						<div
							className="col-12 col-lg-6 p-1 p-md-4 mb-3 d-flex flex-column mb-lg-0 flex-lg-none"
							style={{
								borderRight: "0.5px solid #000000",
							}}
						>
							<Image
								height={321}
								width={717}
								loader={({ src }) =>
									`https://api.fostech.vn${src}?access_token=${process.env.ACCESS_TOKEN}`
								}
								src={news[0]?.picture}
								alt={news[0]?.cate_name}
							/>
							<span>{news[0]?.cate_name}</span>
							<h5>{news[0]?.mieu_ta_ngan}</h5>
						</div>

						<div className="col-12 col-lg-6 p-md-4 p-1">
							{news.length > 0 &&
								[news[0], news[0], news[0], news[0]]?.map(
									(item, index) => (
										<div key={index}>
											<h4 className="mb-2">
												{item.title}
											</h4>
											<h5>{item.mieu_ta_ngan}</h5>
											{index < 3 && (
												<hr className="my-3" />
											)}
										</div>
									)
								)}
						</div>
					</div>
				</div>
				<div className={styles.news_ipo}>
					<div className="d-flex justify-content-between mb-3 align-items-baseline">
						<div className="heading">
							<p className="text">TIN TỨC IPO</p>
							<p className="col decor"></p>
						</div>
					</div>
					<div className="row">
						<div
							className={"col-10"}
							style={{ borderRight: "1px solid #000" }}
						>
							<div className={styles.box_image_news}>
								<Image
									width={1007}
									height={614}
									loader={({ src }) =>
										`https://api.fostech.vn${src}?access_token=${process.env.ACCESS_TOKEN}`
									}
									src={news[0]?.picture}
									alt={news[0]?.cate_name}
								/>
								<div className={styles.content}>
									<span>{news[0]?.title}</span>
									<h5 className="d-none d-md-block">
										{news[0]?.mieu_ta_ngan}
									</h5>
								</div>
							</div>
						</div>
						<div className="col-2">
							<Image
								width={244}
								height={713}
								src={BannerRight}
								alt="banner"
								// style={{ height: "100% !important" }}
							/>
						</div>
					</div>
					<hr className="my-4" />
					{news.length > 0 &&
						news.slice(0, 2).map((item, index) => (
							<div key={index} className="row">
								<div className="col-12 col-md-7 col-lg-9">
									<div className="text-align-center p-md-3 p-0">
										<h4 className="mb-2">{item.title}</h4>
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
								{index < 1 && (
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
				<div className={styles.library}>
					<div className="d-flex justify-content-between mb-3 align-items-baseline">
						<div className="heading">
							<p className="text">THƯ VIỆN</p>
							<p className="col decor"></p>
						</div>
					</div>
					<div className="row justify-content-center justify-content-lg-space-around">
						{news.length > 0 &&
							news.slice(0, 3).map((item, index) => (
								<div
									key={index}
									className="col-12 col-md-8 col-lg-4"
								>
									<span>CASE STUDY AURA CAPITAL</span>
									<hr className="my-0 mx-5" />
									<div
										className={
											styles.item_libary +
											" " +
											"d-flex flex-column text-align-left mb-3 mb-lg-0 flex-lg-none"
										}
									>
										<Image
											height={220}
											width={390}
											loader={({ src }) =>
												`https://api.fostech.vn${src}?access_token=${process.env.ACCESS_TOKEN}`
											}
											src={item.picture}
											alt={item.cate_name}
										/>
										<h6>#AuraCaseStudy 36:</h6>
										<h3>{item.cate_name}</h3>
										<h5>{item.mieu_ta_ngan}</h5>
									</div>
								</div>
							))}
					</div>
					<div className="d-flex justify-content-center">
						<button>ĐĂNG KÝ GÓI THÀNH VIÊN</button>
					</div>
				</div>
				<div className={styles.experts}>
					<div className="d-flex justify-content-between mb-3 align-items-baseline">
						<div className="heading">
							<p className="text">CHUYÊN GIA IPO</p>
							<p className="col decor"></p>
						</div>
					</div>
					<div className="row justify-content-center justify-content-lg-space-around">
						<div className={styles.list_expert}>
							{expert.slice(0, 3).map((item, index) => (
								<div key={index} className={styles.item_expert}>
									<Image
										loader={({ src }) =>
											`https://api.fostech.vn${src}?access_token=${process.env.ACCESS_TOKEN}`
										}
										src={item.image}
										height={461}
										width={438}
										alt={item.name}
									/>
									<h5>{item.name}</h5>
									<h6>{item.position}</h6>
								</div>
							))}
						</div>
					</div>
				</div>
				<div className={styles.library_ipo}>
					<div className="d-flex justify-content-between mb-3 align-items-baseline">
						<div className="heading">
							<p className="text">THƯ VIỆN IPO</p>
							<p className="col decor"></p>
						</div>
					</div>
					<div className="row">
						<div
							className={
								styles.box_video +
								" " +
								"col-12 mb-3 mb-lg-0 col-lg-8 p-0 pe-md-2"
							}
						>
							<div class="ratio ratio-16x9">
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
			</div>
		</MainLayout>
	);
}

export default HomePage;
