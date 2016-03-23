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
      description:"Business website and content management system made with meteorJs"
    }
    return <ProjectView details={details}
                        imageUrl="https://scontent.cdninstagram.com/t51.2885-15/e15/10946620_1595655620676469_1929700559_n.jpg">
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
