import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../../actions/actions';
import Bcf2000  from './Bcf2000';
import SelectPreset  from './SelectPreset';

export class Controls extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      preset: Object.assign({}, props.preset)
    };
  }

  render() {
    return (
      <div>
        <SelectPreset 
          preset={this.props.preset} />
        <Bcf2000 controls={this.props.preset.controls} />
      </div>
    );
  }
}

Controls.propTypes = {
  preset: PropTypes.object.isRequired 
};

function mapStateToProps(state, ownProps) {
  return {
    presetIdx: state.controlPreset.presetIdx,
    preset: state.controlPreset.presets[state.controlPreset.presetIdx]
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Controls); 