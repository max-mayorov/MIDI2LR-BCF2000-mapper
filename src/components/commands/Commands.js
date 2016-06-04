import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as commandActions from '../../actions/commandActions';
import CommandsList  from './CommandsList';

export class Commands extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      commands: Object.assign({}, props.commands)
    };
  }

  render() {
    return (
      <CommandsList commands={this.props.commands} />
    );
  }
}

Commands.propTypes = {
  commands: PropTypes.array.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    commands: state.commands
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(commandActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Commands); 