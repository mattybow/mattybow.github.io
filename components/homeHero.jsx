import React, {Component} from 'react';
import ResponsiveImage from './responsiveImg';
import '../_styles/hero.scss';
//http://api.oxfordhouse.nl/wp-content/uploads/2015/10/DSCF2947_1.jpg

export default class HomeHero extends Component{
  render(){
    const lineHeight = 1;
    const containerStyle = {
      display:'flex',
      width:'100%',
      height:this.props.height || '100%',
      backgroundColor:'rgba(0,0,0,0.1)',
      alignItems:'center',
      position:'relative'
    };
    const nameStyle = {
      opacity:0.8,
      fontWeight:500,
      fontSize:'1.2em',
      padding:'0 1em .5em 5em',
      borderTop:`${lineHeight}px solid transparent`,
      borderBottom:`${lineHeight}px solid rgba(0,0,0,.2)`,
      alignSelf:'flex-end'
    };
    const titleStyle = {
      opacity:0.8,
      fontWeight:500,
      fontSize:'1.2em',
      borderBottom:`${lineHeight}px solid transparent`,
      borderTop:`${lineHeight}px solid rgba(0,0,0,.2)`,
      alignSelf:'flex-start'
    };
    const bgStyle={
      position:'absolute',
      top:0,bottom:0,left:0,right:0,
      backgroundSize:'cover',
      zIndex:0,
      backgroundImage:'url("/images/colorado.jpg")'
    }
    return <div style={containerStyle}>
      <div className="flex-parent-row"
        style={{height:lineHeight, width:'100%', position:'relative', zIndex:1}}>
        <div style={nameStyle} id="name-line">
          <img id="hero-signature" src="/images/signature.png" alt=""/>
        </div>
        <div className="flex-child-expand"></div>
        <div style={titleStyle}  id="title-line">js developer</div>
      </div>
      <ResponsiveImage className="bg" style={bgStyle} src={"/images/lbj-cover.jpg"} />
    </div>;
  }
}
