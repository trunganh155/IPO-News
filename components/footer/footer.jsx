import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "./footer.module.scss";
import { MdOutlineFacebook } from "react-icons/md";
import {
  AiOutlineTwitter,
  AiOutlineInstagram,
  AiFillYoutube,
} from "react-icons/ai";
import { Button, Form } from "react-bootstrap";
function Footer(props) {
  return (
    <footer className={styles.footer}>
      <div className="container py-5">
        <div className="row d-flex align-items-center justify-content-center">
          <div
            className={
              "col-12 col-lg-2 col-md-3 d-flex align-items-center justify-content-center" +
              " " +
              styles.footer__logo
            }
          >
            <Image
              src={"/images/Footer/logo.png"}
              width={150}
              height={110}
              alt="logo"
            />
          </div>
          <div className={"col-12 col-lg-10 col-md-9 "}>
            <div className={styles.ticketContainer}>
              <div className={styles.footer__ticket + " " + "container"}>
                <div
                  className={
                    styles.ticketContent +
                    " " +
                    "d-flex row mx-0 align-items-center justify-content-center "
                  }
                >
                  <div className="col-12 col-md-7 mb-5 mb-sm-0">
                    <div className={styles.ticketContent__left}>
                      <h6 className={styles.ticketContent__left__title}>
                        GOLF & CAR ENTERTAINMENT
                      </h6>
                      <p className={styles.ticketContent__left__address}>
                        <span>Địa chỉ:</span> 85-87 Nguyen Co Thach, An Loi
                        Đong, Q.2, TPHCM
                      </p>
                      <p className={styles.ticketContent__left__address}>
                        <span>Điện thoại:</span> Điện thoại: 0909 33 7777
                      </p>
                      <p className={styles.ticketContent__left__address}>
                        <span>Email:</span>Email: mail@lioholdings.com
                      </p>
                      <div className={styles.ticketContent__left__social}>
                        <ul className="d-flex p-0">
                          <li>
                            {" "}
                            <a
                              className={
                                styles.ticketContent__left__social__item
                              }
                              href=""
                            >
                              <MdOutlineFacebook />
                            </a>
                          </li>
                          <li>
                            {" "}
                            <a
                              className={
                                styles.ticketContent__left__social__item
                              }
                              href=""
                            >
                              <AiOutlineTwitter />
                            </a>
                          </li>
                          <li>
                            <a
                              className={
                                styles.ticketContent__left__social__item
                              }
                              href=""
                            >
                              <AiOutlineInstagram />
                            </a>
                          </li>
                          <li>
                            <a
                              className={
                                styles.ticketContent__left__social__item
                              }
                              href=""
                            >
                              <AiFillYoutube />
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-md-5">
                    <div className={styles.ticketContent__right}>
                      <Form className="d-flex flex-column justify-content-center ">
                        <h6 className={styles.ticketContent__right__title}>
                          ĐĂNG KÝ NHẬN THÔNG TIN
                        </h6>
                        <p className={styles.ticketContent__right__des}>
                          Vui lòng để lại địa chỉ email, chúng tôi sẽ cập nhật
                          thông tin tới quý khách!
                        </p>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                          <Form.Control
                            className={styles.footer__input}
                            type="text"
                            placeholder="Họ và tên"
                          />
                        </Form.Group>

                        <Form.Group
                          className="mb-3"
                          controlId="formBasicPassword"
                        >
                          <Form.Control
                            className={styles.footer__input}
                            type="email"
                            placeholder="Email"
                          />
                        </Form.Group>
                        <div className="d-flex justify-content-center align-items-center w-100">
                          <button
                            className={styles.main__btn + " " + "text-center"}
                            type="submit"
                          >
                            GỬI
                          </button>
                        </div>
                      </Form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
