import React, { Component } from 'react';
import ProjectView from '../components/projectView';
import Markdown from 'react-remarkable';
import SingleCol from '../components/singleCol';
import ArticleImg from '../components/articleImg';

class TimeFormat extends Component{
  render(){
    return <div className="flex-parent-row">
      <div className="time-format"
           style={{
             width:'50%',
             textAlign:'right'
           }}>
           <div style={{paddingRight:'1em'}}>
             {this.props.time}
           </div>
        </div>
         <div>
           <div style={{paddingLeft:'1em'}}>
             Courtney Barnett
           </div>
         </div>
    </div>
  }
}

export default class SxstackPage extends Component{
  render(){
    const details = {
      title:"Sxstack",
      date:"March 2016",
      technologies:["react", "express", "mysql", "redux"],
      description:"react reflux app for south by attendees scheduling when to see artists",
      site:"http://sxmusiclist.herokuapp.com/"
    }
    return <ProjectView details={details}
                        imageUrl="/images/sxstack-banner.png">
      <div className="project-text">
        <SingleCol>
          <div className="project-text-heading">BACKGROUND</div>
          <Markdown>
            [South by Southwest]("https://en.wikipedia.org/wiki/South_by_Southwest")
            (SXSW) or South by for short, is a festival for music,
            film, and technology held in Austin TX every March.  Some go for the
            free alcohol, the copious parties, or any number of other reasons, but
            for me, South by music is a chance to see new artists and bands.  NPR&apos;s
            [Austin 100]("http://apps.npr.org/austin/") has been particularly
            helpful for browsing the upward of 2,000 acts that come to Austin, but
            even then, planning out a schedule can be difficult.
            {"\n"}
            During South by, bands play up to 7 or 8 times over the course of 4 days.
            They might play 1 or 2 official SXSW showcases in the evening, which
            is documented by the official SXSW app, but the remainder and often
            the majority of the shows are during the day at unofficial events.  (design by
            [Cameron Miller]("https://www.behance.net/cmillergraphicdesign"))
            {"\n"}
            <ArticleImg src="/images/sxstack-artist-showtimes.png" width="60%" screenShot={true}/>
            <br/>
            Something to note, SXSW is a festival that takes place across
            Austin&apos;s downtown.  Bars large and small, open lots and warehouses
            become venues.  So location and time are important pieces of data.
            {"\n"}
            [Do512]("http://2016.do512.com/") and [ShowlistAustin]("http://showlistaustin.com/")
            do a pretty good job of compiling all of the different show times,
            locations, but in 2015 nothing existed that focused on building an
            itinerary for seeing particular artists.
          </Markdown>
          <div className="project-text-heading">IMPLEMENTATION</div>
          <Markdown>
            ### Data
            {"\n"}
            I wrote a script to run all of the routes for the pages of events from
            do512.  The data was event based, so each event had a start time and
            a location.  The artist and the time they went on stage, which sometimes
            was not given, was listed under unstructured HTML.  Sigh the joys of
            scraping data.
            {"\n"}
            Aside from inconsistent naming of bands or artists was the problem of
            parsing out the correct time.  There are so many ways the people at do512
            list out time that is perfectly readable by a human but difficult for
            an algorithm.  Here are a few examples:
            {"\n"}
          </Markdown>
          <TimeFormat time={'12:30p'}/>
          <TimeFormat time={'1230p'}/>
          <TimeFormat time={'1230'}/>
          <TimeFormat time={'Noon'}/>
          <TimeFormat time={'12 - 1p'}/>
          <TimeFormat time={'12p-1'}/>
          <Markdown>
            {"\n"}
            <br/>
            Also, sometimes the artist name came before and sometimes after
            the listed time.  I ended up with almost 9,000 records for shows.
            {"\n"}
            I also wanted the webapp to work without a connection.  My initial
            thought was to download all of the showtimes, the shows on your list,
            and the venue information and it for the most part could work offline.
            In hindsight, this was a feature that ended up driving the decisions
            for other things in the app, some of which was costly timewise to develop.
            <br/>
            ### App
            Since the DOM can't handle scrolling 9,000 things at once, I used a library
            that does what react's [FixedDataTable]("https://facebook.github.io/fixed-data-table/")
            would later come out with.  The basic idea is to display only what the
            user can see in their viewport plus some buffer above and below.  The
            benefit of using React in this case is that it takes care of the DOM
            operations during scrolling through its reconciler.
            {"\n"}
            <ArticleImg src="https://s3-us-west-1.amazonaws.com/sxlist/screenshots/sxstack-scroll.gif" width="60%" screenShot={true}/>
            <br/>
            A lot of the challenges with the front-end centered around the scroll
            position.
            <ul>
              <li>changing the header's labels when scrolling to a new day or a
              different hour</li>
              <li>scrolling to the correct hour and date when applying a filter</li>
              <li>retaining scroll position when switching between tabs</li>
            </ul>
            <ArticleImg src="/images/sxstack-date-selection.png" width="60%" screenShot={true}/>
            <ArticleImg src="/images/sxstack-show-details.png" width="60%" screenShot={true}/>
            <br/>
            In retrospect, given the time contraints on the app, the UI should have been
            less ambitious to accommodate features like sharing lists between
            users.  Also, using [Reflux]("https://github.com/reflux/refluxjs"),
            to manage shared state in separate stores was less intuitive and more
            prohibitive than I had predicted.
            {"\n"}
            I did use the app during the festival, along with some other friends

          </Markdown>
        </SingleCol>
      </div>
    </ProjectView>
  }
}
