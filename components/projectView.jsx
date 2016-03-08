import React, { Component } from 'react';
import {Link} from 'react-router';

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
    const {date, technologies, description, title} = this.props.details;
    return <div>
      <div style={{position:'fixed', top:0, left:0, zIndex:1}}>
        <Link to="/">
          <div style={{padding:'1.5em 5em'}}>
            <img style={{width:50}} src="/images/signature.png" alt=""/>
          </div>
        </Link>
      </div>
      <div style={{marginTop:'5em', position:'relative'}}>
      </div>
      <div className="flex-parent-row start">
        <div className="flex-child-expand" style={{backgroundColor:'white'}}>

          <div style={{
              height:400,
              width:'100%',
              backgroundImage:`url("${this.props.imageUrl}")`,
              backgroundSize:'cover',
              backgroundPosition:'50% 50%',
              position:'relative',
              zIndex:0
            }}></div>
        </div>
        <div style={{margin:"0 2em", width:'33%'}} >
          <div style={{padding:'.5em 0 0 30%',
                       borderTop:'1px solid rgba(0,0,0,.1)',
                       position:'relative',
                       zIndex:1
                     }}>
              <div style={{
                  fontWeight:500,
                  fontSize:'1.5em',
                  letterSpacing:1}}>
                  {title}
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
          </div>

        </div>


      </div>

      <div style={{padding:'0 5em'}}>
        {this.props.children}
      </div>
    </div>
  }
}
