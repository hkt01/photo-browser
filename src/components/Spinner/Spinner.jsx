import React, { Component } from 'react';

import "./spinner.css";

/* Spinner component to display data being loaded. */
class Spinner extends Component {
  constructor(props) {
    super(props);
    this.enableSpinner = this.enableSpinner.bind(this);

    this.state = {
      show: false,
    };

    // Set a timout for displaying the spinner to avoid "blinking" effect
    this.timer = setTimeout(this.enableSpinner, 250);
  }

  componentWillUnmount() {
    clearTimeout(this.timer);
  }

  enableSpinner() {
    this.setState({show: true});
  }

  render() {
    const {show} = this.state;

    if (!show) {
      return null;
    }

    return <div className="loader">Loading...</div>;
  }
}

export default Spinner;
