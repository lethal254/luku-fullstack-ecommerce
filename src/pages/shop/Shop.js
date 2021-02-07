import React, { useEffect, useState } from "react";
import shopStyles from "./Shop.module.css";
import Card from "../../components/cards/Card";
import { Radio } from "@material-ui/core";
import { useSelector, useDispatch } from "react-redux";
import { loadProducts, selectProducts } from "../../redux/slices/productsSlice";
import {
  loadCategories,
  selectCategories,
} from "../../redux/slices/categorySlice";

function Shop({ match }) {
  const [category, setCategory] = useState("" || match.params.category);
  const products = useSelector(selectProducts);
  const categories = useSelector(selectCategories) || [];
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadCategories);
  }, [dispatch]);
  useEffect(() => {
    dispatch(loadProducts(category));
  }, [category, dispatch]);

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
                    id={_id}
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
