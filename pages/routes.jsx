import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './app';
import Home from './home';
import AboutPage from './about';
import EpPage from './epPage';
import GfyPage from './gfyPage';
import ReduxPage from './reduxPage';
import SxstackPage from './sxstackPage';
import VaporPage from './vaporPage';
import ChatPage from './chatPage';
import ProjectsPage from './projectsPage';
import ViaPage from './viaPage';

const routes = <Route path="/" component={App}>
  <IndexRoute component={Home} />
  <Route path="projects">
    <IndexRoute component={ProjectsPage} />
    <Route path="via" component={ViaPage}/>
    <Route path="endorsement" component={EpPage}/>
    <Route path="gfy-cat" component={GfyPage}/>
    <Route path="vapor" component={VaporPage}/>
    <Route path="redux" component={ReduxPage}/>
    <Route path="sxstack" component={SxstackPage}/>
    <Route path="chat" component={ChatPage}/>
  </Route>
  <Route path="about" component={AboutPage}/>
</Route>

export default routes;
