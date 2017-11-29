import React from 'react';
import classnames from 'classnames';
import lala_theme from './lala_theme.css';
import style from './style.css';
import OiType from '../../../components/oi_type';


export default () => {
  return (
    <div className={style.lala_slide}>
      <OiType mate theme={lala_theme}>
        <span>
          {"oh"}<br/>
          {"là là"}
        </span>
      </OiType>
    </div>
  )
}
