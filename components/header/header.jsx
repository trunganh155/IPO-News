import React, { useState } from "react";
import styles from "./header.module.scss";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Button, Form } from "react-bootstrap";
import { BiSearch } from "react-icons/bi";
function Header(props) {
  const router = useRouter();
  const [displayNavSearch, setDisplayNavSearch] = useState(false);
  return (
    <Navbar
      expand="lg"
      className={styles.header + "  " + "justify-content-between mx-auto"}
      fixed="top"
    >
      <Container fluid className={styles.wrapper}>
        <Navbar.Brand href="/">
          <Image
            src="/images/Header/logo.png"
            alt="logo"
            width={100}
            height={50}
            objectFit="cover"
            className={styles.logo}
          />
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          className={styles.navbarToggle}
          color={"red"}
        >
          <i className="fal fa-bars" color="#fff" style={{ fontSize: 28 }}></i>
        </Navbar.Toggle>
        <Navbar.Collapse
          id="basic-navbar-nav"
          className={styles.grow + " " + "mb-lg-0 mb-3"}
        >
          <Nav className="me-auto gap-3 justify-content-center align-items-center">
            <Link href="/intro" passHref>
              <Nav.Link className={styles.navLink}>GIỚI THIỆU</Nav.Link>
            </Link>
            <Link href="/news-event" passHref>
              <Nav.Link className={styles.navLink}>TIN TỨC</Nav.Link>
            </Link>
            <Link href="/feed" passHref>
              <Nav.Link className={styles.navLink}>HOẠT ĐỘNG</Nav.Link>
            </Link>
            <Form className="d-flex justify-content-center align-items-center">
              <Link href="/ticket" passHref>
                <button className={styles.main__btn}>MUA VÉ</button>
              </Link>
              <Form.Control
                type="search"
                placeholder="Tìm kiếm"
                className={
                  displayNavSearch
                    ? "me-2 d-block" + " " + styles.navSearch
                    : "me-2 d-none "
                }
                aria-label="Tìm kiếm"
              />

              <BiSearch
                size={25}
                onClick={() => {
                  setDisplayNavSearch(true);
                }}
              />
            </Form>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
