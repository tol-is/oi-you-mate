import React from "react";
import PropTypes from "prop-types";
import classnames from 'classnames';
import jsonp from "jsonp";

import OiShare from '../../components/oi_share';
import InputText from '../../components/input_text';
import Button from '../../components/button';
import style from './style.css';

const getAjaxUrl = url => url.replace('/post?', '/post-json?')

class SubscribeForm extends React.Component {
  constructor(props, ...args) {
    super(props, ...args)
    this.state = {
      status: 'default',
      msg: null
    }
  }
  onSubmit = e => {
    e.preventDefault()
    if (!this.input || !this.input.value || this.input.value.length < 5 || this.input.value.indexOf("@") === -1) {
      this.setState({
        status: "error",
        msg: "Please enter a valid email"
      })
      return
    }
    const url = getAjaxUrl(this.props.action) + `&EMAIL=${encodeURIComponent(this.input.value)}`;

    this.setState(
      {
        status: "sending",
        msg: null
      }, () => jsonp(url, {
        param: "c"
      }, (err, data) => {

        if (err) {
          this.setState({
            status: 'error',
            msg: "Something went wrong, please try again."
          })
        } else if (data.result !== 'success') {
          this.setState({
            status: 'error',
            msg: "Email is already registered"
          })
        } else {
          this.setState({
            status: 'success'
          })
        }
      })
    )
  }

  renderForm(){
    const { action } = this.props
    const { status, msg } = this.state

    return (
      <form action={action} method="post" noValidate className={style.form}>
        <div className={style.input_row}>
          <InputText
            ref={node => (this.input = node ? node.input : null)}
            placeholder="your@email.here"
            required={true}
            type="email"
            name="email"
          />
          <Button
            onClick={this.onSubmit}
            type="submit" >
            Licence Me!
          </Button>
        </div>
        <span className={style.error}>{msg}</span>
      </form>
    );
  }

  renderThanks(){
    return (
      <div>
        <Button className={style.success_thanks}>
          Cheers!
        </Button>
        <p><strong>Your download link is waiting in your inbox!</strong><br/>Love it? Don’t forget to share Oi! with your friends!</p>
        <OiShare size={2}/>
      </div>
    )
  }

  render() {
    const { className } = this.props
    const { status } = this.state
    return (
      <div className={className}>
        {status !== 'success' ? this.renderForm() : this.renderThanks() }
      </div>
    )
  }
}

export default SubscribeForm
