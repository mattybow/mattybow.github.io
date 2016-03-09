import React, { Component } from 'react';
import '../_styles/base.scss';
import '../_styles/common.scss';

export default class App extends Component{
  render(){
    return <div id="app">
      {this.props.children}
    </div>;
  }

}
