import React from 'react';
import style from './style.css';
import classnames from 'classnames';
import Carousel from '../../components/slideshow';
import OiType from '../../components/oi_type';

import BubbleSlide from './slides/bubble';
import KeratoSlide from './slides/kerato';
import LalaSlide from './slides/lala';

class Characters extends React.Component{
  render () {
    return (
      <section className={style.oi_page}>
        <div className={style.content_wrap}>
          <Carousel>
            <BubbleSlide />
            <KeratoSlide />
            <LalaSlide />
          </Carousel>
        </div>
      </section>
    );
  }
}

export default Characters
