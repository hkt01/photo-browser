import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Home from './views/Home';
import ImagesContainer from './containers/ImagesContainer';
import ImageContainer from './containers/ImageContainer';
import AlbumsContainer from './containers/AlbumsContainer';

function App() {
  return (
    <Router basename='/photo-browser'>
      <header>
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
          <h1 className="navbar-brand">Photo Browser</h1>
        </nav>
      </header>

      <Switch>
        <Route path="/images/:id" component={ImageContainer} />
        <Route path="/images" component={ImagesContainer} />
        <Route path="/albums/:id/images/:id" component={ImageContainer} />
        <Route path="/albums/:id/images" component={ImagesContainer} />
        <Route path="/albums" component={AlbumsContainer} />
        <Route path="/" component={Home}/>
      </Switch>
    </Router>
  );
}

export default App;
