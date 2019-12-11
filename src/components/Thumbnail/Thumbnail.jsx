import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Col from 'react-bootstrap/Col'

class Thumbnail extends Component {

  render() {
    const {image} = this.props;
    return (
      <Col className="thumbnailImage">
        <Link to={{
          pathname: '/image/'+image.id,
          state: {
            image: image
          }
        }}>
          <img src={image.thumbnailUrl} alt={image.title} />
        </Link>
      </Col>
    );
  }

}

export default Thumbnail;
