import React from "react";
import headerStyles from "./Header.module.css";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { Link } from "react-router-dom";
import Badge from "@material-ui/core/Badge";

function Header() {
  return (
    <header className={headerStyles.header}>
      <div className={headerStyles.navigation}>
        <div className={headerStyles.logo}>
          <h1>Luku</h1>
        </div>
        <ul className={headerStyles.nav}>
          <li className={headerStyles.navItem}>
            <Link to='/' className={headerStyles.navLink}>
              Home
            </Link>
          </li>
          <li className={headerStyles.navItem}>
            <Link to='/shop' className={headerStyles.navLink}>
              Shop
            </Link>
          </li>
          <li className={headerStyles.navItem}>
            <Link className={headerStyles.navLink}>Checkout</Link>
          </li>
          <li className={headerStyles.navItem}>
            <Link className={headerStyles.navLink}>Account</Link>
          </li>
          <li className={headerStyles.navItem}>
            <Link className={headerStyles.navLink} to='/cart'>
              <Badge badgeContent={4} color='secondary'>
                <ShoppingCartIcon className={headerStyles.cartIcon} />
              </Badge>
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
