import React from 'react';
import classnames from 'classnames';
import style from './style.css';

class Button extends React.Component{

  handleMouseUp = (e) => {
    this.buttonNode.blur();
    if (this.props.onMouseUp) this.props.onMouseUp(e);
  };

  handleMouseLeave = (e) => {
    this.buttonNode.blur();
    if (this.props.onMouseLeave) this.props.onMouseLeave(e);
  };

  render() {

    const {children, className, disabled, href, label, type, ...rest} = this.props;
    const element = href ? 'a' : 'button';
    const classes = classnames(style.button, className);
    const props = {
      ...rest,
      href,
      ref: (node) => { this.buttonNode = node; },
      className: classes,
      disabled: disabled,
      onMouseUp: this.handleMouseUp,
      onMouseLeave: this.handleMouseLeave,
      target: href ? 'new' : null,
      type: !href ? type : null
    };

    return React.createElement(element, props,
      children
    );
  }
}

export default Button;
