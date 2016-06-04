import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as commandActions from '../../actions/commandActions';
import CommandItem from './CommandItem';

export class Command extends React.Component {
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
    return (
      <div onClick={this.useCommand}>
        <CommandItem command={this.props.command} />
      </div>
    );
  }
}

Command.propTypes = {
  command: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired
}; 

function mapStateToProps(state, ownProps) {
  return {
    command: state.commands.find(item => item.name == ownProps.command.name)
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(commandActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Command); 