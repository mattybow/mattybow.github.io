import React, { Component } from 'react';
import ProjectView from '../components/projectView';
import Markdown from 'react-remarkable';
import SingleCol from '../components/singleCol';
import OutsetCol from '../components/outsetCol';
import ArticleImg from '../components/articleImg';

export default class EpPage extends Component{
  render(){
    const details = {
      title:"Endorsement Primary",
      date:"March 2016",
      technologies:["react", "redux", "express", "mysql", "mongo", "nginx", "ubuntu"],
      description:"react app for tracking endorsements during the 2016 primary election",
      site:"http://endorsementprimary.mattbow.com/endorsements"
    }
    return <ProjectView details={details}
                        imageUrl="/images/endorsements-banner.png">
        <div className="project-text">
          <SingleCol>
            <div className="project-text-heading">BACKGROUND</div>
            <Markdown>
              I set out to create a site that informed people on candidates.
              I considered producing an analytical tool on the logical fallacies in
              campaign speech, general vernacular, campaign finance, or political record
              (of which some candidates have no prior record
              making it a lopsided comparison), but I doubted many voters would want
              to review that information and even if they did, it didn't seem like
              an effective approach to influencing opinion.
              {"\n"}
            </Markdown>
          </SingleCol>
          <OutsetCol imgSrc="/images/colbert.jpg">
            <Markdown>
              Stephen Colbert, John Oliver, and Trevor Noah are at the forefront of bringing
              politics into people's lives.  They do so with comedy, a disarming medium
              that can be consumed without much personal investment.  As a
              result, it reaches a wide audience, and stands the best chance at swaying
              voter opinion.
              {"\n"}
              Celebrity is similar in this way.  People are very willing to accept
              or reject the behavior of celebrities at a whim.  This is how I settled
              on building a site to track endorsements for the 2016 candidates.
            </Markdown>
          </OutsetCol>
          <SingleCol>
            <Markdown>
              It is arguable that Beyonce's pick for president doesn't matter much,
              but that's the appeal.  An endorsement can matter to one person and
              mean nothing to someone else.  You won't dissuade people from using
              the site because it is too opinionated, in fact, it's likely that a
              voter will find an
              endorsement from someone they know and respect and be inclined to
              continue using the site.
              {"\n"}
              Endorsements are also word of mouth.  It&apos;s a logically
              flawed piece of data, but as anyone who has been on an ecommerce website knows,
              the word of others feels helpful regardless of familiarity with the subject.
              {"\n"}
              Name recognition matters.  Sometimes it's the only thing, and if you
              recognize an actor or a singer endorsing a candidate, that identity
              is now loosely tied to the candidate.  So, while unconfirmed, I think
              endorsements stand a good chance at influencing a voter's opinion.
            </Markdown>
            <div className="project-text-heading">IMPLEMENTATION</div>
            <Markdown>
              ### Data
              {"\n"}
              I employed twitter&apos;s [streaming api]("https://dev.twitter.com/streaming/reference/post/statuses/filter")
              to gather the raw data on endorsements.  I filtered on `endorse` the
              candidate&apos;s first and last name which meant a significant amount of
              redundancy of data points.  The twitter data was stored in a mongodb
              instance.
              {"\n"}
              Aside from the initial data gather, I used a mysql instance to store
              the structured data.  I chose a relational db for its foreign key
              constraints, join capabilities, and data integrity which meant writing
              less code.
              {"\n"}
              Each endorsement is tied to an endorser and each endorser is assigned
              tags based on their reputation (according to wikipedia).
            </Markdown>
            <ArticleImg src="/images/endrs-eer-diag.png"/>
            <Markdown>
              {"\n"}
              <br/>
              ### CMS
              {"\n"}
              In lieu of
              an algorithm to parse tweets, which is not a trivial task, given the
              varied nature of language and implied context, I created
              an interface to manually input the endorsements.
              {"\n"}
            </Markdown>
          </SingleCol>
          <ArticleImg src="/images/endrs-data-sc1.png" width="50%" screenShot={true}/>
          <ArticleImg src="/images/endrs-data-sc2.png" width="50%" screenShot={true}/>
          <ArticleImg src="/images/endrs-data-sc3.png" width="50%" screenShot={true}/>
          <ArticleImg src="/images/endrs-data-sc4.png" width="50%" screenShot={true}/>
          <SingleCol>
            <Markdown>
              One success was in making a dropdown component that was flexible enough
              to accommodate several use cases in both the cms app and the primary
              app
              {"\n"}
              The **endorser dropdowns**
              <ArticleImg src="/images/endrs-dd-sc1.png" />
              <ArticleImg src="/images/endrs-dd-sc3.png" />
              {"\n"}
              and the **tag dropdown** for selecting or creating tags to assign to an endorser
              <ArticleImg src="/images/endrs-dd-sc2.png" />
              <br/>
              ### App
              {"\n"}
              The app runs on the same server that hosts the databases and the cms.
              I used nginx to proxy the requests for the different domains.
            </Markdown>
          </SingleCol>
          <ArticleImg src="/images/endrs-app-sc1.png" width="50%" screenShot={true}/>
          <ArticleImg src="/images/endrs-app-sc2.png" width="50%" screenShot={true}/>
          <ArticleImg src="/images/endrs-app-sc3.png" width="50%" screenShot={true}/>
          <SingleCol>
            <Markdown>
              The app never made it to release due to time constraints and the
              shear amount of man hours it would have taken to go through the tweet
              data, verify the data, and include all of the analytical features that
              would have made the app useful.
              {"\n"}
            </Markdown>
          </SingleCol>
        </div>
    </ProjectView>
  }
}
