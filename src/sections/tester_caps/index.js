import React from 'react';
import style from './style.css';
import oi_theme from './oi_theme.css';
import CurveSeparator from '../../components/curve_separator';
import OiType from '../../components/oi_type';
import Checkbox from '../../components/checkbox';

class TesterCaps extends React.Component{

  state = {
    mate : false,
    caps : false,
    zero : false,
    dlig : false,
    ss02 : false
  }

  onChange = (field, value) => {
    this.setState({ [field]: value });
  }

  render () {
    const { mate, caps, zero, dlig, ss02 } = this.state;

    const placeholder = 'Άυλες \n αυλές \n ή παϊδάκια \n για τα παιδιά!';
    return (
      <section className={style.oi_page}>
        <div className={style.content_wrap}>
          <div className={style.type_wrapper}>
            <OiType editable fit multi mate={mate} caps={caps} zero={zero} dlig={dlig} ss02={ss02} min={32} max={180} theme={oi_theme} placeholder={placeholder}></OiType>
          </div>
          <div className={style.controls_wrapper}>
            <div><Checkbox onChange={this.onChange} title="CAPS" label="caps" /></div>
            <div><Checkbox onChange={this.onChange} title="SS02" label="ss02" /></div>
          </div>
        </div>
      </section>
    );
  }
};

export default TesterCaps;



