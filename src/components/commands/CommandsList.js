import React, {PropTypes} from 'react';
import Command  from './Command'; //eslint-disable-line import/no-named-as-default

const CommandsList = ({commands}) => {
  return (
    <div className="commands">
      {commands.map((command, index) =>
        <Command key={index} command={command}/>
      )} 
    </div>
  );
};

CommandsList.propTypes = {
  commands: PropTypes.array.isRequired
};

export default CommandsList; 