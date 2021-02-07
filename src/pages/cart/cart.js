import React, { useEffect } from "react";
import cartStyles from "./cart.module.css";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import { useDispatch, useSelector } from "react-redux";
import {
  loadCart,
  selectCart,
  selectTotalPrice,
  updateTotal,
} from "../../redux/slices/cartSlice";
import CartItem from "../../components/cartItem/cartItem";
import { useHistory } from "react-router-dom";
import StripeCheckout from "react-stripe-checkout";

function Cart() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadCart);
    dispatch(updateTotal());
  }, [dispatch]);
  let history = useHistory();
  const cartItems = useSelector(selectCart);
  const total = useSelector(selectTotalPrice);
  const handleToken = (token, adddresses) => {
    console.log({ token, adddresses });
  };
  return (
    <div className={cartStyles.cart}>
      <Table className={cartStyles.cart__upper}>
        <TableHead>
          <TableRow>
            <TableCell className={cartStyles.cart__header}>Item</TableCell>
            <TableCell className={cartStyles.cart__header} align='right'>
              Price (Ksh)
            </TableCell>
            <TableCell className={cartStyles.cart__header} align='right'>
              Quantity
            </TableCell>
            <TableCell className={cartStyles.cart__header} align='right'>
              Total (Ksh)
            </TableCell>
            <TableCell
              className={cartStyles.cart__header}
              align='right'></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {cartItems?.map((product) => {
            return (
              <CartItem
                key={product.id}
                id={product.id}
                price={product.price}
                image={product.image}
                quantity={product.quantity}
              />
            );
          })}
          <TableRow>
            <TableCell className={cartStyles.cart__details}></TableCell>
            <TableCell
              className={cartStyles.cart__details}
              align='right'></TableCell>
            <TableCell
              className={cartStyles.cart__details}
              align='right'></TableCell>
            <TableCell className={cartStyles.cart__details} align='right'>
              Total:{total}
            </TableCell>
            <TableCell className={cartStyles.cart__details} align='right'>
              <StripeCheckout
                disabled={cartItems.length === 0}
                stripeKey='pk_test_51IHDfYHXhyBi5fNEWByqlL27AzW32jjXKF5Nv5aFw1HpuUQBFUFJh1Okb7SOiOBodgm6oghYMb70Ch2OAqYugRL600CM6A83rz'
                token={handleToken}
                billingAddress
                shippingAddress
                amount={total * 100}
              />
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
}

export default Cart;
