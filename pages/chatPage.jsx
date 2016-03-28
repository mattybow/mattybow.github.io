import React, { Component } from 'react';
import ProjectView from '../components/projectView';
import Markdown from 'react-remarkable';
import SingleCol from '../components/singleCol';
import ArticleImg from '../components/articleImg';


export default class ChatPage extends Component{
  render(){
    const details = {
      title:"Chat App",
      date:"March 2016",
      technologies:["react", "express", "mysql", "redux"],
      description:"simple real-time messaging app",
      site:"http://babel-alpha-chat1.herokuapp.com/"
    }
    return <ProjectView details={details}
                        imageUrl="/images/avocadyo-banner.png">
      <div className="project-text">
        <SingleCol>
          <div className="project-text-heading">BACKGROUND</div>
          <Markdown>
            write up coming soon
            {"\n"}
            <ArticleImg src="/images/chat-sc1.png" width="80%" screenShot={true}/>
          </Markdown>
        </SingleCol>
      </div>
    </ProjectView>
  }
}
