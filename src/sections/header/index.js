import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import style from './style.css';
import OiType from '../../components/oi_type';
import OiShare from '../../components/oi_share';

const Header = () => {
  return (
    <header role="heading" className={style.oi_header}>
      <span className={style.logo}>{"❡"}</span>
      <OiShare/>
    </header>
  );
}

export default Header;
