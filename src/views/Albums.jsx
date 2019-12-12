
import React from 'react';
import {
  Link
} from "react-router-dom";

import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import albumImage from "../assets/img/my_projects_folder.png";

function Album(props) {
  const {album} = props;
  return (
    <Col className="albumLink">
      <Link to={{
        pathname: '/albums/'+album.id+'/images',
        state: {
          album: album
        }
      }}>
        <div><img src={albumImage} alt={album.title} />
        <label>{album.title}</label></div>
      </Link>
    </Col>
  );
}

function Albums(props) {
  const {albums} = props;
  return (
    <Row>
      {albums && albums.map((album, index) => (
        <Album album={album} key={album.id}/>
      ))}
    </Row>
  );
}

export default Albums;
