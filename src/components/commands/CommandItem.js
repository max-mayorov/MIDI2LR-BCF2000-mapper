import React, {PropTypes} from 'react';
import { Draggable, Droppable } from 'react-drag-and-drop'

const CommandItem = ({command}) => {
  return (
      <Draggable type={command.type} data={command.name}>
        {command.text}
        {command.usageCount>0 ? <sub>{command.usageCount}</sub> : ""}
      </Draggable>    
  );
};

CommandItem.propTypes = {
  command: PropTypes.object.isRequired
};

export default CommandItem; 