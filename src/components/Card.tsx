import React, { FC, useState } from "react";
import { Card } from "react-bootstrap";
import { GalleryType } from "../types/galleryTypes";
import { Link } from "react-router-dom";
import { useAppDispatch } from "../hooks/appHooks";
import { addDetailsAction } from "../redux/actions/dalleryAction";

const CardItem: FC<GalleryType> = ({
  id,
  url,
  title,
  thumbnailUrl,
  albumId,
}) => {
  const dispatch = useAppDispatch();
  const [detailsVisible, setDetailsVisible] = useState<boolean>(false);

  const onMouseEnter = () => {
    setDetailsVisible(true);
  };
  const onMouseLeave = () => {
    setDetailsVisible(false);
  };

  const handlerDetails = () => {
    dispatch(
      addDetailsAction({
        id,
        url,
        title,
        thumbnailUrl,
        albumId,
      })
    );
  };
  return (
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
          <Link to="/details">
            <span>Подробнее</span>
          </Link>
        </div>
      </Card>
    </div>
  );
};

export default CardItem;
