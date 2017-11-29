import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import OiType from '../../components/oi_type';
import Button from '../../components/button';
import style from './style.css';
import oi_theme from './oi_theme.css';
import CurveSeparator from '../../components/curve_separator';

import SubscriptionForm from '../../components/mailchimp_subscribe';

class DownloadSection extends Component {

  render () {
    return (
      <section className={style.oi_page}>
        <div className={style.content_wrap}>
          <div className={style.subscribe}>
            <h1 className={style.page_title}><OiType  className={style.h1} theme={oi_theme}>get it!</OiType></h1>
            <p><strong>Enter your email to receive<br/>YOUR FREE LICENCE!</strong></p>
            <p>Licence inlcudes 3 desktop users and up to<br/>10.000 web visitors per month.</p>
            <p><i>If you need to upgrade your licence <br/><a href="mailto:hi@kostasbartsokas.com"><strong>get in touch</strong></a> to get a custom quote.</i></p>
            <SubscriptionForm
              className={style.form}
              action={'https://kostasbartsokas.us17.list-manage.com/subscribe/post?u=16eb7135dcefd91b4164e4386&id=e615b56b62'}
            />
          </div>
          <div className={style.donate}>
            <h1><OiType  className={style.h1} theme={oi_theme}>$</OiType></h1>
            <Button className={style.donate_btn} href={"https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=A2TQH5Z3AUBT8"}>Donate</Button>
            <p>If you’d like to show your appreciation and <br/>help me spend more time to improve and <br/>add further script support to Oi! <br/>(i.e. Cyrillic!)</p>
          </div>
        </div>
      </section>
    );
  }
}

export default DownloadSection

//https://www.labnol.org/internet/social-payments/27898/
//https://codepen.io/akashnimare/pen/XMozEo
