import React, { Component } from 'react';
const breakpoints = [
  { name:'mobile', limit:768, suffix:'m' },
  { name:'laptop', limit:1440, suffix:'l' },
  { name:'desktop', limit:2056, suffix:'d' }
];

export default class ResponsiveImage extends Component{
  render(){
    const { src, id, style, className, tag } = this.props;
    const screenWidth = window.screen.width;
    const breakpoint = breakpoints.find( bp => screenWidth <= bp.limit );
    let path = src;

    if (breakpoint){
      const extRegex = /\.(\w{3})$/
      const ext = src.match(extRegex)[1];
      path = src.replace(extRegex, `-${breakpoint.suffix}.${ext}`);
    }

    if (tag === 'img'){
      return <img id={id || ''} src={path} alt=""/>;
    }
    return <div id={id || ''}
                className={className || ''}
                style={{...style, backgroundImage:`url("${path}")`}}>
    </div>;
  }
}
