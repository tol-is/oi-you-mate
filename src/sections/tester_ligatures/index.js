import React from 'react';
import style from './style.css';
import oi_theme from './oi_theme.css';
import CurveSeparator from '../../components/curve_separator';
import OiTypewriter from '../../components/oi_typewriter';
import Checkbox from '../../components/checkbox';

class TesterLigatures extends React.Component{

  state = {
    caps : false,
    dlig : true
  }

  onChange = (field, value) => {
    this.setState({ [field]: value });
  }

  render() {

    const labels = [
      '––>>>>>>>>>>',
      '|>',
      '<––––––',
      '–>',
      '––>',
      '<|',
      '</',
      '<––',
      '<–',
      '/>'
    ];

    const { dlig } = this.state;

    return (
      <section className={style.oi_page}>
        <CurveSeparator above={true} fill={"#000000"} />
        <div className={style.content_wrap}>
          <div className={style.type_wrapper}>
            <OiTypewriter theme={oi_theme} dlig={dlig} mate={true} labels={labels}/>
          </div>
          <div className={style.controls_wrapper}>
            <Checkbox checked={true} onChange={this.onChange} title="DLIG" label="dlig" />
          </div>
        </div>
        <CurveSeparator fill={"#000000"} />
      </section>
    );
  }
}

export default TesterLigatures;
