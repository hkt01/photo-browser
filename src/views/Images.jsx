import React from 'react';

import Row from 'react-bootstrap/Row';

import Thumbnail from '../components/Thumbnail/Thumbnail';

function Images(props) {
    const { images, location } = props;

    return (
      <Row>
        {images && images.map((image, index) => (
          <Thumbnail image={image} key={image.id} location={location}/>
        ))}
      </Row>
    )
}

export default Images;
