import React from 'react';
import style from './style.css';
import classnames from 'classnames';
import Carousel from 'nuka-carousel';
import OiType from '../oi_type';

const btnPrev = ({previousSlide, currentSlide, slideCount}) => {
  const isActive = currentSlide > 0;
  const btn_classes = classnames(style.slideshow_btn_prev, {
    [style.slideshow_btn_disabled_prev]: !isActive
  })
  return (<button className={btn_classes} onClick={previousSlide}><OiType><span>{"←"}</span></OiType></button>);
}
const btnNext = ({nextSlide, currentSlide, slideCount}) => {
  const isActive = currentSlide < slideCount - 1;
  const btn_classes = classnames(style.slideshow_btn_next, {
    [style.slideshow_btn_disabled_next]: !isActive
  })
  return (<button className={btn_classes} onClick={nextSlide}><OiType><span>{"→"}</span></OiType></button>);
}

const decorators = [
  {
    component: btnPrev,
    position: 'CenterLeft'
  },
  {
    component: btnNext,
    position: 'CenterRight'
  }
];

export default ({children}) => {
  return (
    <Carousel className={style.carousel} easing="easeOutExpo" speed={400} decorators={decorators}>
      {children}
    </Carousel>
  )
};
