import React, { Component } from 'react';
import ProjectView from '../components/projectView';
import Markdown from 'react-remarkable';
import SingleCol from '../components/singleCol';

export default class VaporPage extends Component{
  render(){
    const details = {
      title:"Vapor",
      date:"March 2016",
      technologies:["react", "express", "mysql", "redux"],
      description:"backbone app for in-house software development"
    }
    return <ProjectView details={details}
                        imageUrl="/images/vapor-banner.png">
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
