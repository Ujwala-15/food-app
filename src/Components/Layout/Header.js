import React, { Fragment } from 'react';
import cakeImage from '../../Assets/CupCake_Header.jpg';
import classes from './Header.module.css';
import HeaderCardButton from './HeaderCardButton';

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
          <h1>CupCakery</h1>
          <HeaderCardButton onClick={props.onShowCart}/>
      </header>
      <div className={classes['main-image']}>
          <img src={cakeImage} alt='Pink Candy'/> 
      </div>
    </Fragment> 
  );
};

export default Header;
