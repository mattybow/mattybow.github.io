import React, { Component } from 'react';
import ProjectView from '../components/projectView';
import Markdown from 'react-remarkable';
import SingleCol from '../components/singleCol';

export default class ViaPage extends Component{
  render(){
    const details = {
      title:"via gelato hawaii",
      date:"October 2015",
      technologies:["meteor", "heroku", "mongo", "aws"],
      description:"Business website and content management system made with meteorJs",
      site:"http://www.viagelatohawaii.com/"
    }
    return <ProjectView details={details}
                        imageUrl="/images/via-banner.jpg">
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
