import React from 'react';
import Commands from '../commands/Commands'; //eslint-disable-line import/no-named-as-default
import Controls from '../controls/Controls'; //eslint-disable-line import/no-named-as-default
import { DragDropContext } from 'react-dnd';
import HTML5Backend, { NativeTypes } from 'react-dnd-html5-backend';

@DragDropContext(HTML5Backend)
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
