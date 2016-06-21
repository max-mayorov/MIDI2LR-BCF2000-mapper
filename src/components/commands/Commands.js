import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../../actions/actions';
import CommandsList  from './CommandsList';
import * as groups from '../../api/commandGroups.js';
import { Accordion, Panel } from "rec-accordion";

export class Commands extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      commands: Object.assign({}, props.commands)
    };
  }

  render() {
    return (
      <div className="commandsPanel">
        <Accordion>
        {groups.ALL_GROUPS.map(item =>
          <Panel title={item} key={item}>
            <CommandsList commands={this.props.commands} group={item}/>
          </Panel>
        )}
        </Accordion>
      </div>
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
    actions: bindActionCreators(actions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Commands); 