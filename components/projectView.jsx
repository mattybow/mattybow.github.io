import React, { Component } from 'react';
import {Link} from 'react-router';
import Footer from './footer';
import ResponsiveImage from './responsiveImg';
import '../_styles/projectView.scss';

class Detail extends Component{
  render(){
    return <div className="detail flex-parent-row start" style={{margin:'2em 0'}}>
      <div className="details-heading" style={{
          fontSize:'.6em',
          color:'slategrey',
          fontWeight:500,
          width:'30%',
          textAlign:'right',
          marginTop:'.4em'
        }}>
        <div style={{paddingRight:'2em'}}>
          {this.props.detailName.toUpperCase()}
        </div>
      </div>
      <div style={{maxWidth:200}}>
        {this.props.children}
      </div>
    </div>
  }
}

export default class ProjectView extends Component{
  render(){
    const {date, technologies, description, title, site} = this.props.details;
    return <div>
      <div style={{position:'fixed', top:0, left:0, zIndex:1}}>
        <Link to="/">
          <div className="link-to-home-from-page">
            <img style={{width:50}} src="/images/signature.png" alt=""/>
          </div>
        </Link>
      </div>
      <div style={{marginTop:'5em', position:'relative'}}>
      </div>
      <div className="flex-parent-row wrap start">
        <div className="flex-child-expand" style={{backgroundColor:'white'}}>
          <ResponsiveImage className="project-banner"
                           src={this.props.imageUrl}
                           style={{
                               width:'100%',
                               backgroundSize:'cover',
                               backgroundPosition:'50% 50%',
                               position:'relative',
                               zIndex:0
                             }}/>
        </div>
        <div className="project-details" >
          <div style={{padding:'0 0 0 30%',
                       position:'relative',
                       zIndex:1
                     }}>
              <div className="project-details-title" style={{
                  paddingTop:'.5em',
                  borderTop:'1px solid rgba(0,0,0,.1)',
                  letterSpacing:1}}>
                  <span style={{
                    fontWeight:500,
                    fontSize:'1.5em',
                    }}>{title}</span>
              </div>
          </div>
          <div className="details">
            <Detail detailName="Date">
              <div>{date}</div>
            </Detail>
            <Detail detailName="Technologies">
              <div>{technologies.join(' / ')}</div>
            </Detail>
            <Detail detailName="Description">
              <div>{description}</div>
            </Detail>
            {site ? <Detail detailName="Site">
              <a href={site} target="_blank">
                <div style={{wordWrap:'break-word'}}>
                  {site.replace(/http(s)?:\/\//,'')}
                </div>
              </a>
            </Detail> : ''}
          </div>

        </div>


      </div>

      <div>
        {this.props.children}
      </div>
      <Footer/>
    </div>
  }
}
