import React from "react";
import cartStyles from "./cart.module.css";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import { Button } from "@material-ui/core";

function cart() {
  const products = [
    {
      _id: { $oid: "60116fe7ae233b0e3a4100da" },
      image:
        "https://image.freepik.com/free-photo/pretty-young-stylish-sexy-woman-pink-luxury-dress-summer-fashion-trend-chic-style-sunglasses-blue-studio-background-shopping-holding-paper-bags-talking-mobile-phone-shopaholic_285396-2957.jpg",
      title: "Women Clothing",
      description: "A master piece for women",
      price: "Ksh.7000",
      category: "Women",
      __v: 0,
    },
    {
      _id: { $oid: "60116ffbae233b0e3a4100db" },
      image:
        "https://image.freepik.com/free-photo/full-length-shot-glad-curly-woman-striped-pants-jumping-purple-wall-indoor-portrait-wonderful-girl-sunglasses-fooling-around_197531-5125.jpg",
      title: "Colorful clothes",
      description: "A master piece for women",
      price: "Ksh.8000",
      category: "Men",
      __v: 0,
    },
    {
      _id: { $oid: "60116ffbae233b0e3a4100db" },
      image:
        "https://image.freepik.com/free-photo/full-length-shot-glad-curly-woman-striped-pants-jumping-purple-wall-indoor-portrait-wonderful-girl-sunglasses-fooling-around_197531-5125.jpg",
      title: "Colorful clothes",
      description: "A master piece for women",
      price: "Ksh.8000",
      category: "Men",
      __v: 0,
    },
  ];
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
          {products?.map((product) => {
            return (
              <TableRow>
                <TableCell className={cartStyles.cart__details}>
                  <img
                    src={product.image}
                    className={cartStyles.cart__productimage}
                  />
                </TableCell>
                <TableCell className={cartStyles.cart__details} align='right'>
                  {parseInt(product.price.replace("Ksh.", ""))}
                </TableCell>
                <TableCell className={cartStyles.cart__details} align='right'>
                  <input className={cartStyles.cart__input} type='text' />
                </TableCell>
                <TableCell className={cartStyles.cart__details} align='right'>
                  50000
                </TableCell>
                <TableCell className={cartStyles.cart__details} align='right'>
                  <Button size='large' variant='outlined'>
                    Remove
                  </Button>
                </TableCell>
              </TableRow>
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
              Total:30000
            </TableCell>
            <TableCell className={cartStyles.cart__details} align='right'>
              <Button size='large' variant='outlined'>
                Check Out
              </Button>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
}

export default cart;
