import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Categories from "../components/Categories";
import { useAppSelector } from "../hooks/appHooks";
import { GalleryType } from "../types/galleryTypes";
import CardItem from "../components/Card";

const Gallery = () => {
  const { gallery } = useAppSelector((state) => state.gallery);

  return (
    <>
      <Container>
        <Categories />
        <Row lg={3} style={{ rowGap: 30 }}>
          {gallery.map((item: GalleryType) => (
            <Col key={item.id}>
              <CardItem {...item} />
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default Gallery;
