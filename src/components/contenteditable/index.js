import React, { Component } from 'react';

export default class ContentEditable extends Component {

  shouldComponentUpdate(nextProps, nextState) {
    return nextProps.html !== this.elem.innerHTML;
  }

  onChange = (ev) => {
    const value  = this.elem.innerHTML;
    this.props.onChange(ev, value);
  }

  onKeyDown = (ev) => {
    if (ev.keyCode === 13){
      document.execCommand('formatBlock', false, 'p');
      return false ;
    }
  }

  onPaste = (ev) => {
    const { onPaste } = this.props;

    ev.preventDefault();
    let text = ev.clipboardData.getData("text/plain");
    text = this.stripHtml(text);
    document.execCommand('insertText', false, text);
    document.execCommand('formatBlock', false, 'p');

    if (onPaste) {
      onPaste(ev);
    }
  }

  stripHtml (html) {
    var pattern = /<\S[^><]*>/g;
    var text = html.replace(pattern, "");
    return text.replace('&nbsp;', '');
  }

  render () {
    const { tagName, html, contentEditable, ...props } = this.props;

    const Element = tagName || "div";

    return (
      <Element
        {...props}
        ref={(elem) => { this.elem = elem }}
        dangerouslySetInnerHTML={{ __html: html }}
        contentEditable={ contentEditable === 'false' ? false : true }
        onInput={ this.onChange }
        onPaste={ this.onPaste }
        onKeyDown={ this.onKeyDown }
      />
    )
  }
}
