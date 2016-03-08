import React, { Component } from 'react';
import { Link } from 'react-router';

class ProjectHolder extends Component{
  render(){
    return <div style={{
        backgroundColor:'rgba(0,0,0,.1)',
        width:'31.333%',
        height:300,
        margin:"1%"
      }}></div>
  }
}

export default class ProjectsPage extends Component{
  render(){
    return <div style={{height:"100%"}}>
      <Link to="/">
        <div>Projects</div>
      </Link>
      <div style={{padding:'5%'}}>
        <div className="flex-parent-row wrap">
          <ProjectHolder/>
          <ProjectHolder/>
          <ProjectHolder/>
          <ProjectHolder/>
          <ProjectHolder/>
          <ProjectHolder/>
          <ProjectHolder/>
          <ProjectHolder/>
          <ProjectHolder/>
          <ProjectHolder/>
          <ProjectHolder/>
          <ProjectHolder/>
        </div>
      </div>
    </div>;
  }
}
