import React, {PropTypes} from 'react';

const CommandItem = ({command}) => {
  return (
      <div type={command.type} data={command.name}>
        {command.text}
        {command.usageCount>0 ? <sub>{command.usageCount}</sub> : ""}
      </div>    
  );
};

CommandItem.propTypes = {
  command: PropTypes.object.isRequired
};

export default CommandItem; 