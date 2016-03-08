import React, { Component } from 'react';
import ProjectPane from './projectPane';
import HomeCopy from './homeCopy';
import '../_css/projectTeaser.scss';

class ProjectTeaser extends Component{
  render(){
    return <div className="container-lg" id="projectTeaser">
      <div className="left split">
        <div className="container">
          <ProjectPane imgSrc="/images/endorsement_ortho_sc.png"
                        projName="ENDORSEMENT PRIMARY"
                        url="/projects/endorsement"
                        descript="react app for tracking endorsements during the 2016 primary election"/>
          <ProjectPane imgSrc="https://scontent.cdninstagram.com/t51.2885-15/e15/10946620_1595655620676469_1929700559_n.jpg"
                        projName="VIA GELATO HAWAII"
                        url="/projects/via"
                        descript="meteor app and content management"/>
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
                    subtext={`Clean and readable code is the goal.
                      Building with React and redux promote a declarative style that is both
                      manageable and easily understood`}
                    btnText="see work"
                    path="/projects"/>
          <ProjectPane imgSrc="/images/yosemite-ig.jpg"
                        projName="REDUX TALK"
                        url="/projects/redux"
                        descript="slides and demo on react and redux"/>
          <ProjectPane imgSrc="/images/sxstack.png"
                        projName="SXSTACK"
                        url="/projects/sxstack"
                        descript="react app"/>
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
