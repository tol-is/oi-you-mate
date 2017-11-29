import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import style from './style.css';

class CurveSeparator extends PureComponent {

  static propTypes = {
    above : PropTypes.bool,
    pull : PropTypes.number,
    fill: PropTypes.string
  }

  static defaultProps = {
    above: false,
    fill: '#000000'
  }

  render () {
    const {above, pull, fill } = this.props

    const curve_classes = classnames(style.curve, {
      [style.curve_up] : above,
      [style.curve_down] : !above
    });

    const rand_pull = (Math.floor(Math.random() * 90) - 45) / 100;
    const curve_pull = pull ? pull : rand_pull;
    const curve_width = 600;
    const curve_half_point = 600 * 0.5;
    const control_point = curve_pull * curve_half_point + curve_half_point;
    const curve_path = `M0 0 C ${control_point} 30 ${control_point} 30 600 0 Z`;

    return (
      <svg className={curve_classes} fill={fill} version="1.1" width="100%" viewBox="0 0 600 30">
        <path d={curve_path} />
      </svg>
    );

  }
}

export default CurveSeparator;

 // <svg className={style.curve} fill="#ffff00" version="1.1" width="100%" viewBox="0 0 600 30">
 //    <path d="M0 0 C 300 30 300 30 600 0 Z" />
 //  </svg>
 //  //up
 //  <svg className={style.curve} fill="#000000" xmlns="http://www.w3.org/2000/svg" version="1.1" width="100%" viewBox="0 0 600 30">
 //    <path d="" />
 //  </svg>
 //  up
 //  <svg className={style.curve_up} fill="#000000" xmlns="http://www.w3.org/2000/svg" version="1.1" width="100%" viewBox="0 0 600 30">
 //      <path d="M0 0 C 300 30 600 30 600 0 Z" />
 //    </svg>

 //    <svg className={style.curve} fill="#000000" xmlns="http://www.w3.org/2000/svg" version="1.1" width="100%" viewBox="0 0 600 30">
 //      <path d="M0 0 C 00 30 300 30 600 0 Z" />
 //    </svg>
