import React, { Component } from 'react';
import '../_sass/_font-icons.scss';

export default class SocialLinks extends Component{
  render(){
    var outerStyle ={
      padding:'50px 40px 10px'
    }

    var style = {
      display:'inline-block',
      fontSize:'1.5em',
      marginLeft:'auto',
      width:'100%',

    };
//,"icon-github-circled","icon-stackoverflow"
    var iconClasses = ["icon-twitter","icon-linkedin"];
    var icons = iconClasses.map( iconClass => (<div className="circled">
      <span className={iconClass}></span>
    </div>));

    return <div style={outerStyle}>
      Get in touch
      <div style={style}>
        {icons}
      </div>
    </div>;
  }
}
