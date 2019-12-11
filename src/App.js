import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import ImagesContainer from './containers/ImagesContainer';
import ImageContainer from './containers/ImageContainer';

function App() {
  return (
    <Router>
      <header>
        <h1>Photo Browser</h1>
      </header>
      <Switch>
        <Route path="/photo-browser/image/:id" component={ImageContainer} />
        <Route path="/photo-browser">
          <ImagesContainer />
        </Route>
        <Redirect from="/" to="/photo-browser" />
      </Switch>
    </Router>
  );
}

export default App;
