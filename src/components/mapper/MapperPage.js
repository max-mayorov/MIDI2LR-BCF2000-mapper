import React from 'react';
import Commands from '../commands/Commands'; //eslint-disable-line import/no-named-as-default
import Controls from '../controls/Controls'; //eslint-disable-line import/no-named-as-default

class MapperPage extends React.Component {
  render() {
    return (
       <div className="mapper">
        <Controls/>
        <Commands/>
      </div>
    );
  }
}

export default MapperPage;
