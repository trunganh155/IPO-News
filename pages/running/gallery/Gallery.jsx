import Image from "next/image";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import { getGallery } from "../../../store/redux/GalleryReducer/gallery.action";
import { getNews } from "../../../store/redux/NewsReducer/news.action";
import ArrowLeft from "../../../public/images/icons/arrow_left.svg";
import ArrowRight from "../../../public/images/icons/arrow_right.svg";
import styles from "./Gallery.module.scss";

export default function Gallery(props) {
	const router = useRouter();
	const dispatch = useDispatch();
	const { gallery } = useSelector((state) => state.GalleryReducer);
	const { news } = useSelector((state) => state.NewsReducer);

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
			<Image
				src={ArrowRight}
				alt="nextArrow"
				width={24}
				height={44}
				{...props}
			/>
		</div>
	);

	const [slideIndex, setSlideIndex] = useState(0);
	const settings = {
		slidesToShow: 3,
		slidesToScroll: 1,
		autoplay: false,
		speed: 800,
		arrows: true,
		infinite: true,
		dots: false,
		centerMode: true,
		centerPadding: "0px",
		pauseOnHover: false,
		prevArrow: (
			<button type="button" class="slick-prev">
				<SlickArrowLeft />
			</button>
		),
		nextArrow: (
			<button type="button" class="slick-next">
				<SlickArrowRight />
			</button>
		),
		beforeChange: (current, next) => setSlideIndex(next),
		responsive: [
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
				},
			},
			{
				breakpoint: 576,
				settings: {
					centerMode: false,
					slidesToShow: 1,
					slidesToScroll: 1,
				},
			},
		],
	};

	useEffect(() => {
		dispatch(getGallery());
		dispatch(getNews());
	}, [dispatch]);

	return (
		<div className={styles.gallery}>
			<div className="heading">
				<p className="text">gallery</p>
				<p className="col decor"></p>
			</div>

			{/* <section className="d-flex flex-wrap">
        <div className="col-12 col-md-6 pe-0 pe-md-2">
          <div class="ratio ratio-16x9">
            <iframe
              src={gallery[0]?.url}
              title="YouTube video"
              allowfullscreen
            ></iframe>
          </div>

          <p className={styles.gallery_title}>{gallery[0]?.title}</p>
        </div>

        <div className="col-12 col-md-6 ps-0 ps-md-2">
          <div class="ratio ratio-16x9">
            <iframe
              src={gallery[1]?.url}
              title="YouTube video"
              allowfullscreen
            ></iframe>
          </div>

          <p className={styles.gallery_title}>{gallery[1]?.title}</p>
        </div>
      </section>

      <section className="d-flex flex-wrap mt-2 mt-md-4">
        <div className="col-12 col-md-6 d-flex flex-wrap pe-0 pe-md-2">
          <div className="col-12 col-sm-6 pe-0 pe-sm-1">
            <div class="ratio ratio-16x9">
              <iframe
                src={gallery[0]?.url}
                title="YouTube video"
                allowfullscreen
              ></iframe>
            </div>

            <p className={styles.gallery_title_sm}>{gallery[0]?.title}</p>
          </div>

          <div className="col-12 col-sm-6 ps-0 ps-sm-1">
            <div class="ratio ratio-16x9">
              <iframe
                src={gallery[1]?.url}
                title="YouTube video"
                allowfullscreen
              ></iframe>
            </div>

            <p className={styles.gallery_title_sm}>{gallery[1]?.title}</p>
          </div>
        </div>

        <div className="col-12 col-md-6 d-flex flex-wrap ps-0 ps-md-2">
          <div className="col-12 col-sm-6 pe-0 pe-sm-1">
            <div class="ratio ratio-16x9">
              <iframe
                src={gallery[2]?.url}
                title="YouTube video"
                allowfullscreen
              ></iframe>
            </div>

            <p className={styles.gallery_title_sm}>{gallery[2]?.title}</p>
          </div>

          <div className="col-12 col-sm-6 ps-0 ps-sm-1">
            <div class="ratio ratio-16x9">
              <iframe
                src={gallery[3]?.url}
                title="YouTube video"
                allowfullscreen
              ></iframe>
            </div>

            <p className={styles.gallery_title_sm}>{gallery[3]?.title}</p>
          </div>
        </div>
      </section> */}

			<section>
				<div className="col-12">
					<div class="ratio ratio-21x9 d-none d-sm-block mb-1">
						<iframe
							src={gallery[1]?.url}
							title="YouTube video"
							allowfullscreen
						></iframe>
					</div>

					<div class="ratio ratio-16x9 d-block d-sm-none mb-1">
						<iframe
							src={gallery[1]?.url}
							title="YouTube video"
							allowfullscreen
						></iframe>
					</div>

					<p className={styles.gallery_title}>{gallery[1]?.title}</p>
				</div>
			</section>

			<section className="mt-2 mt-md-5">
				<div className={styles.scroll + " " + "d-flex flex-row"}>
					{gallery.map((item, index) => {
						return (
							<div
								className="col-6 col-sm-4 col-md-3 px-2 py-2"
								key={index}
							>
								<div class="ratio ratio-16x9 mb-2">
									<iframe
										src={item.url}
										title="YouTube video"
										allowfullscreen
									></iframe>
								</div>

								<p className={styles.gallery_title_sm}>
									{item.title}
								</p>
							</div>
						);
					})}
				</div>
			</section>

			<section>
				<div className="col-12 my-5 px-3">
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
											width={642}
											height={409}
											alt="banner"
											className="rounded_20"
										/>
									</div>

									<div
										className={
											styles.content_active +
											" " +
											"px-4 px-sm-5 px-lg-0"
										}
										style={{
											visibility:
												slideIndex === index
													? "visible"
													: "hidden",
										}}
									>
										<p
											className={
												styles.gallery_title_slider
											}
										>
											{item.title}
										</p>
										<p
											className={
												styles.gallery_content_slider
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

			<section className="mt-2 mt-md-4">
				<Image
					alt="khoa_hoc"
					src="/images/course/banner.png"
					width={1578}
					height={300}
					className="w-100"
				/>
			</section>
		</div>
	);
}
