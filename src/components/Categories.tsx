import React, { useState } from "react";
import { Container, Row } from "react-bootstrap";
import CategoriesItem from "./CategoriesItem";
import { useAppDispatch, useAppSelector } from "../hooks/appHooks";

const categoriesItem = [
  { id: 1, category: 1 },
  { id: 2, category: 2 },
  { id: 3, category: 3 },
  { id: 4, category: 4 },
];

const Categories = () => {
  const { fetchPhotos } = useAppDispatch();
  const { categories } = useAppSelector((state) => state.gallery);
  const [activeCategory, setActiveCategory] = useState<number>(categories);

  const handleCategories = (categories: number) => {
    setActiveCategory(categories);
    fetchPhotos(categories);
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
