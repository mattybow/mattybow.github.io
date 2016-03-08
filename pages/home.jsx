import React, { Component } from 'react';
import HomeHero from '../components/homeHero';
import ProjectTeaser from '../components/projectTeaser';
import ExperimentsTeaser from '../components/experimentsTeaser';
import SocialLinks from '../components/socialLinks';
import Footer from '../components/footer';
import '../_css/home.scss';

export default class HomePage extends Component{
  render(){
    return <div className="page" id="homePage">
      <HomeHero />
      <ProjectTeaser />
      <Footer />
    </div>;
  }
}
