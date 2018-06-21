import React from 'react';
import { Textfit } from 'react-textfit';
import CurveSeparator from '../../components/curve_separator';
import style from './style.css';

export default () => {
  return (
    <footer className={style.oi_footer}>
      <CurveSeparator above={true} fill={"#0A1526"} />
      <div className={style.footer_wrap}>
        <p className={style.footer_header}>It ain't<br/>over<br/>till the<br/>fat lady<br/>sings</p>
        <p>
        Body type is set in <strong><a target="_blank" href="https://www.myfonts.com/fonts/intelligent-foundry/averta/">Averta</a></strong><br/>
        Html by <strong><a  target="_blank" href="https://github.com/tol-is">tol-is</a></strong><br/>
        <strong>Special thanks to <a target="_blank"href="http://www.gerardunger.com/">Dr. Gerard Unger</a> and <a target="_blank" href="http://www.shaniavni.com/">Shani Avni.</a></strong></p>
        <p><a  target="_blank"href="https://kostasbartsokas.com/">Kostas Bartsokas</a> © 2017</p>
      </div>
    </footer>
  );
}
