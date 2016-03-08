import React from 'react';
import { browserHistory, Router, createRoutes } from 'react-router';
import routes from './routes';

function reduceRoutes(routes){
  const routeArray = [];
  recurseRoutes(routes);
  function recurseRoutes(routeObj, prevPath){
    const { path } = routeObj
    const route = prevPath ? `${prevPath}${path}/` : path;
    if('childRoutes' in routeObj){
      return routeObj.childRoutes.map(child => {
        return recurseRoutes(child, route);
      });
    }
    routeArray.push(route);
  }
  return routeArray;
}

var startingRoute = createRoutes(routes)[0];
console.log(startingRoute);
console.log(reduceRoutes(startingRoute));

export default (
  <Router onUpdate={() => window.scrollTo(0, 0)}
          history={browserHistory}
          routes={routes} />
);
