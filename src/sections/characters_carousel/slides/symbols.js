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
          {"#1 91% & 99‰"}<br/>
          {"1₡ 2$ 3€ 4₲ 5₺ 6₱"}<br/>
          {"† 7₹ 8£ 9₿ ‡"}<br/>
          {"{[(«“”»)]}"}<br/>
          {"←↑↔↓→↙↖↕↗↘"}<br/>
          {"☜ ☟ ☝ ☞"}
        </span>
      </OiType>
    </div>
  )
}

// &larr;&uarr;&harr;&darr;&rarr;<br/>
// &#8601;&#8598;&#8597;&#8599;&#8600;<br/>
// &#9756;&#9758;&#9759;&#9757;
