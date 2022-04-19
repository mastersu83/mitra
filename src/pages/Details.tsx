import React, { useEffect, useState } from "react";
import { Card, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useAppSelector } from "../hooks/appHooks";
import DetailsLoader from "../components/DetailsLoader";

const Details = () => {
  const { details } = useAppSelector((state) => state.gallery);
  const [delay, setDelay] = useState<boolean>(false);

  useEffect(() => {
    setTimeout(() => {
      setDelay(true);
    }, 500);
  }, []);
  return (
    <Container>
      {!delay ? (
        <DetailsLoader />
      ) : (
        <>
          <div
            style={{
              display: "flex",
              justifyContent: "end",
              fontSize: 30,
            }}
          >
            <Link to="/">
              <span>Назад</span>
            </Link>
          </div>

          <div>
            <h2 style={{ color: "#ffffff" }}>{details.title}</h2>
          </div>
          <Card className="cardHover">
            <Card.Img variant="top" src={details.url} />
          </Card>
        </>
      )}
    </Container>
  );
};

export default Details;
