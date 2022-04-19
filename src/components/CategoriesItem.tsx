import React, { FC } from "react";
import { Button, Col } from "react-bootstrap";

type PropsType = {
  id: number;
  category: number;
  active: number;
  handleCategories: (id: number) => void;
};

const CategoriesItem: FC<PropsType> = ({
  id,
  category,
  active,
  handleCategories,
}) => {
  return (
    <Col lg={2}>
      <Button
        onClick={() => handleCategories(category)}
        className={`categoriesButton ${active === id ? "active" : ""}`}
        variant="secondary"
      >
        Category {category}
      </Button>
    </Col>
  );
};

export default CategoriesItem;
