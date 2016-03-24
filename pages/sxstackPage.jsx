import React, { Component } from 'react';
import ProjectView from '../components/projectView';
import Markdown from 'react-remarkable';
import SingleCol from '../components/singleCol';

export default class SxstackPage extends Component{
  render(){
    const details = {
      title:"Sxstack",
      date:"March 2016",
      technologies:["react", "express", "mysql", "redux"],
      description:"react reflux app for south by attendees scheduling when to see artists",
      site:"http://sxmusiclist.herokuapp.com/"
    }
    return <ProjectView details={details}
                        imageUrl="/images/sxstack-banner.png">
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
