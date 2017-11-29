import React from 'react';
import style from './style.css';
import classnames from 'classnames';
import Carousel from '../../components/slideshow';
import OiType from '../../components/oi_type';

import EnglishSlide from './slides/english';
import GreekSlide from './slides/greek';
import SymbolsSlide from './slides/symbols';

class Characters extends React.Component{
  render () {
    return (
      <section className={style.oi_page}>
        <div className={style.content_wrap}>
          <Carousel>
            <EnglishSlide />
            <GreekSlide />
            <SymbolsSlide />
          </Carousel>
        </div>
      </section>
    );
  }
}

export default Characters
