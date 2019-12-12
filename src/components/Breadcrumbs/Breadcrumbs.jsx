
import React from 'react';

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
      <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
      {editedCrums.map((crum, index) => (
        <Breadcrumb.Item
          key={index}
          active={(index === editedCrums.length-1)?true:false}
          href={crum.path}
        >{crum.link}</Breadcrumb.Item>
      ))

      }

    </Breadcrumb>
  );
}

export default Breadcrumbs;
