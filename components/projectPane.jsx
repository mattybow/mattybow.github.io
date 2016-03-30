import React, { Component }from 'react';
import {Link} from 'react-router';
import cx from 'classnames';
import '../_styles/projectPane.scss';

export default class ProjectPane extends Component{
  render(){
    const {imgSrc,projName,descript,className} = this.props;
    return <div className={cx("project-pane",className)}>
      <div className="project-pic">
        <img className="desktop-only" src={imgSrc} alt="project-pic" />
        <div className="mobile-only"
             style={{
               backgroundImage:`url("${imgSrc}")`,
               backgroundSize:'cover',
               position:'absolute',top:0,bottom:0,left:0,right:0
             }}></div>
      </div>
      <Link to={this.props.url || '/'}>
        <div className="overlay-pane">
          <div className="proj-descript">
            <div className="flex-parent-row" style={{marginBottom:'.5em', width:'100%'}}>
              <div className="flex-child-expand" style={{fontSize:'1.3em'}}>{projName}</div>
              <div className="icon-arrow icon-lg" style={{
                  marginRight:'-1em'
                }}></div>
            </div>
            <div className="descript-line"></div>
            <div style={{fontSize:'.8em', width:'50%'}}>{descript}</div>
          </div>
          <div className="overlay-bg"></div>
        </div>
      </Link>
    </div>;
  }
}
