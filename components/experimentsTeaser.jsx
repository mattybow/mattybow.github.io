import React, { Component } from 'react';
import HomeCopy from './homeCopy';
import '../_css/experimentsTeaser.scss';

export default class ExperimentsTeaser extends Component{
  render(){
    return <div id="experimentsTeaser">
      <HomeCopy header="Experiments"
                subtext={`I experiment with different
                  technologies like Famous, Processing, D3, three.js, and more.`}
                btnText="browse experiments"/>
      <div className="floating-img">
        <img src="/images/candidb.png" alt="" />
      </div>
    </div>;
  }
}
