import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import HomePage from './components/home/HomePage';
import AboutPage from './components/about/AboutPage';
import MapperPage from './components/mapper/MapperPage';
import OutputPage from './components/output/OutputPage';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage} />
    <Route path="mapper" component={MapperPage} />
    <Route path="about" component={AboutPage} />
    <Route path="output" component={OutputPage} />
  </Route>
);
