import React, { Component } from 'react';
import { Link } from 'react-router';
import '../_styles/footer.scss';
import '../_styles/important.scss';

var SocialLinks = (props) => {
  var outerStyle ={
    padding:'50px 40px 10px'
  }

  var style = {
    display:'inline-block',
    fontSize:'1.5em',
  };
//,"icon-github-circled","icon-stackoverflow"
  var iconClasses = ["icon-twitter","icon-linkedin"];
  var icons = iconClasses.map( iconClass => (<span className="circled">
    <span className={iconClass}></span>
  </span>));

  return <div className="flex-row-parent social-links">
    <div className="social-link"><a href="https://www.linkedin.com/in/mattybow" target="_blank">linkedin</a></div>
    <div className="social-link">
      <a href="http://stackoverflow.com/cv/mattybow" target="_blank">stackoverflow</a>
    </div>
    <div className="social-link"><a href="https://github.com/mattybow" target="_blank">github</a></div>
  </div>;

}

export default class Footer extends Component{
  render(){
    return <div id="footer">
      <div className="flex-parent-row start">
        <div className="left-side" style={{padding:'20px 0' }}>
          <div style={{color:'grey', textAlign:'left'}}>
            <span style={{fontWeight:500, fontSize:'.8em'}}>CONTACT ME</span>
          </div>
          <div style={{letterSpacing:1}}><a href="mailto:matt@mattbow.com">matt@mattbow.com</a></div>
          <SocialLinks />
        </div>
        <div className="flex-child-expand"></div>

        <div className="right-side" style={{padding:'20px 0', textAlign:'right'}}>
          <div>v0.0.0</div>
          <div>last updated Mar 31 2016</div>
          <div>Austin, TX</div>
        </div>
      </div>
    </div>;
  }
}
