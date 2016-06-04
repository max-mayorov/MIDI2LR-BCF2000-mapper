import React from 'react';
import Commands from '../commands/Commands'; //eslint-disable-line import/no-named-as-default

class MapperPage extends React.Component {
  render() {
    return (
       <div className="mapper">
        <Commands/>
      </div>
    );
  }
}

export default MapperPage;
