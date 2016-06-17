import React, {PropTypes} from 'react';
import Bcf2000 from './Bcf2000';
import Midi2Lr from './Midi2Lr';

const OutputPage = () => {
  return (<div className="output">
    <Bcf2000/>
    <Midi2Lr/>
  </div>);
};

export default OutputPage; 