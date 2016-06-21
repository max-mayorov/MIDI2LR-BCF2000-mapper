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
    this.props.actions.deletePreset();
  }

  onRenamePreset(event){
    const name = prompt("Enter preset name", ""); 
    this.props.actions.renamePreset(name);
  }

  onMoveUpPreset(event){
    this.props.actions.moveUpPreset();
  }

  onMoveDownPreset(event){
    this.props.actions.moveDownPreset();
  }

  render() {
    return (
      <div>
        <div  className="selectPreset">
            <select onChange = {this.onChange} value={this.props.presetIdx}>
              {this.props.presets.map((item,index) => 
                <option value={index} key={index}>P-{index+1}: {item.name}</option>)}
            </select> 
            <a href="#" onClick={this.onAddPreset} title="Add preset">[+]</a>
            <a href="#" onClick={this.onRemovePreset} title="Delete current preset">[-]</a>
            <a href="#" onClick={this.onRenamePreset} title="Rename current preset">[N]</a>
            <a href="#" onClick={this.onMoveUpPreset} title="Move current preset up">[^]</a>
            <a href="#" onClick={this.onMoveDownPreset} title="Move current preset down">[v]</a>
        </div>
        <div className="clear"></div>
      </div>
    );
  }
}

SelectPreset.propTypes = {
  presetIdx: PropTypes.object.isRequired,
  presets: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};


