import React, { Component } from 'react';
import ProjectView from '../components/projectView';

export default class ReduxPage extends Component{
  render(){
    const details = {
      title:"Redux Talk",
      date:"March 2016",
      technologies:["react", "express", "mysql", "redux"],
      description:"ajdsflasdj asdfljasldf asld;kfjas al;sdfja asdfdjk"
    }
    return <ProjectView details={details}
                        imageUrl="/images/yosemite-ig.jpg">
      <div></div>
    </ProjectView>
  }
}
