import React from 'react';
import classnames from 'classnames';
import oi_theme from './oi_theme.css';
import style from './style.css';
import OiType from '../../../components/oi_type';

export default () => {
  return (
    <div className={style.slide}>
      <OiType theme={oi_theme}>
        <span>
          ABCDEFGHIJKLMN<br/>
          OPQRSTUVWXYZ<br/>
          0123456789<br/>
          abcdefghijklmn<br/>
          opqrstuvwxyz<br/>
          {"(!?@&)"}<br/>
        </span>
      </OiType>
    </div>
  )
}
