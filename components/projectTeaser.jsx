import React, { Component } from 'react';
import ProjectPane from './projectPane';
import HomeCopy from './homeCopy';
import '../_styles/projectTeaser.scss';

class ProjectTeaser extends Component{
  render(){
    return <div className="container-lg" id="projectTeaser">
      <div className="left split">
        <div className="container">
          <HomeCopy header="Projects"
                    subtext={`Good code is clean and readable.
                      Building with React promotes a declarative style that is both
                      manageable and easily understood`}
                    btnText="see work"
                    path="/projects"
                    className="mobile-only"/>
          <ProjectPane imgSrc="/images/endorsement_ortho_sc.png"
                        projName="ENDORSEMENT PRIMARY"
                        url="/projects/endorsement"
                        descript="react app for tracking endorsements during the 2016 primary election"/>
          <ProjectPane imgSrc="/images/yosemite-ig.jpg"
                        projName="REDUX TALK"
                        url="/projects/redux"
                        descript="slides and demo on react and redux"
                        className="mobile-only"/>
          <ProjectPane imgSrc="/images/via-sc.jpg"
                        projName="VIA GELATO HAWAII"
                        url="/projects/via"
                        descript="Business website and content management system made with meteorJs"/>
          <ProjectPane imgSrc="/images/sxstack_w_bg.png"
                        projName="SXSTACK"
                        url="/projects/sxstack"
                        descript="react reflux app for south by attendees scheduling when to see artists"
                        className="mobile-only"/>
          <ProjectPane imgSrc="/images/gfy-cat_sc1.png"
                        projName="GFY-CAT"
                        url="/projects/gfy-cat"
                        descript="polymer webcomponent for displaying gifs"/>
          <ProjectPane imgSrc="/images/vaporsc4.png"
                        projName="VAPOR"
                        url="/projects/vapor"
                        descript="backbone app for in-house software development"/>
        </div>
      </div>
      <div className="right split">
        <div className="container">
          <HomeCopy header="Projects"
                    subtext={`Good code is clean and readable.
                      Building with React promotes a declarative style that is both
                      manageable and easily understood`}
                    btnText="see work"
                    path="/projects"
                    className="desktop-only" />
          <ProjectPane imgSrc="/images/yosemite-ig.jpg"
                        projName="REDUX TALK"
                        url="/projects/redux"
                        descript="slides and demo on react and redux"
                        className="desktop-only"/>
          <ProjectPane imgSrc="/images/sxstack_w_bg.png"
                        projName="SXSTACK"
                        url="/projects/sxstack"
                        descript="react reflux app for south by attendees scheduling when to see artists"
                        className="desktop-only"/>
          <ProjectPane imgSrc="/images/avocadyo.png"
                        projName="AVOCADYO"
                        url="/projects/chat"
                        descript="simple real-time messaging app"/>
        </div>
      </div>

    </div>;
  }
}

export default ProjectTeaser;
