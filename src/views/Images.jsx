import React, { Component } from 'react';
import Row from 'react-bootstrap/Row';

import Thumbnail from '../components/Thumbnail/Thumbnail';

class Images extends Component {
  render() {
    const { images } = this.props;
    
    return (
      <Row>
        {images && images.map((image, index) => (
          <Thumbnail image={image} key={image.id}/>
        ))}
      </Row>
    )
  }
}

export default Images;
