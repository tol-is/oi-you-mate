import React from 'react';
import classnames from 'classnames';
import OiType from '../../components/oi_type';
import style from './style.css';
import CurveSeparator from '../../components/curve_separator';
import { Grid, Row, Col } from 'react-flexbox-grid';

export default () => {

  const theme = {
    oi: style.oi,
    you: style.you,
    mate: style.mate,
  };

  return (
    <section className={style.oi_page}>
      <CurveSeparator above={true} fill={"#ffffff"} />
      <div className={style.content_wrap}>
        <Grid>
          <Row>
            <Col xs={12} sm={12} md={6} lg={6} className={style.col_one}>
              <OiType theme={theme} className={style.oi_row_1_1} >kêrel</OiType>
              <OiType theme={theme} className={style.oi_row_1_2} >đačić</OiType>
              <OiType theme={theme} className={style.oi_row_1_3} >grüßen</OiType>
              <OiType theme={theme} className={style.oi_row_1_4} >småøer</OiType>
              <OiType theme={theme} className={style.oi_row_1_5} >papağını</OiType>
              <OiType theme={theme} className={style.oi_row_1_6} >fuŝĥoraĵo</OiType>
              <OiType theme={theme} className={style.oi_row_1_7} >gabonaőrlő</OiType>
              <OiType theme={theme} className={style.oi_row_1_8} >przyjeżdżają</OiType>
            </Col>
            <Col xs={12} sm={12} md={6} lg={6} className={style.col_two}>
              <OiType theme={theme} className={style.oi_row_2_1} >WÎE</OiType>
              <OiType theme={theme} className={style.oi_row_2_2} >FÊTE</OiType>
              <OiType theme={theme} className={style.oi_row_2_3} >ZƏFƏR</OiType>
              <OiType theme={theme} className={style.oi_row_2_4} >MAĦFRA</OiType>
              <OiType theme={theme} className={style.oi_row_2_5} >STJÅLET</OiType>
              <OiType theme={theme} className={style.oi_row_2_6} >APĢĒRBS</OiType>
              <OiType theme={theme} className={style.oi_row_2_7} >OCTAÈDRIC</OiType>
            </Col>
          </Row>
        </Grid>
      </div>
      <CurveSeparator fill={"#ffffff"} />
    </section>
  );
}
