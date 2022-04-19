import React from "react";
import { Card, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useAppSelector } from "../hooks/appHooks";

const Details = () => {
  const { details } = useAppSelector((state) => state.gallery);
  return (
    <Container>
      <Link to="/">
        <h2> Назад</h2>
      </Link>
      <Card className="cardHover">
        <Card.Img variant="top" src={details.url} />
      </Card>
    </Container>
  );
};

export default Details;
