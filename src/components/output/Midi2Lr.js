import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../../actions/actions';
import ConvertToFiles from '../../converters/convertToFiles';

export class Midi2Lr extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      controls: Object.assign({}, props.controls)
    };
  }

  render() {

    const converter = new ConvertToFiles(this.props.controls);
 
    return (
      <textarea value={converter.toMidi2Lr()} readOnly>
      </textarea>
    );
  }
}

Midi2Lr.propTypes = {
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

export default connect(mapStateToProps, mapDispatchToProps)(Midi2Lr); 