import React, { useState } from "react";
import { Container, Row } from "react-bootstrap";
import CategoriesItem from "./CategoriesItem";
import { useAppDispatch } from "../hooks/appHooks";
import { fetchPhotoAction } from "../redux/actions/dalleryAction";

const categoriesItem = [
  { id: 1, category: 1 },
  { id: 2, category: 2 },
  { id: 3, category: 3 },
  { id: 4, category: 4 },
];

const Categories = () => {
  const dispatch = useAppDispatch();
  const [activeCategory, setActiveCategory] = useState<number>(1);

  const handleCategories = (categories: number) => {
    setActiveCategory(categories);
    dispatch(fetchPhotoAction(categories));
  };

  return (
    <Container className="categories">
      <Row>
        {categoriesItem.map((cat) => (
          <CategoriesItem
            key={cat.id}
            active={activeCategory}
            handleCategories={handleCategories}
            {...cat}
          />
        ))}
      </Row>
    </Container>
  );
};

export default Categories;
