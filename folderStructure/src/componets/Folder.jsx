import React, { useState } from 'react';
import File from './File';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFolder, faFolderOpen } from '@fortawesome/free-solid-svg-icons';

const Folder = ({ item }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="folder">
      <div onClick={handleToggle} style={{ cursor: 'pointer' }}>
      <FontAwesomeIcon
        icon={isOpen ? faFolderOpen : faFolder}
        style={{ marginRight: '8px' }}
      /> {item.name}
      {/* {isOpen ? 'v' : '>'} {item.name} */}
      </div>
      {isOpen && (
        <div style={{ paddingLeft: '20px' }}>
          {item.children && item.children.map((child, index) =>
            child.type === 'folder' ? (
              <Folder key={index} item={child} />
            ) : (
              <File key={index} item={child} />
            )
          )}
        </div>
      )}
    </div>
  );
};

export default Folder;
