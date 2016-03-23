import React, { Component } from 'react';
import ProjectView from '../components/projectView';
import Markdown from 'react-remarkable';
import SingleCol from '../components/singleCol';

export default class ReduxPage extends Component{
  render(){
    const details = {
      title:"Redux Talk",
      date:"March 2016",
      technologies:["react", "express", "mysql", "redux"],
      description:"slides and demo for meetup talk on react and redux"
    }
    return <ProjectView details={details}
                        imageUrl="/images/yosemite-ig.jpg">
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
