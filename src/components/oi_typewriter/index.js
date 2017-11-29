/*
  Thanks to https://github.com/adrianmcli/react-rotating-text
  all the typewriter logic is copied from there
*/

import React from 'react';
import PropTypes from 'prop-types';
import style from './style.css';
import OiType from '../oi_type';

class ReactRotatingText extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      index: 0,
      output: '',
      substrLength: 0,
    };
    this.timeouts = [];
  }

  componentDidMount() {
    this._animate.bind(this)();   // begin the animation loop
  }

  componentWillUnmount() {
    this.timeouts.map(x => clearTimeout(x));  // stop all the loops
  }

  _loop(loopingFunc, pause) {
    // save the timeouts so we can stop on unmount
    const timeout = setTimeout(loopingFunc, pause);
    this.timeouts.push(timeout);

    // prevent memory leak
    const maxTimeouts = 100;
    if (this.timeouts.length > maxTimeouts) {
      clearTimeout(this.timeouts[0]);
      this.timeouts.shift();
    }
  }

  _type(text, callback) {
    const { output } = this.state;
    const { typingInterval } = this.props;
    const loopingFunc = this._type.bind(this, text, callback);

    // set the string one character longer
    this.setState({output: text.substr(0, output.length + 1)});

    // if we're still not done, recursively loop again
    if (output.length < text.length) {
      this._loop(loopingFunc, typingInterval);
    } else {
      callback();
    }
  }

  _erase(callback) {
    const { output } = this.state;
    const { deletingInterval } = this.props;
    const loopingFunc = this._erase.bind(this, callback);

    // set the string one character shorter
    this.setState({output: output.substr(0, output.length - 1)});

    // if we're still not done, recursively loop again
    if (output.length !== 0) {
      this._loop(loopingFunc, deletingInterval);
    } else {
      callback();
    }
  };

  _overwrite(text, callback) {
    const { output, substrLength } = this.state;
    const { deletingInterval } = this.props;
    const loopingFunc = this._overwrite.bind(this, text, callback);

    this.setState({
      output: text.substr(0, substrLength) + output.substr(substrLength),
      substrLength: substrLength + 1,
    });

    if (text.length !== substrLength) {
      this._loop(loopingFunc, deletingInterval);
    } else {
      this.setState({
        output: text,
        substrLength: 0,
      });
      callback();
    }
  };

  _animate() {
    const { index } = this.state;
    const { labels, pause, emptyPause, eraseMode } = this.props;
    const type = this._type;
    const erase = this._erase;
    const overwrite = this._overwrite;
    const loopingFunc = this._animate.bind(this);
    const nextIndex = index === labels.length - 1 ? 0 : index + 1;

    const nextWord = () => {
      this.setState({index: nextIndex});
      this._loop(loopingFunc, emptyPause);
    };

    type.bind(this)(labels[index], () => {
      if (eraseMode === 'overwrite') {
        this._loop(overwrite.bind(this, labels[nextIndex], nextWord), pause);
      } else {
        this._loop(erase.bind(this, nextWord), pause);
      }
    });
  };

  render() {
    const {
      caps,
      mate,
      dlig,
      zero,
      theme,
      deletingInterval,
      emptyPause,
      labels,
      pause,
      eraseMode,
      typingInterval,
      ...other
    } = this.props;

    // TODO: this is rubbish, do something
    if(this.container) {
      this.container.style.display='none';
      this.container.offsetHeight;
      this.container.style.display='block';
    }

    return (
      <span ref={(node) => this.container = node}>
        <OiType caps={caps} mate={mate} dlig={dlig} zero={zero} theme={theme}>{ this.state.output }</OiType>
      </span>
    );
  }
}
ReactRotatingText.propTypes = {
  caps  : PropTypes.bool,
  mate  : PropTypes.bool,
  dlig  : PropTypes.bool,
  zero  : PropTypes.bool,
  theme : PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object
  ]),
  className : PropTypes.string,
  deletingInterval: PropTypes.number,
  emptyPause: PropTypes.number,
  eraseMode: PropTypes.string,
  labels: PropTypes.array,
  pause: PropTypes.number,
  typingInterval: PropTypes.number,
};

ReactRotatingText.defaultProps = {
  caps  : false,
  mate  : false,
  dlig  : false,
  zero  : false,
  deletingInterval: 50,
  emptyPause: 1000,
  eraseMode: 'erase',
  labels: ['first', 'second', 'third'],
  pause: 3000,
  typingInterval: 400,
  theme : {
    oi : {},
    you : {},
    mate : {}
  }
};

export default ReactRotatingText;
