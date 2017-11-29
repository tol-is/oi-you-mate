import React, { Component } from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import style from './style.css';

class Checkbox extends Component {

  static defaultProps = {
    label: 'input-checkbox',
    title: 'Check',
    checked: false,
    onChange: null
  };

  static propTypes = {
    label: PropTypes.string,
    checked: PropTypes.bool,
    title: PropTypes.string,
    onChange: PropTypes.func
  };

  constructor(props) {
    super(props);

    this.state = {
      isChecked: props.checked
    };
  }

  onChange = () => {
    const { onChange, label } = this.props;

    const { isChecked } = this.state;

    this.setState({
      isChecked: !isChecked,
    });

    if (onChange)
      onChange(label, !isChecked);
  }

  render() {
    const { label, title } = this.props;
    const { isChecked } = this.state;

    const checked_classes = classnames(style.oi_checkbox_input_check, {
      [style.check_checked] : isChecked
    });

    return (
      <div className={style.oi_checkbox}>
        <label className={style.checkbox_label}>
          <input
            className={style.checkbox_input}
            type="checkbox"
            value={label}
            checked={isChecked}
            onChange={this.onChange}
          />
          {title}
        </label>
        <span className={style.oi_checkbox_input_bg} />
        <span className={style.oi_checkbox_label} >{title}</span>
        <span className={checked_classes} />
      </div>
    );
  }
}

export default Checkbox;
