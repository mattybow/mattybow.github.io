import React, { Component } from 'react';
import ProjectView from '../components/projectView';

export default class SxstackPage extends Component{
  render(){
    const details = {
      title:"Sxstack",
      date:"March 2016",
      technologies:["react", "express", "mysql", "redux"],
      description:"ajdsflasdj asdfljasldf asld;kfjas al;sdfja asdfdjk"
    }
    return <ProjectView details={details}
                        imageUrl="/images/sxstack_horizontal.png">
      <div></div>
    </ProjectView>
  }
}
