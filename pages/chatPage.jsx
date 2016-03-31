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
            Fresh out of developing sql for Samsung Austin Semiconductor, I still
            wanted to maintain in touch with my former coworkers.  I decided to
            make a basic chat app to bypass SAS's
            websense web filter and experiment with [socket.io]("http://socket.io/")
            {"\n"}
            The app is very barebones.  It only really works with a persistent
            connection.  Once the connection is lost, the user is shown to have left
            the chat.  I could have used firebase to store
            messages not delivered to a client that was connected.
            {"\n"}
            <ArticleImg src="http://i.giphy.com/3o7WTB6Y99sMzHhvjy.gif" width="60%" screenShot={true}/>
            {"\n"}
            Admittedly lacking any sort of privacy in the app, other than having
            to know the web address, I put in a feature to disconnect other clients
            {"\n"}
          </Markdown>
        </SingleCol>
        <ArticleImg src="http://i.giphy.com/l2QZZS1MaTBI39caY.gif" width="50%" screenShot={true}/>
        <br/>
      </div>
    </ProjectView>
  }
}
