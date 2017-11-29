import React, { Component } from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import style from './style.css';

class Slider extends Component {

  state = {
    value: 50
  }

  static defaultProps = {
    label: 'input-checkbox',
    title: 'Check',
    checked: false,
    onChange: null
  };

  static propTypes = {
    onChange: PropTypes.func
  };

  onChange = (e) => {
    const value = Number.parseFloat(e.target.value);
    const { onChange } = this.props;

    this.setState({value});

    if (onChange)
      onChange(value);
  }


  render() {
    const handle_style = {
      left: `${this.state.value}%`
    };
    return (
      <div className={style.slider}>
        <div className={style.slider_icon}>
          <span/><span/><span/>
        </div>
        <div className={style.slider_input_wrap}>
          <div className={style.slider_input}>
            <span className={style.slider_handle} style={handle_style}/>
            <span className={style.slider_bar}/>
            <input onChange={this.onChange} type="range" min="0" max="100" value="50" step="1" id="fader"/>
          </div>
        </div>
      </div>
    );
  }
}
//<input type="range" min="-100" max="100" value="0" step="1" id="fader"/>
export default Slider;
/*
*/
// 2 - 0.5
