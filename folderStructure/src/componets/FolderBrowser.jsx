import React from 'react';
import data from '../../config';
import Folder from './Folder';

const FolderBrowser = () => {
  return (
    <>
      <h1> Folder Browser  </h1>
      <div className="folder-browser">
        {data.map((item, index) => (
          <Folder key={index} item={item} />
          // console.log("index is = " , index , " or item = " , item)
        ))}
      </div>
    </>
  );
};

export default FolderBrowser;
