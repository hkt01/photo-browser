import React, { Component } from 'react';
import Col from 'react-bootstrap/Col'

class Thumbnail extends Component {

  render() {
    const {image} = this.props;
    return (
      <Col className="thumbnailImage">
        <img src={image.thumbnailUrl} alt={image.title} />
      </Col>
    );
  }

}

export default Thumbnail;
