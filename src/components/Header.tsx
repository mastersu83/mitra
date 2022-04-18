import React from "react";
import { Col, Container, Dropdown, Row } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import avatar from "../assets/burgerMenu.svg";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <Container className="header">
        <Row>
          <Col lg={2}>
            <Dropdown>
              <Dropdown.Toggle variant="success" id="dropdown-basic" />
              <Dropdown.Menu variant="dark">
                <Dropdown.Item disabled>
                  <Image src={avatar} />
                </Dropdown.Item>
                <Dropdown.Item disabled>name</Dropdown.Item>
                <Dropdown.Item disabled>Email</Dropdown.Item>
                <Link to="/" className="menuLink">
                  <Dropdown.Item href="/">Галерея</Dropdown.Item>
                </Link>
                <Link to="/about" className="menuLink">
                  <Dropdown.Item href="/about">Обо мне</Dropdown.Item>
                </Link>
              </Dropdown.Menu>
            </Dropdown>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Header;
