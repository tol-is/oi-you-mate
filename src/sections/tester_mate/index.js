import React from 'react';
import style from './style.css';
import oi_theme from './oi_theme.css';
import CurveSeparator from '../../components/curve_separator';
import OiType from '../../components/oi_type';
import Checkbox from '../../components/checkbox';
import Slider from '../../components/slider';

class TesterMate extends React.Component{

  state = {
    lh: 50,
    mate : true,
    caps : false,
    zero : false,
    dlig : false,
    ss01 : false,
    ss02 : false,
  }

  onChange = (field, value) => {
    this.setState({ [field]: value });
  }

  onLineHeightChange = (value) => {
    this.setState({lh: value });
  }

  render () {
    const { mate, caps, zero, dlig, ss01, ss02, lh } = this.state;

    const oi_line_height = 0.5 + (lh /100);

    return (
      <section className={style.oi_page}>
        <CurveSeparator above={true} fill={"#9C1B51"} />
        <div className={style.content_wrap}>
          <div className={style.type_wrapper}>
            <OiType editable fit multi mate={mate} caps={caps} zero={zero} dlig={dlig} ss01={ss01} ss02={ss02} lh={oi_line_height} min={32} max={180} initial={120} theme={oi_theme} placeholder="TRY ME"></OiType>
          </div>
          <div className={style.controls_wrapper}>
            <div><Checkbox checked onChange={this.onChange} title="MATE" label="mate" /></div>
            <div><Checkbox onChange={this.onChange} title="CAPS" label="caps" /></div>
            <div><Checkbox onChange={this.onChange} title="DLIG" label="dlig" /></div>
            <div><Checkbox onChange={this.onChange} title="SS01" label="ss01" /></div>
            <div><Checkbox onChange={this.onChange} title="SS02" label="ss02" /></div>
            <div><Slider onChange={this.onLineHeightChange}/></div>
          </div>
        </div>
        <CurveSeparator fill={"#9C1B51"} />
      </section>
    );
  }
};

export default TesterMate;
