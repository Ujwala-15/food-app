import { useContext, useEffect, useState } from 'react';
import React from 'react';
import CartIcon from '../Cart/CartIcon';
import classes from './HeaderCardButton.module.css';
import CartContext from '../../Store/cart-context';

const HeaderCardButton = (props) => {
  const [btnAnimation, setBtnAnimation] = useState(false);
  const cartCtx = useContext(CartContext);

  const { items } = cartCtx;
  //not clear
  const numberOfCartItems = items.reduce((curNumber, item) => {
      return curNumber + item.amount;
  }, 0);

  const btnClasses = `${classes.button} ${btnAnimation ? classes.bump : ''}`

  useEffect(() => {
    if(cartCtx.items.length === 0){
      return;
    }
    setBtnAnimation(true);

    const timer = setTimeout(() => {
      setBtnAnimation(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    }
  }, [items]);

  return (
    <button className={btnClasses} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon></CartIcon>
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
  );
};

export default HeaderCardButton;
