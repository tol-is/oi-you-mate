import React from 'react';
import style from './style.css';
import { Grid, Row, Col } from 'react-flexbox-grid';
import OiType from '../../components/oi_type';
import CurveSeparator from '../../components/curve_separator';

class AboutPage extends React.PureComponent {
  render() {
    return (
      <section className={style.oi_page}>
        <CurveSeparator above={true} fill={"#ffffff"} />
        <div className={style.content_wrap}>
          <div>
            <Col xs={12} sm={12} mdOffset={2} md={8} lgOffset={3} lg={6} xlOffset={3} xl={6} className={style.col}>
              <p>Oi! is an ultra-fat display typeface that has its roots in grotesque slab serifs, most specifically the style that sprung with the release of Caslon’s Ionic in 1844 and Clarendon by Fann Street Foundry in 1845. </p>
              <p>Oi! is a free spirited twisted interpetation of the clarendonesques. With an unapologetic tendecy for public shouting, it is a whimsical loudmouth attention seeker! </p>
            </Col>
          </div>
          <div className={style.yellow_box}>
            <Col xs={12} sm={12} mdOffset={2} md={8} lgOffset={2} lg={8} xlOffset={2} xl={8}  className={style.col}>
              <p style={{orphans: 3}} ><i>Oi is an interjection used in various languages. Its meaning varies, depending on the tone and abruptness of its use, from a simple “hi” or a call of attention to as far as a challenge to a fight.</i></p>
            </Col>
          </div>
          <div>
            <Col xs={12} sm={12} mdOffset={2} md={8} lgOffset={3} lg={6} xlOffset={3} xl={6} className={style.col}>
              <p>Oi! supports <strong>Latin</strong> and <strong>Greek</strong> and comes in two styles. <strong>Oi! You!</strong>, the regular style, and its accompanying <strong>Oi! Mate!</strong>, a shadowed style that adds a third dimension to its playfulness.</p>
            </Col>
          </div>
        </div>
        <CurveSeparator fill={"#ffffff"} />
      </section>
    );
  }
}

export default AboutPage;
