import React from "react";
import { Col, Container, Dropdown, Row } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import avatar from "../assets/avatar-svgrepo-com.svg";
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
                <Dropdown.Item disabled>name: master</Dropdown.Item>
                <Dropdown.Item disabled>Email: master@mail.ru</Dropdown.Item>
                <Dropdown.Item as={Link} to="/mitra/">
                  Галерея
                </Dropdown.Item>
                <Dropdown.Item as={Link} to="/mitra/about">
                  Обо мне
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Header;
