import React, { Component } from 'react';
import classnames from 'classnames/dedupe';
import PropTypes from 'prop-types';
import style from './style.css';
import { Textfit } from 'react-textfit';
import ContentEditable from '../contenteditable';

const emptyString = "Try me";

class OiType extends Component {

  state = {
    value: ''
  }

  static propTypes = {
    placeholder  : PropTypes.string,
    value        : PropTypes.string,
    you          : PropTypes.bool,
    mate         : PropTypes.bool,
    calt         : PropTypes.bool,
    kern         : PropTypes.bool,
    dlig         : PropTypes.bool,
    zero         : PropTypes.bool,
    caps         : PropTypes.bool,
    lh           : PropTypes.number,
    min          : PropTypes.number,
    max          : PropTypes.number,
    fit          : PropTypes.bool,
    multi        : PropTypes.bool,
    editable     : PropTypes.bool,
    className    : PropTypes.string,
    onChange     : PropTypes.func,
    theme : PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.object
    ]),
    children : PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
      PropTypes.element,
    ])
  }

  static defaultProps = {
    placeholder: 'Try me',
    you   : true,
    mate  : false,
    calt  : true,
    kern  : true,
    dlig  : false,
    zero  : false,
    caps  : false,
    ss01  : false,
    ss02  : false,
    min   : 32,
    max   : 400,
    fit   : false,
    multi : false,
    onChange : null,
    theme : {
      oi : {},
      you : {},
      mate : {}
    }
  }

  shouldComponentUpdate () {
    return true;
  }

  componentDidMount() {
    const { editable, placeholder } = this.props;
    if (!editable) return;

    setTimeout(()=>{
      this.setState({value: placeholder});
    },100);
  }

  onChange = (ev, value) => {
    this.setState({ value })
  }

  renderYouMate () {
    const { children, you, mate, theme, kern, calt, dlig, caps, zero, ss01, ss02, lh,
      className, onChange, editable, onMouseEnter, onMouseLeave } = this.props;

    // TODO OPTIMIZE THIS
    const main_classes = classnames(style.oi, theme.oi, className,{
      [style.caps] : caps,
    });



    // font-feature-settings: 'kern', 'calt', 'zero', 'dlig', 'caps' on;

    // "smcp" 1, "onum" 1;

    // -webkit-font-feature-settings: "smcp" 1;
    // -moz-font-feature-settings:    "smcp" 1;
    // -ms-font-feature-settings:     "smcp" 1;
    // font-feature-settings:         "smcp" 1;

    const you_classes = classnames(style.you, theme.you);
    const mate_classes = classnames(style.mate, theme.mate);

    const enable_kern = kern ? 1 : 0;
    const enable_calt = calt ? 1 : 0;
    const enable_dlig = dlig ? 1 : 0;
    const enable_caps = caps ? 1 : 0;
    const enable_zero = zero ? 1 : 0;
    const enable_ss01 = ss01 ? 1 : 0;
    const enable_ss02 = ss02 ? 1 : 0;

    const font_feature_settings = `"kern" ${enable_kern}, "calt" ${enable_calt}, "dlig" ${enable_dlig},
      "case" ${enable_caps}, "zero" ${enable_zero}, "ss01" ${enable_ss01}, "ss02" ${enable_ss02}`;

    const oi_style = {
      lineHeight: `${lh}em`,
      fontFeatureSettings: font_feature_settings,
      WebkitFontFeatureSettings: font_feature_settings,
      MozFontFeatureSettings: font_feature_settings
    };

    if (editable) {
      const value = this.state.value;
      return (
        <div className={main_classes} style={oi_style} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
          { you ? <ContentEditable
            html={value}
            className={you_classes}
            onChange={this.onChange}
            spellCheck={false}
          /> : null }
          { mate ? (<ContentEditable
            html={value}
            className={mate_classes}
            spellCheck={false}
          />) : null }
        </div>
      )
    }

    return (
      <div className={main_classes} style={oi_style} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
        { you ? <span className={you_classes}>{children}</span> : null }
        { mate ? (<span aria-hidden="true" className={mate_classes}>{children}</span>) : null }
      </div>
    );
  }


  render() {
    const { fit, multi, min, theme, max, ...rest } = this.props;

    if (fit) {
      const fit_classes = classnames(style.textfit, theme.textfit);
      const mode = multi ? "multi" : "single";
      const forceWidth = multi ? true : true;
      return <Textfit className={fit_classes} mode={mode} forceSingleModeWidth={forceWidth} min={min} max={max}>{this.renderYouMate()}</Textfit>;
    }
    else {
      return (this.renderYouMate());
    }
  }
}

export default OiType;
