import React from 'react';
import style from './style.css';
import oi_theme from './oi_theme.css';
import CurveSeparator from '../../components/curve_separator';
import OiType from '../../components/oi_type';
import Checkbox from '../../components/checkbox';

class TesterNumbers extends React.Component{

  state = {
    mate : false,
    caps : false,
    zero : false,
    dlig : false
  }

  onChange = (field, value) => {
    this.setState({ [field]: value });
  }

  render () {
    const { mate, caps, zero, dlig } = this.state;

    const placeholder = '¿¡12.609 \n tweets \n only!?';
    return (
      <section className={style.oi_page}>
        <CurveSeparator above={true} fill={"#FF4F4F"} />
        <div className={style.content_wrap}>
          <div className={style.type_wrapper}>
            <OiType editable fit multi mate={mate} caps={caps} zero={zero} dlig={dlig} min={12} max={180} theme={oi_theme} placeholder={placeholder}></OiType>
          </div>
          <div className={style.controls_wrapper}>
            <div><Checkbox onChange={this.onChange} title="CAPS" label="caps" /></div>
            <div><Checkbox onChange={this.onChange} title="ZERO" label="zero" /></div>
          </div>
        </div>
        <CurveSeparator fill={"#FF4F4F"} />
      </section>
    );
  }
};

export default TesterNumbers;
