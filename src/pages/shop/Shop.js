import React, { useEffect, useState } from "react";
import shopStyles from "./Shop.module.css";
import CheckBox from "@material-ui/core/Checkbox";
import Card from "../../components/cards/Card";
import axios from "../../axios";
import { Radio } from "@material-ui/core";

function Shop({ match }) {
  const [category, setCategory] = useState("" || match.params.category);
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await axios.get("/categories");
      setCategories(response.data);
    })();
  }, []);
  console.log(match.params.category);

  useEffect(() => {
    (async () => {
      const response = await axios.get(
        `/products${category ? "?category=" + category : ""}`
      );
      setProducts(response.data);
    })();
  }, [category]);

  return (
    <div className={shopStyles.shop}>
      <div className={shopStyles.shop__container}>
        <div className={shopStyles.shop__left}>
          <label className={shopStyles.label}>
            <Radio
              color='default'
              value={""}
              checked={category === ""}
              onChange={(e) => {
                setCategory("");
              }}
            />
            All
          </label>
          {categories
            ? categories.map(({ _id, value }) => {
                return (
                  <label key={_id} className={shopStyles.label}>
                    <Radio
                      color='default'
                      value={value}
                      checked={category === value}
                      onChange={(e) => {
                        setCategory(e.target.value);
                      }}
                    />
                    {value}
                  </label>
                );
              })
            : false}
        </div>
        <div className={shopStyles.shop__right}>
          {products.length > 0
            ? products.map(({ _id, image, title, description, price }) => {
                return (
                  <Card
                    key={_id}
                    image={image}
                    title={title}
                    description={description}
                    price={price}
                  />
                );
              })
            : false}
        </div>
      </div>
    </div>
  );
}

export default Shop;
