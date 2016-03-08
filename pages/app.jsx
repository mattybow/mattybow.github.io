import React, { Component } from 'react';
import '../_sass/_base.scss';
import '../_css/common.scss';

export default class App extends Component{
  render(){
    return <div id="app">
      {this.props.children}
    </div>;
  }

}
