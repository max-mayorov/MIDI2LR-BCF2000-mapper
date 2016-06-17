import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../../actions/actions';
import Bcf2000  from './Bcf2000';

export class Controls extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      controls: Object.assign({}, props.controls)
    };
  }

  render() {
    return (
      <Bcf2000 controls={this.props.controls} />
    );
  }
}

Controls.propTypes = {
  controls: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    controls: state.controls
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Controls); 