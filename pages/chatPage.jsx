import React, { Component } from 'react';
import ProjectView from '../components/projectView';
import Markdown from 'react-remarkable';
import SingleCol from '../components/singleCol';


export default class ChatPage extends Component{
  render(){
    const details = {
      title:"Chat App",
      date:"March 2016",
      technologies:["react", "express", "mysql", "redux"],
      description:"simple real-time messaging app"
    }
    return <ProjectView details={details}
                        imageUrl="/images/avocadyo_horizontal.png">
      <div className="project-text">
        <SingleCol>
          <div className="project-text-heading">CONCEPT</div>
          <Markdown>
            write up coming soon
            {"\n"}
          </Markdown>
        </SingleCol>
      </div>
    </ProjectView>
  }
}
