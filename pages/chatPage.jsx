import React, { Component } from 'react';
import ProjectView from '../components/projectView';

export default class ChatPage extends Component{
  render(){
    const details = {
      title:"Chat App",
      date:"March 2016",
      technologies:["react", "express", "mysql", "redux"],
      description:"ajdsflasdj asdfljasldf asld;kfjas al;sdfja asdfdjk"
    }
    return <ProjectView details={details}
                        imageUrl="/images/avocadyo_horizontal.png">
      <div></div>
    </ProjectView>
  }
}
