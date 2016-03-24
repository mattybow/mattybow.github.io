import React, { Component } from 'react';
import { Link } from 'react-router';
import cx from 'classnames'
import '../_styles/homeCopy.scss';

export default class HomeCopy extends Component{
  render(){
    const { header, subtext, btnText, light } = this.props;

    const classes = cx("homeCopy",
      this.props.className,
      {
      light : light
    });
    return <div className={classes}>
      <div className="container" style={{paddingRight:'2em'}}>
        <div className="copy-header">
          <h2>{header}</h2>
        </div>
        <div className="short-hr"></div>
        <div className="copy-body">
          <p>{subtext}
          </p>
        </div>
      </div>
    </div>;
  }
}
