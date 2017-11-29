import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import style from './App.css'

import Scroll from 'react-scroll';

import Header from './sections/header';
import Intro from './sections/intro';
import About from './sections/about';
import CtaGetIt from './sections/cta_get_it';
import CtaSpecimen from './sections/cta_specimen';
import TesterMate from './sections/tester_mate';
import CharactersCarousel from './sections/characters_carousel';
import IntersitialYouMate from './sections/intersitial_you_mate';
import IntersitialLoud from './sections/intersitial_loud';
import ExamplesCarousel from './sections/examples_carousel';
import CharactersWaterfall from './sections/characters_waterfall';
import TesterNumbers from './sections/tester_numbers';
import TesterCaps from './sections/tester_caps';
import TesterLigatures from './sections/tester_ligatures';
import Download from './sections/download';
import Footer from './sections/footer';

const scroll = Scroll.animateScroll;


class App extends Component {

  onCtaGetIt = () => {
    // get download offset top
    const posY = ReactDOM.findDOMNode(this.download).offsetTop;
    scroll.scrollTo(posY);
  }

  onGotoAbout = () => {
    // get about offset top
    const posY = ReactDOM.findDOMNode(this.about).offsetTop;
    scroll.scrollTo(posY);
  }

  render() {
    return (
        <div className={style.app}>
          <Header />
          <Intro onClick={this.onGotoAbout}/>
          <IntersitialYouMate/>
          <About ref={(node) => this.about = node} />
          <CtaGetIt onClick={this.onCtaGetIt}/>
          <TesterMate />
          <CharactersCarousel />
          <IntersitialLoud />
          <ExamplesCarousel/>
          <CharactersWaterfall/>
          <CtaSpecimen/>
          <TesterNumbers/>
          <TesterCaps/>
          <TesterLigatures/>
          <Download ref={(node) => this.download = node}/>
          <Footer />
        </div>
    );
  }
}

export default App;
