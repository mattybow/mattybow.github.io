import React, { Component } from 'react'

export default class Iframe extends Component{
  render(){
    return <div className="iframe-wrapper" style={{
        position:'relative',
        height:300
      }}>
      <iframe style={{
                position:'absolute',
                top:0,bottom:0,left:0,right:0
              }}
              width="100%"
              height="100%"
              src={this.props.src}
              frameborder="0"
              allowfullscreen>
      </iframe>
    </div>;
  }
}
