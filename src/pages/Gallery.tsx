import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import Categories from "../components/Categories";

const Gallery = () => {
  return (
    <>
      <Container>
        <Categories />
        <Row lg={3} style={{ rowGap: 30 }}>
          {Array(6)
            .fill(10)
            .map((item) => (
              <Col>
                <Card style={{ width: "26rem" }}>
                  <Card.Img variant="top" src="holder.js/100px180" />
                  <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                  </Card.Body>
                </Card>
              </Col>
            ))}
        </Row>
      </Container>
    </>
  );
};

export default Gallery;
