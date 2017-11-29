import React from 'react';
import classnames from 'classnames';
import kerato_theme from './kerato_theme.css';
import style from './style.css';
import OiType from '../../../components/oi_type';


export default () => {
  return (
    <div className={style.kerato_slide}>
      <OiType mate theme={kerato_theme}>
        <span>
          {"#$@% το"}<br/>
          {"κέρατό"}<br/>
          {"μου!"}
        </span>
      </OiType>
    </div>
  )
}
