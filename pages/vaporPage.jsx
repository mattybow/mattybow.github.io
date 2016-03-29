import React, { Component } from 'react';
import ProjectView from '../components/projectView';
import Markdown from 'react-remarkable';
import SingleCol from '../components/singleCol';
import ArticleImg from '../components/articleImg';

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
          <div className="project-text-heading">BACKGROUND</div>
          <Markdown>
            write up coming soon
            {"\n"}
          </Markdown>
          <div className="project-text-heading">IMPLEMENTATION</div>
        </SingleCol>
        <ArticleImg src="/images/vapor-main.png" width="50%" screenShot={true}/>
        <ArticleImg src="/images/vapor-release-tab.png" width="50%" screenShot={true}/>
      </div>
    </ProjectView>
  }
}
