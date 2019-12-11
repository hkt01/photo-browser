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
    <Router basename='/photo-browser'>
      <header>
        <h1>Photo Browser</h1>
      </header>
      <Switch>
        <Route path="/image/:id" component={ImageContainer} />
        <Route path="/">
          <ImagesContainer />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
