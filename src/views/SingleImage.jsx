import React from 'react';
import PropTypes from 'prop-types';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';

function Image(props) {
  const {image} = props;
  return (
    <Row>
      <Col>
        <img src={image.url} alt={image.title} />
      </Col>
      <Col>
        <Form>
          <Form.Group controlId="albumId">
            <Form.Label>Album ID:</Form.Label>
            <Form.Control type="text" readOnly value={image.albumId} />
          </Form.Group>
          <Form.Group controlId="imageId">
            <Form.Label>Image ID:</Form.Label>
            <Form.Control type="text" readOnly value={image.id} />
          </Form.Group>
          <Form.Group controlId="imageTitle">
            <Form.Label>Title:</Form.Label>
            <Form.Control type="text" readOnly value={image.title} />
          </Form.Group>
          <Form.Group controlId="imageUrl">
            <Form.Label>URL:</Form.Label>
            <Form.Control type="text" readOnly value={image.url} />
          </Form.Group>
          <Form.Group controlId="imageThumbnailUrl">
            <Form.Label>Thumbnail URL:</Form.Label>
            <Form.Control type="text" readOnly value={image.thumbnailUrl} />
          </Form.Group>
        </Form>
      </Col>
    </Row>
  );
}

Image.propTypes = {
  image: PropTypes.shape({
    id: PropTypes.number,
    albumId: PropTypes.number,
    title: PropTypes.string,
    thumbnailUrl: PropTypes.string,
    url: PropTypes.string,
  }).isRequired
};

export default Image;
