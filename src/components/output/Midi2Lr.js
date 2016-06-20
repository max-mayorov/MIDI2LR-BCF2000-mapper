import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../../actions/actions';
import ConvertToFiles from '../../converters/convertToFiles';

export class Midi2Lr extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
            presets: props.presets

    };
  }

  render() {

    const converter = new ConvertToFiles(this.props.presets);
 
    return (
      <textarea value={converter.toMidi2Lr()} readOnly>
      </textarea>
    );
  }
}

Midi2Lr.propTypes = {
  presets: PropTypes.array.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
      presets: state.controlPreset.presets
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Midi2Lr); 