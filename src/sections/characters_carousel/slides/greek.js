import React from 'react';
import classnames from 'classnames';
import style from './style.css';
import oi_theme from './oi_theme.css';
import OiType from '../../../components/oi_type';

export default () => {
  return (
    <div className={style.slide}>
      <OiType theme={oi_theme}>
        <span>
          ΑΒΓΔΕΖΗΘΙΚΛΜΝ<br/>
          ΞΟΠΡΣΤΥΦΧΨΩ<br/>
          0123456789<br/>
          αβγδεζηθικλμν<br/>
          ξοπρστυφχψω<br/>
          {"{<÷×>}"}
        </span>
      </OiType>
    </div>
  )
}
