import React, {PropTypes} from 'react';
import Command  from './Command'; //eslint-disable-line import/no-named-as-default

const CommandsList = ({commands, group}) => {
  return (
    <div className="commands">
      {commands.filter(item => item.group == group).map((command, index) =>
        <Command key={index} command={command}/>
      )} 
    </div>
  );
};

CommandsList.propTypes = {
  commands: PropTypes.array.isRequired,
  group: PropTypes.string.isRequired
};

export default CommandsList; 