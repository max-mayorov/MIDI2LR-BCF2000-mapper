import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../../actions/actions';
import CommandItem from './CommandItem';
import { DragSource } from 'react-dnd';

const boxSource = {
  beginDrag(props) {
    return {
      name: props.name,
      command: props.command
    };
  }
};

const mapStateToProps = (state, ownProps) => {
  const command = state.commands.find(item => item.name == ownProps.command.name); 
  return {
    command: command,
    type: command.type,
    name: command.name
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
};


@connect(mapStateToProps, mapDispatchToProps)
@DragSource(props => props.type, boxSource, (xconnect, monitor) => ({
  connectDragSource: xconnect.dragSource(),
  isDragging: monitor.isDragging()
}))
export default class Command extends React.Component {
  constructor(props, context) { 
    super(props, context);

    this.state = {
      command: Object.assign({}, props.command)
    };
    
    this.useCommand = this.useCommand.bind(this);
  }
  
    
  useCommand(event) {
    this.props.actions.useCommand(this.props.command);
  } 

  render() {
    const { name, isDropped, isDragging, connectDragSource } = this.props;
    return connectDragSource(
      <div onClick={this.useCommand}>
        {isDropped ? <s>{name}</s> : name}
        <CommandItem command={this.props.command} />
      </div>
    );
  }
}

Command.propTypes = {
  command: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired,
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isDropped: PropTypes.bool.isRequired
}; 

//export default connect(mapStateToProps, mapDispatchToProps)(Command); 