import React, { Component } from 'react';
import ProjectView from '../components/projectView';
import Markdown from 'react-remarkable';
import SingleCol from '../components/singleCol';
import ArticleImg from '../components/articleImg';

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
          <div className="project-text-heading">BACKGROUND</div>
          <Markdown>
            Via Gelato Hawaii&apos;s site is made with
            [meteorJs]("https://www.meteor.com/").  Meteor takes an interesting
            approach to streamlining some of the most commonly built features
            in webapps.  State is managed through a clientside data store called
            mini-mongo and a regular mongodb instance on the backend.  Meteor
            manages sessions, broadcasts updates to data changes on the backend
            to all connected or authorized users, handles basic user login, and
            a provides a unified api for getting and setting data that a developer
            theoretically only has to write once.
            {"\n"}
            Admittedly, Via's site doesn't need all of Meteor's sophisticated technology
            to display what is largely static data.  However, Via wanted to be
            able to change flavors on a daily basis and modify hours, and site
            images at will.  In the interest of empowering non-techincal users
            the ability to change the site's content without requiring a developer,
            it seemed a CMS built with Meteor was in order.
          </Markdown>
          <div className="project-text-heading">IMPLEMENTATION</div>
          <Markdown>
            ### App
            {"\n"}
            Meteor has a templating system that allows for reactive elements.  You
            can change the data and the update to the UI will happen without having
            to imperatively manipulate the DOM.  As is often the case, data from the
            server is used in the UI and in Meteor, when you attach a cursor's result
            to the UI, it conveniently makes the element reactive.  However, there were
            also many cases in which data should not be synced to the server, such as form
            state, validation errors, and UI state that you still want to be reactive
            but the api for it can be cumbersome.
            {"\n"}
            Despite the conveniences of Meteor, its all-encompassing, non-traditional
            approach to application development made it difficult to use certain plugins and while
            its plugin library, [atmosphere]("https://atmospherejs.com/") seems
            well supported, it still seems like a fringe dependency that might become
            a liability one day.
            {"\n"}
            The slideshow at the beginning of the site uses [slick]("http://kenwheeler.github.io/slick/"),
            the map uses Conner Atherton's [walkway]("https://connoratherton.com/walkway"),
            [sly]("http://darsa.in/sly/") for the Instagram feed, and Google's
            [recaptcha]("https://www.google.com/recaptcha/intro/index.html") and
            Rackspace's [mailgun]("https://www.mailgun.com/") for the contact form.  The
            front-facing website was designed by
            [Lina Yang]("https://www.linkedin.com/in/linahyang").
          </Markdown>
        </SingleCol>
        <ArticleImg src="/images/via-gelato-full-page.png" width="50%" screenShot={true}/>
        <SingleCol>
          <Markdown>
            {"\n"}
            <br/>
            ### CMS
            {"\n"}
            The CMS allows CRUD (create, read, update, delete) operations on flavors
            and assignment to the flavors of the day section of the website.  Images
            are uploaded to an S3 bucket and the asset address is store in the
            backend mongo store.
            <ArticleImg src="/images/via-admin-flavor-add.png" width="50%" screenShot={true}/>
            <ArticleImg src="/images/via-admin-flavors.png" width="50%" screenShot={true}/>
            {"\n"}
            <br/>
            Exceptions to the normal hours of operation can be scheduled through
            the hours tab of the admin interface.
            <ArticleImg src="/images/via-admin-hours.png" width="50%" screenShot={true}/>
            {"\n"}
            <br/>
            User permissions are also managed through the admin portion of the site.
          </Markdown>
        </SingleCol>
        <ArticleImg src="/images/via-admin-users.png" width="50%" screenShot={true}/>
        <SingleCol>
          <Markdown>
            <br/>
            Lastly, admin users can input new press images and assign frames
            that maintain the site's theme.
            {"\n"}
          </Markdown>
        </SingleCol>
        <ArticleImg src="/images/via-admin-press.png" width="50%" screenShot={true}/>
      </div>
    </ProjectView>
  }
}
