import colors from '../../styles/variables.css';
import React from 'react';
import style from './style.css';
import theme from './theme.css';
import OiType from '../../components/oi_type';
import CurveSeparator from '../../components/curve_separator';

import {
  OiArrowDown } from '../../components/oi_type/arrows';

class IntroPage extends React.PureComponent {
  render() {
    const { onClick } = this.props;

    return (
      <section className={style.oi_page}>
        <div className={style.content_wrap}>
          <h1 className={style.h1}>
            <OiType mate dlig zero theme={theme}>oi!</OiType>
          </h1>
          <p className={style.by}>by <a target="_blank" href="https://kostasbartsokas.com/">Kostas Bartsokas</a></p>
          <p className={style.description}>A clarendonesque on steroids</p>
        </div>
        <button className={style.arrow_down} onClick={onClick}><OiArrowDown /></button>
        <CurveSeparator fill={"#ED1651"} />
      </section>
    );
  }
}

export default IntroPage;
