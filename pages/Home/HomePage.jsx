import React, { useState } from "react";
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

function HomePage(props) {
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
              <h3>Lorem ipsum</h3>
              <h5>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Nisl
                tincidunt eget nullam non. Quis hendrerit dolor magna eget est
                lorem ipsum dolor sit.
              </h5>
            </div>
          </div>
          <div className={styles.slider}>
            <Slider {...settings}>
              {Array(5)
                .fill(0)
                .map((item, index) => (
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
                        styles.images + " " + "d-flex justify-content-center"
                      }
                    >
                      <Image src={Banner} alt="banner" />
                    </div>
                    <div className={styles.content}>
                      <div>
                        <h3>Lorem ipsum</h3>
                      </div>
                      <h5 className="my-2">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua.
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
            <h3>KIẾN THỨC IPO</h3>
            <hr
              style={{
                width: "calc(100% - 350px)",
                alignItems: "flex-end",
                marginBottom: "0px",
              }}
            />
          </div>
          <div className="row">
            <div
              className="col-12 col-lg-6 p-4 mb-3 d-flex flex-column mb-lg-0 flex-lg-none"
              style={
                {
                  // borderBottomLeftRadius: "0.5px solid #000000",
                }
              }
            >
              <Image src={Banner1} alt="banner" />
              <span>IPO là gì?</span>
              <h5>
                IPO (Initial Public Offering), có nghĩa là phát hành lần đầu ra
                công chúng.
              </h5>
            </div>
            <div className="col-12 col-lg-6 p-4">
              <div>
                <h4>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </h4>
                <h5>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </h5>
              </div>
              <hr className="my-1" />
              <div>
                <h4>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </h4>
                <h5>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </h5>
              </div>
              <hr className="my-1" />
              <div>
                <h4>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </h4>
                <h5>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </h5>
              </div>
              <hr className="my-1" />
              <div>
                <h4>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </h4>
                <h5>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </h5>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.news_ipo}>
          <div className="d-flex justify-content-between mb-3 align-items-baseline">
            <h3>TIN TỨC IPO</h3>
            <hr
              style={{
                width: "calc(100% - 350px)",
                alignItems: "flex-end",
                marginBottom: "0px",
              }}
            />
          </div>
          <div className="row">
            <div className={"col-10" + " " + styles.box_image_news}>
              <Image src={BannerLeft} alt="banner" />
              <div className={styles.content}>
                <span>IPO là gì?</span>
                <h5>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </h5>
              </div>
            </div>
            <div className="col-2">
              <Image
                src={BannerRight}
                alt="banner"
                style={{ height: "100% !important" }}
              />
            </div>
          </div>
          <hr />
          <div className="row">
            <div className="col-12 col-lg-9">
              <div className="text-align-center p-4">
                <h4>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Nisl tincidunt eget nullam non. Quis hendrerit dolor magna
                  eget est lorem ipsum dolor sit.
                </h4>
                <h5>
                  Senectus et netus et malesuada. Nunc pulvinar sapien et ligula
                  ullamcorper malesuada proin. Neque convallis a cras semper
                  auctor. Libero id faucibus nisl tincidunt eget. Leo a diam
                  sollicitudin tempor id. A lacus vestibulum sed arcu non odio
                  euismod lacinia. In tellus integer feugiat scelerisque.
                </h5>
              </div>
            </div>
            <div className="col-12 col-lg-3 d-flex flex-column align-items-center mb-3 mb-lg-0 flex-lg-none">
              <Image src={Banner2} alt="banner" />
            </div>
          </div>
          <hr />
          <div className="row">
            <div className="col-12 col-lg-9">
              <div className="text-align-center p-4">
                <h4>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Nisl tincidunt eget nullam non. Quis hendrerit dolor magna
                  eget est lorem ipsum dolor sit.
                </h4>
                <h5>
                  Senectus et netus et malesuada. Nunc pulvinar sapien et ligula
                  ullamcorper malesuada proin. Neque convallis a cras semper
                  auctor. Libero id faucibus nisl tincidunt eget. Leo a diam
                  sollicitudin tempor id. A lacus vestibulum sed arcu non odio
                  euismod lacinia. In tellus integer feugiat scelerisque.
                </h5>
              </div>
            </div>
            <div className="col-12 col-lg-3 d-flex flex-column align-items-center mb-3 mb-lg-0 flex-lg-none">
              <Image src={Banner3} alt="banner" />
            </div>
          </div>
        </div>
        <div className={styles.library}>
          <div className="d-flex justify-content-between mb-3 align-items-baseline">
            <h3>THƯ VIỆN</h3>
            <hr
              style={{
                width: "calc(100% - 350px)",
                alignItems: "flex-end",
                marginBottom: "0px",
              }}
            />
          </div>
          <div className="row justify-content-center justify-content-lg-space-around">
            <div className="col-12 col-sm-8 col-lg-4">
              <span>CASE STUDY AURA CAPITAL</span>
              <hr className="my-0 mx-5" />
              <div
                className={
                  styles.item_libary +
                  " " +
                  "d-flex flex-column align-items-center mb-3 mb-lg-0 flex-lg-none"
                }
              >
                <Image src={Maxresdefault1} alt="banner" />
                <h6>#AuraCaseStudy 36:</h6>
                <h3>Hành Trình Getfit IPO – Phát Triển Thương Hiệu Gym Việt</h3>
                <h5>
                  Hành trình đưa một thương hiệu Gym Việt lên sàn IPO thành công
                  vang đội. Những khó khăn và bài học được rút ra. Phân tích
                  Getfit đã làm để đứng vững qua những giai đoạn khủng hoảng của
                  đất nước.
                </h5>
              </div>
            </div>
            <div className="col-12 col-sm-8 col-lg-4">
              <span>CASE STUDY AURA CAPITAL</span>
              <hr className="my-0 mx-5" />
              <div
                className={
                  styles.item_libary +
                  " " +
                  "d-flex flex-column align-items-center mb-3 mb-lg-0 flex-lg-none"
                }
              >
                <Image src={Maxresdefault2} alt="banner" />
                <h6>#VNCaseStudy 40:</h6>
                <h3>
                  So găng Vietcombank và Techcombank: Chiến lược và lợi thế khác
                  biệt trong bức tranh kinh doanh 6 tháng đầu năm 2022
                </h3>
              </div>
            </div>
            <div className="col-12 col-sm-8 col-lg-4">
              <span>CASE STUDY AURA CAPITAL</span>
              <hr className="my-0 mx-5" />
              <div
                className={
                  styles.item_libary +
                  " " +
                  "d-flex flex-column align-items-center mb-3 mb-lg-0 flex-lg-none"
                }
              >
                <Image src={Maxresdefault3} alt="banner" />
                <h6>#TailieuIPO 15:</h6>
                <h3>Hành Trình Xây Dựng Siêu Tập Đoàn.</h3>
                <h5>
                  Tài liệu chi tiết tìm hiểu – phân tích cách Richard Branson –
                  nhà tỷ phú người Anh làm thế nào có thể quản lý hơn 400 doanh
                  nghiệp cũng một lúc.
                </h5>
              </div>
            </div>
          </div>
          <div className="d-flex justify-content-center">
            <button>ĐĂNG KÝ GÓI THÀNH VIÊN</button>
          </div>
        </div>
        <div className={styles.experts}>
          <div className="d-flex justify-content-between mb-3 align-items-baseline">
            <h3>CHUYÊN GIA IPO</h3>
            <hr
              style={{
                width: "calc(100% - 350px)",
                alignItems: "flex-end",
                marginBottom: "0px",
              }}
            />
          </div>
          <div className="row justify-content-center justify-content-lg-space-around">
            <div className="col-12 col-sm-8 col-lg-4">
              <div className="d-flex flex-column align-items-center mb-3 mb-lg-0 flex-lg-none">
                <Image src={Experts} alt="banner" />
                <h5>Mr. Macus</h5>
                <h6>Nhà Sáng Lập Aura Capital</h6>
              </div>
            </div>
            <div className="col-12 col-sm-8 col-lg-4">
              <div className="d-flex flex-column align-items-center mb-3 mb-lg-0 flex-lg-none">
                <Image src={Experts} alt="banner" />
                <h5>Mr. Đậu Minh Nhật</h5>
                <h6>Chủ Tịch HĐQT Aura Capital</h6>
              </div>
            </div>
            <div className="col-12 col-sm-8 col-lg-4">
              <div className="d-flex flex-column align-items-center mb-3 mb-lg-0 flex-lg-none">
                <Image src={Experts} alt="banner" />
                <h5>Dr. Wong Jeh Shyan</h5>
                <h6>Chủ Tịch HĐQT MOC Capital</h6>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.library_ipo}>
          <div className="d-flex justify-content-between mb-3 align-items-baseline">
            <h3>THƯ VIỆN IPO</h3>
            <hr
              style={{
                width: "calc(100% - 350px)",
                alignItems: "flex-end",
                marginBottom: "0px",
              }}
            />
          </div>
          <div className="row">
            <div
              className={
                styles.box_video + " " + "col-12 mb-3 mb-lg-0 col-lg-8"
              }
            >
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/fTAOtt3QiAk"
              ></iframe>
            </div>
            <div className="col-12 col-lg-4">
              <div className={styles.list_library}>
                {Array(10)
                  .fill(0)
                  .map((item, index) => (
                    <div key={index}>
                      <div className={styles.item_library + " " + "row"}>
                        <div className="col-6">
                          <Image src={Banner3} alt="banner" />
                        </div>
                        <div className="col-6">
                          <h6>consectetur adipiscing elit.</h6>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}

export default HomePage;
