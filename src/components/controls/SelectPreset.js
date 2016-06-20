import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../../actions/actions';
import Select from 'react-select';

function mapStateToProps(state, ownProps) {
  return {
    presetIdx: state.controlPreset.presetIdx,
    presets: state.controlPreset.presets
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}

@connect(mapStateToProps, mapDispatchToProps)
export default class SelectPreset extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      presetIdx: Object.assign({}, props.presetIdx),
      presets: [...props.presets]
    };

    this.onChange = this.onChange.bind(this);
    this.onRemovePreset = this.onRemovePreset.bind(this);
    this.onAddPreset = this.onAddPreset.bind(this);
    this.onRenamePreset = this.onRenamePreset.bind(this);
    this.onMoveUpPreset = this.onMoveUpPreset.bind(this);
    this.onMoveDownPreset = this.onMoveDownPreset.bind(this);
  }

  onChange(event){
    this.props.actions.selectPreset(event.nativeEvent.target.selectedIndex);
  }

  onAddPreset(event){
    const name = prompt("Enter preset name", ""); 
    this.props.actions.addPreset(name);
  }

  onRemovePreset(event){
    if(confirm("Are you sure? This cannot be undone"))
    this.props.actions.deletePreset(this.props.presetIdx);
  }

  onRenamePreset(event){
    const name = prompt("Enter preset name", ""); 
    this.props.actions.renamePreset(this.props.presetIdx, name);
  }

  onMoveUpPreset(event){
    this.props.actions.moveUpPreset(this.props.presetIdx);
  }

  onMoveDownPreset(event){
    this.props.actions.moveDownPreset(this.props.presetIdx);
  }

  render() {
    return (
        <div>
            <select onChange = {this.onChange}>
              {this.props.presets.map((item,index) => 
                <option value={index}>{index+1}: {item.name}</option>)}
            </select> 
            <a href="#" onClick={this.onAddPreset}>[+]</a>
            <a href="#" onClick={this.onRemovePreset}>[-]</a>
            <a href="#" onClick={this.onRenamePreset}>[N]</a>
            <a href="#" onClick={this.onMoveUpPreset}>[^]</a>
            <a href="#" onClick={this.onMoveDownPreset}>[v]</a>

            // TODO:
            // <a href="#" onClick={this.onCopyPreset}>[C]</a>
            // <a href="#" onClick={this.onPastePreset}>[P]</a>
        </div>
    );
  }
}

SelectPreset.propTypes = {
  presetIdx: PropTypes.object.isRequired,
  presets: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};


