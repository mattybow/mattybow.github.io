import React, { Component } from 'react';
import ProjectView from '../components/projectView';

export default class GfyPage extends Component{
  render(){
    const details = {
      title:"Gfy-cat",
      date:"March 2016",
      technologies:["react", "express", "mysql", "redux"],
      description:"ajdsflasdj asdfljasldf asld;kfjas al;sdfja asdfdjk"
    }
    return <ProjectView details={details}
                        imageUrl="/images/gfy-cat_sc1.png">
      <div></div>
    </ProjectView>
  }
}
