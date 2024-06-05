import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFile } from '@fortawesome/free-solid-svg-icons';


const File = ({ item }) => {
  return (
    <div className="file">
      <FontAwesomeIcon icon={faFile} /> {item.name}
    </div>
  );
};

export default File;
