import { Button } from "@material-ui/core";
import React from "react";
import cardStyles from "./Card.module.css";
import { addToCart } from "../../redux/slices/cartSlice";
import { useDispatch } from "react-redux";

function Card({ image, title, description, price, id }) {
  const dispatch = useDispatch();
  const saveToLocalStorage = (data) => {
    const items = JSON.parse(localStorage.getItem("cart"));
    if (items) {
      const newItems = [...items, data];
      localStorage.setItem("cart", JSON.stringify(newItems));
      return;
    }
    localStorage.setItem("cart", JSON.stringify([data]));
  };
  return (
    <div className={cardStyles.card}>
      <div className={cardStyles.image}>
        <img alt='product' src={image}></img>
      </div>
      <div className={cardStyles.typography}>
        <h2>{title}</h2>
        <p>{description}</p>
        <h3>{price}</h3>
        <Button
          size='large'
          variant='outlined'
          onClick={() => {
            dispatch(
              addToCart({ image, title, price, description, id, quantity: 1 })
            );
            saveToLocalStorage({
              image,
              title,
              price,
              description,
              id,
              quantity: 1,
            });
          }}>
          Add to cart
        </Button>
      </div>
    </div>
  );
}

export default Card;
