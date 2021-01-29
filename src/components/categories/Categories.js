import React, { useEffect, useState } from "react";
import categoriesStyles from "./Categories.module.css";
import axios from "../../axios";
import { Link } from "react-router-dom";

function Categories() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await axios.get("/categories");
      setCategories(response.data);
    })();
  }, []);
  return (
    <div className={categoriesStyles.categories}>
      {categories?.map(({ value, image }) => (
        <Link
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
