import React, { Component }from 'react';
import {Link} from 'react-router';
import '../_styles/projectPane.scss';

export default class ProjectPane extends Component{
  render(){
    const {imgSrc,projName,descript} = this.props;
    return <div className="project-pane">
      <div className="project-pic left">
        <img src={imgSrc} alt="project-pic" />
      </div>
      <Link to={this.props.url || '/'}>
        <div className="overlay-pane">
          <div className="proj-descript">
            <div className="flex-parent-row" style={{marginBottom:'.5em', width:'100%'}}>
              <div className="flex-child-expand" style={{fontSize:'1.3em'}}>{projName}</div>
              <div className="icon-arrow icon-lg"></div>
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
