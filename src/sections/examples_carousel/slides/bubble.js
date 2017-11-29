import React from 'react';
import classnames from 'classnames';
import bubble_theme from './bubble_theme.css';
import style from './style.css';
import OiType from '../../../components/oi_type';

export default () => {
  return (
    <div className={style.bubble_slide}>
      <OiType theme={bubble_theme}>
        <span>
          Kŕdeľ<br/>
          ďatľov <br/>
          učí<br/>
          koňa <br/>
          žrať<br/>
          {"kôru!"}
        </span>
      </OiType>
      <span className={style.bubble}>
         <span className={style.bubble_bg}></span>
         <span className={style.bubble_pointer}></span>
      </span>
    </div>
  )
}
