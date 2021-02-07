import React, { useEffect } from "react";
import categoriesStyles from "./Categories.module.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  loadCategories,
  selectCategories,
} from "../../redux/slices/categorySlice";

function Categories() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadCategories);
  }, [dispatch]);

  const categories = useSelector(selectCategories);
  return (
    <div className={categoriesStyles.categories}>
      {categories?.map(({ value, image, id }) => (
        <Link
          key={id}
          to={`shop/${value}`}
          className={categoriesStyles.category}
          style={{ backgroundImage: `url(${image})` }}>
          <h2>{value}</h2>
        </Link>
      ))}
    </div>
  );
}

export default Categories;
