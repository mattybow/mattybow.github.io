import React from 'react';
import {render} from 'react-dom';
import createBrowserHistory from 'history/lib/createBrowserHistory';
import useScroll from 'scroll-behavior/lib/useSimpleScroll'
import { useRouterHistory, Router, createRoutes } from 'react-router';
import routes from '../pages/routes';
import 'react-fastclick';

const appHistory = useScroll(useRouterHistory(createBrowserHistory))();
if (typeof document !== 'undefined') {
  render(<Router history={appHistory}
                  routes={routes} />, document.getElementById('root'));
}

// Exported static site renderer:
module.exports = function renderPage(locals, callback) {
  callback(null,
`---
layout: base
---
<div id="root">
  <div class="sk-cube-grid">
    <div class="sk-cube sk-cube1"></div>
    <div class="sk-cube sk-cube2"></div>
    <div class="sk-cube sk-cube3"></div>
    <div class="sk-cube sk-cube4"></div>
    <div class="sk-cube sk-cube5"></div>
    <div class="sk-cube sk-cube6"></div>
    <div class="sk-cube sk-cube7"></div>
    <div class="sk-cube sk-cube8"></div>
    <div class="sk-cube sk-cube9"></div>
  </div>
</div>
{% if jekyll.environment == 'development' %}
  <script src="http://localhost:5000/static/main.bundle.js"></script>
{% else %}
  <script src="/dist/app.bundle.js"></script>
{% endif %}`
  );
};
