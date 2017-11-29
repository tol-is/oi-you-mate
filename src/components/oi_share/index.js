import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import style from './style.css';
import OiType from '../oi_type';

import {
  ShareButtons
} from 'react-share';

const {
  FacebookShareButton,
  TwitterShareButton,
  PinterestShareButton
} = ShareButtons;

const OiShare = ({size=1.1}) => {

  const theme_fcbk = {
    oi: style.oi,
    you: style.you,
    mate: style.mate_facebook,
  };

  const theme_twtr = {
    oi: style.oi,
    you: style.you,
    mate: style.mate_twitter,
  };

  const theme_pntrst = {
    oi: style.oi,
    you: style.you,
    mate: style.mate_pinterest
  };

  const custom_style = {
    fontSize: `${size}rem`
  };

  const share_url = "http://oi-you-mate.firebaseapp.com";
  const share_message = "Oi! Check out this amazing free ultra-fat display typeface!";
  const share_hashtags_array = ["#typography", '#clarendonesque', 'display'];

  return [
    <FacebookShareButton key="facebook-share" style={custom_style} className={style.share_link} url={share_url} quote={share_message}>
      <OiType mate theme={theme_fcbk}>f</OiType>
    </FacebookShareButton>,
    <TwitterShareButton key="twitter-share" style={custom_style} className={style.share_link} url={share_url} title={share_message} hashtags={share_hashtags_array}>
      <OiType mate theme={theme_twtr}>t</OiType>
    </TwitterShareButton>
  ];
}

export default OiShare;
