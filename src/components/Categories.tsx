import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";

const Categories = () => {
  return (
    <Container className="categories">
      <Row>
        <Col lg={2}>
          <Button className="categoriesButton" variant="secondary">
            Categories
          </Button>
        </Col>
        <Col lg={2}>
          <Button className="categoriesButton" variant="secondary">
            Categories
          </Button>
        </Col>
        <Col lg={2}>
          <Button className="categoriesButton" variant="secondary">
            Categories
          </Button>
        </Col>
        <Col lg={2}>
          <Button className="active" variant="secondary">
            Categories
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default Categories;
