import React from 'react';
import classnames from 'classnames';
import OiType from '../../components/oi_type';
import style from './style.css';
import CurveSeparator from '../../components/curve_separator';

export default () => {

  const theme = {
    oi: style.oi,
    you: style.you,
    mate: style.mate,
  };

  return (
    <section className={style.oi_page}>
      <CurveSeparator above={true} fill={"#231F20"} />
      <div className={style.content_wrap}>
        <OiType mate className={style.oi_row_1} theme={theme}>FOR</OiType>
        <OiType mate className={style.oi_row_2} theme={theme}>LOUD</OiType>
        <OiType mate className={style.oi_row_3} theme={theme}>DESIGNS</OiType>
        <OiType mate className={style.oi_row_4} theme={theme}>&DESIGNERS</OiType>
      </div>
      <CurveSeparator fill={"#231F20"} />
    </section>
  );
}
