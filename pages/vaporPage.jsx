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
      technologies:["backbone", "express", "mssql", "IIS"],
      description:"backbone app for in-house software development"
    }
    return <ProjectView details={details}
                        imageUrl="/images/vapor-banner.png">
      <div className="project-text">
        <SingleCol>
          <div className="project-text-heading">BACKGROUND</div>
          <Markdown>
            The in-house tracking system for all development changes at Samsung
            Austin Semiconductor in 2014 was called Liquid.  Liquid was a .net
            application served by a mysql db.  It was a tool for
            management to document and track the progress of projects from concept
            to release.
            {"\n"}
            However, for developers, it was a disjointed system.  It was laggy,
            required duplicate
            documentation, it was a nuisance to update, the roles and permissions,
            were unclear,
            and approval routes and statuses did not provide enough flexibility.
            Furthermore, both developers and managers agreed, the Liquid UI was
            in serious need of an update.
            {"\n"}
            So as my inauguration into webapp development, I led development on
            the next version of Liquid, an SPA called Vapor.  My fellow database
            developer Curtis Angell did development on the database side using mssql.
            {"\n"}
          </Markdown>
          <div className="project-text-heading">IMPLEMENTATION</div>
          <Markdown>
            ### App
            {"\n"}
            The app was done in [Backbone]("http://backbonejs.org/") and express
            with Grunt for development and build processes and hosted on an IIS
            server.
            {"\n"}
            The inital list view would only show items you were involved with as
            either the creator or an approver in the process.  This cut down on
            having the need to pass around the Vapor's ID and search for it.
            {"\n"}
            The main view would show you immediately where in the approval process
            the Vapor was and provide you feedback on who it could be approved by.
            Other improvements included changing things like the workflow and
            priority all in the same page and assigning tags to the project for
            later search purposes.
          </Markdown>
        </SingleCol>
        <ArticleImg src="/images/vapor-main.png" width="50%" screenShot={true}/>
        <SingleCol>
          <Markdown>
            <br/>
            One of the main features was documenting changes to the source.  In
            edit mode, you could add major items, and subitems as well as highlight
            lines in the code that applied to those changes.  One of the most
            frustrating parts of documentation was switching between a diffing
            program, then documenting the change in a powerpoint presentation, and
            finally attaching the powerpoint to the project.  The aim here was
            to create a tool to do all of it in one place.
          </Markdown>
        </SingleCol>
        <ArticleImg src="/images/vapor-diff.png" width="50%" screenShot={true}/>
        <SingleCol>
          <Markdown>
            {"\n"}
            <br/>
            Another place for improvement was the release process.  Developers
            had to contact the server owners and schedule a time for bouncing the
            servers with the new code, but developers had no idea what times were
            available or taken by other releases and often resulted in a lot of
            needless back and forth that a calendar could easily solve.
            {"\n"}
            Included with a release request was a task list that rarely ever changed
            but always needed to be attached as a separate document in the Liquid
            system.  In Vapor each system group could reuse a standard task list
            that could also be modify based on the particular release scenario.
            {"\n"}
            Once scheduled, a email notifying dependent system owners needed to
            be sent.  The email lists were notorious for being out of date and
            also a hassle to reconstruct for every email.  Additionally, the
            content of the email would automatically be generated from the major
            change points documented in the Vapor.
          </Markdown>
        </SingleCol>
        <ArticleImg src="/images/vapor-release-tab.png" width="50%" screenShot={true}/>
        <br/>
      </div>
    </ProjectView>
  }
}
