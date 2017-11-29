import React from 'react';
import classnames from 'classnames';
import OiType from '../../components/oi_type';
import style from './style.css';

class YouMateIntersitial extends React.PureComponent {

  state = {
    you_mate: false,
    you_you: true,
    mate_you: false,
    mate_mate: true
  }

  onYouHover = () => {
    this.setState({
      you_mate:true,
      you_you:false
    });
  }

  onYouLeave = () => {
    this.setState({
      you_mate:false,
      you_you:true
    });
  }

  onMateHover = () => {
    this.setState({
      mate_you: true,
      mate_mate: false
    });
  }

  onMateLeave = () => {
    this.setState({
      mate_you: false,
      mate_mate: true
    });
  }

  render(){
    const theme = {
      oi: style.oi,
      you: style.you,
      mate: style.mate,
    };

    const {
      you_you,
      you_mate,
      mate_you,
      mate_mate
    } = this.state;

    return (
      <section className={style.oi_page}>
        <div className={style.content_wrap}>
          <OiType onMouseEnter={this.onYouHover} onMouseLeave={this.onYouLeave} you={you_you} mate={you_mate} className={style.oi_row_you} theme={theme}>you!</OiType>
          <OiType onMouseEnter={this.onMateHover} onMouseLeave={this.onMateLeave} you={mate_you} mate={mate_mate} className={style.oi_row_mate} theme={theme}>mate!</OiType>
        </div>
      </section>
    );
  }
}

export default YouMateIntersitial;
