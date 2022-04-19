import React, { FC, useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import { GalleryType } from "../types/galleryTypes";
import { Link } from "react-router-dom";
import { useAppDispatch } from "../hooks/appHooks";
import { galleryActions } from "../redux/actions/galleryAction";
import Loader from "./Loader";

const CardItem: FC<GalleryType> = ({
  id,
  url,
  title,
  thumbnailUrl,
  albumId,
}) => {
  const dispatch = useAppDispatch();
  const [detailsVisible, setDetailsVisible] = useState<boolean>(false);
  const [delay, setDelay] = useState<boolean>(false);

  const onMouseEnter = () => {
    setDetailsVisible(true);
  };
  const onMouseLeave = () => {
    setDetailsVisible(false);
  };

  useEffect(() => {
    setTimeout(() => {
      setDelay(true);
    }, 500);
  }, []);

  const handlerDetails = () => {
    dispatch(
      galleryActions.addDetailsAction({
        id,
        url,
        title,
        thumbnailUrl,
        albumId,
      })
    );
    localStorage.setItem(
      "detailPhoto",
      JSON.stringify({
        id,
        url,
        title,
        thumbnailUrl,
        albumId,
      })
    );
  };

  return (
    <div>
      {!delay ? (
        <Loader />
      ) : (
        <div
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
          className="cardItem"
        >
          <Card className="cardHover">
            <Card.Img variant="top" src={url} />
            <div
              onClick={handlerDetails}
              className={`details ${detailsVisible ? "detailsVisible" : ""}`}
            >
              <Link to="/mitra/details">
                <span>Подробнее</span>
              </Link>
            </div>
          </Card>
        </div>
      )}
    </div>
  );
};

export default CardItem;
