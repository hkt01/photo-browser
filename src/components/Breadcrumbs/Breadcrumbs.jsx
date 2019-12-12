
import React from 'react';
import { Link } from "react-router-dom";

import Breadcrumb from 'react-bootstrap/Breadcrumb';

function Breadcrumbs(props) {
  const {location} = props;
  const crums = location.pathname.split('/');

  // Generate Breadcrumbs from pathname
  let editedCrums = [];
  let path = '';
  for(let i=1;i<crums.length;i++) {
    path += '/'+crums[i];
    editedCrums.push({path: path, link: crums[i].charAt(0).toUpperCase() + crums[i].slice(1)})
  }

  return (
    <Breadcrumb>
      <Breadcrumb.Item href="/photo-browser">Home</Breadcrumb.Item>
      {editedCrums.map((crum, index) => (
        <li
          className={(index === editedCrums.length-1)?"breadcrumb-item active":"breadcrumb-item"}
          key={index}
        >
        { index === editedCrums.length-1 ?
          (<span className="active">{crum.link}</span>) :
          (<Link to={crum.path}>{crum.link}</Link>)
        }
        </li>
      ))

      }

    </Breadcrumb>
  );
}

export default Breadcrumbs;
