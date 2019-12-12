import React from 'react';
import PropTypes from 'prop-types';

import { Link } from "react-router-dom";
import Col from 'react-bootstrap/Col';

function Thumbnail(props) {
    const {image, location} = props;
    console.log(location.pathname);
    return (
      <Col className="thumbnailImage">
        <Link to={{
          pathname: location.pathname+'/'+image.id,
          state: {
            image: image
          }
        }}>
          <img src={image.thumbnailUrl} alt={image.title} />
        </Link>
      </Col>
    );
}

Thumbnail.propTypes = {
  image: PropTypes.shape({
    id: PropTypes.number,
    albumId: PropTypes.number,
    title: PropTypes.string,
    thumbnailUrl: PropTypes.string,
    url: PropTypes.string,
  }).isRequired
};

export default Thumbnail;
