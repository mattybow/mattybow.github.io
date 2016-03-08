import React, {Component} from 'react';

export default class PlaceHolder extends Component{
  render(){
    const containerStyle = {
      display:'flex',
      width:'100%',
      height:this.props.height || '100%',
      backgroundColor:'rgba(0,0,0,0.1)',
      alignItems:'center'
    };
    const nameStyle = {
      opacity:0.5,
      margin:'auto'
    };
    return <div style={containerStyle}>
      <div style={nameStyle}>{this.props.name}</div>
    </div>;
  }
}
