import React, { Component } from 'react';
import ProjectView from '../components/projectView';
import Markdown from 'react-remarkable';
import SingleCol from '../components/singleCol';
import ArticleImg from '../components/articleImg';

export default class ReduxPage extends Component{
  render(){
    const details = {
      title:"Redux Talk",
      date:"March 2016",
      technologies:["react", "express", "mysql", "redux"],
      description:"slides and demo for meetup talk on react and redux",
      site:"http://mattbow.com/redux-dev-talk/"
    }
    return <ProjectView details={details}
                        imageUrl="/images/yosemite-ig-banner.jpg">
      <div className="project-text">
        <SingleCol>
          <div className="project-text-heading">BACKGROUND</div>
          <Markdown>
            In search of a way to create a universal app, I tried out several
            alternatives to reflux:
            {"\n"}
            + [nuclearJs]("https://optimizely.github.io/nuclear-js/")
            {"\n"}
            + [martyJs]("http://martyjs.org/")
            {"\n"}
            + [altJs]("http://alt.js.org/")
            {"\n"}
            [**Redux**]("http://redux.js.org/") emerged as the option with the most support and as I learned
            more about the project, it became clear that redux was the best mutation
            of [flux]("https://facebook.github.io/flux/") (of which today, has
            features similar to redux)
            {"\n"}
            Redux taught me about *composition*, *wrappers/containers*, *pure functions*,
            and really got me into *es2015*.  I felt inspired to share my findings
            with other devs in Austin by giving a talk on Redux at the August 2015
            [Bleeding Edge Web Meetup]("http://edgeatx.github.io/").
            {"\n"}
          </Markdown>
          <div className="project-text-heading">IMPLEMENTATION</div>
          <Markdown>
            ### Presentation
            {"\n"}
            [Dan Abramov]("https://twitter.com/dan_abramov") gave an inspiring
            dev talk at React Conf EU 2015 in which his presentation was an
            example of his technology.  By using react and redux in the
            presentation itself, I could live code within the presentation to help
            people understand the moving parts.
            {"\n"}
            The challenge of delivering a talk is that your audience's ability and
            familiarity with the subject varies a lot.  So before I could start
            talking about Redux, I felt it appropriate to give a primer on React.
            I especially like this nested component that illustrates the idea of
            `state` and `props`:
          </Markdown>
        </SingleCol>
        <ArticleImg src="/images/redux-pres-sc1.png" width="50%" screenShot={true}/>
        <SingleCol>
          <Markdown>
            {"\n"}
            If you view the slides online, they won't make too much sense without
            editing the source on the fly and knowing where to click.  The video
            of the presentation is here:
          </Markdown>
          <iframe width="500" height="315" src="https://www.youtube.com/embed/43P44vyNwaw?t=29m42s" frameborder="0" allowfullscreen></iframe>
          <Markdown>
            <br/>
            ### App
            {"\n"}
            The example app that goes with the presentation is called igParks.
            It is an app that allows you to see pictures people are uploading from
            the 69 US National Parks.
          </Markdown>
        </SingleCol>
        <ArticleImg src="/images/igParks-sc1.png" width="50%" screenShot={true}/>
      </div>
    </ProjectView>
  }
}
