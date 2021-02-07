import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  increaseItems,
  removeFromCart,
  updateTotal,
} from "../../redux/slices/cartSlice";
import cartItemStyles from "./cartItem.module.css";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import { Button } from "@material-ui/core";

function CartItem({ id, image, price, quantity }) {
  const dispatch = useDispatch();
  const removeFromLocalStorage = (id) => {
    const items = JSON.parse(localStorage.getItem("cart"));
    const filteredItems = items.filter((item) => item.id !== id);
    localStorage.setItem("cart", JSON.stringify(filteredItems));
  };
  return (
    <TableRow key={id}>
      <TableCell className={cartItemStyles.cart__details}>
        <img
          alt='product'
          src={image}
          className={cartItemStyles.cart__productimage}
        />
      </TableCell>
      <TableCell className={cartItemStyles.cart__details} align='right'>
        {parseInt(price.replace("Ksh.", ""))}
      </TableCell>
      <TableCell className={cartItemStyles.cart__details} align='right'>
        <input
          className={cartItemStyles.cart__input}
          type='text'
          onChange={(e) => {
            dispatch(increaseItems({ id, quantity: e.target.value || 1 }));
            dispatch(updateTotal());
          }}
        />
      </TableCell>
      <TableCell className={cartItemStyles.cart__details} align='right'>
        {parseInt(price.replace("Ksh.", "")) * quantity}
      </TableCell>
      <TableCell className={cartItemStyles.cart__details} align='right'>
        <Button
          variant='outlined'
          onClick={() => {
            dispatch(removeFromCart({ id }));
            dispatch(updateTotal());
            removeFromLocalStorage(id);
          }}>
          Remove
        </Button>
      </TableCell>
    </TableRow>
  );
}

export default CartItem;
