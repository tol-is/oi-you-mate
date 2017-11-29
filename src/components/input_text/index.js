import React from 'react';

import style from './style.css';

class InputText extends React.Component{

  static defaultProps = {
    type: 'text',
    required: false,
    placeholder: 'Text Input'
  }

  render() {
    const { type, name, required, placeholder, value } = this.props;
    return (
      <input
        ref={node => (this.input = node)}
        type={type}
        className={style.input}
        defaultValue={value}
        name={name}
        required={required}
        placeholder={placeholder}
      />
    );
  }
}

export default InputText;
