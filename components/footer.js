import React, { Component } from 'react';
import { Link } from 'react-router';
import '../_styles/footer.scss';

class FooterLinks extends Component{
  render(){
    return <div>
      <span className="footer-link"><Link to="/about">About</Link></span>
      <span className="footer-link"><Link to="/contact">Contact</Link></span>
      <span className="footer-link"><Link to="/blog">Blog</Link></span>
    </div>;
  }
}

class SocialLinks extends Component{
  render(){
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
      <div style={{padding:'0 10px 0 0'}}><a href="">linkedin</a></div>
      <div style={{padding:'0 10px', borderRight:'1px solid slategrey', borderLeft:'1px solid slategrey'}}><a href="">stackoverflow</a></div>
      <div style={{padding:'0 0 0 10px'}}><a href="">twitter</a></div>
    </div>;
  }
}

export default class Footer extends Component{
  render(){
    return <div id="footer">
      <div className="flex-parent-row start">
        <div className="left-side" style={{padding:'20px 0' }}>
          <div style={{marginBottom:'1em', color:'grey', textAlign:'left', fontWeight:500, fontSize:'.8em'}}>CONTACT ME</div>
          <div style={{letterSpacing:1}}>matt@mattbow.com</div>
          <SocialLinks />
        </div>
        <div className="flex-child-expand"></div>

        <div className="right-side" style={{paddingTop:20, textAlign:'right'}}>
          <div>v0.0.0</div>
          <div>last updated Mar 2 2016</div>
          <div>Austin, TX</div>
        </div>
      </div>
    </div>;
  }
}
