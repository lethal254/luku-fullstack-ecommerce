import { Button } from "@material-ui/core";
import React from "react";
import cardStyles from "./Card.module.css";

function Card({ image, title, description, price }) {
  return (
    <div className={cardStyles.card}>
      <div className={cardStyles.image}>
        <img src={image}></img>
      </div>
      <div className={cardStyles.typography}>
        <h2>{title}</h2>
        <p>{description}</p>
        <h3>{price}</h3>
        <Button size='large' variant='outlined'>
          Add to cart
        </Button>
      </div>
    </div>
  );
}

export default Card;
