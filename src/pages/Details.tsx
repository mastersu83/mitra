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
            <h2 style={{ color: "#ffffff" }}>{details && details.title}</h2>
          </div>
          <Card className="cardHover">
            <Card.Img
              variant="top"
              src={
                details
                  ? details.url
                  : "https://sun9-53.userapi.com/impg/6XKSadOO3Ar3dTxRYKRU2xHsqPIqcmDqaNvy_g/IO1i27c6HOg.jpg?size=1280x720&quality=96&sign=ffd766ccada4f21e26cd83f3f53bc5ea&c_uniq_tag=qlI11KjfCJEZ039eLMaOh1S36J5zcpAm6S7vg94RWxk&type=album"
              }
            />
          </Card>
        </>
      )}
    </Container>
  );
};

export default Details;
