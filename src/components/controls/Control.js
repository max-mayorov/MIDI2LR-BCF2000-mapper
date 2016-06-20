import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../../actions/actions';
import { DropTarget } from 'react-dnd';

const mapStateToProps = (state, ownProps) => {
  const control = state.controlPreset
            .presets[state.controlPreset.presetIdx]
            .controls[ownProps.control.type.toLowerCase()+'s']
            .find(item => item.id == ownProps.control.id); 
  return {
    control: control,
    accepts: control.accepts
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
};

const dustbinTarget = {
  drop(props, monitor) {
    const command = monitor.getItem().command;
    props.actions.linkCommandToControl(command, props.control);
    props.actions.useCommand(command);
  }
};

@connect(mapStateToProps, mapDispatchToProps)
@DropTarget(props => props.accepts, dustbinTarget, (xconnect, monitor) => ({
  connectDropTarget: xconnect.dropTarget(),
  isOver: monitor.isOver(),
  canDrop: monitor.canDrop()
}))
export default class Control extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      control: Object.assign({}, props.control)
    };
  }




  render() {
    const { accepts, isOver, canDrop, connectDropTarget } = this.props;
    const isActive = isOver && canDrop;
    
    let backgroundColor = '#222'; 
    if (isActive) {
      backgroundColor = 'darkgreen';
    } else if (canDrop) {
      backgroundColor = 'darkkhaki';
    }

    return connectDropTarget(
      <div className="control" style={{ backgroundColor }}>
        {
          typeof this.props.control.command == 'object'
          ? this.props.control.command.name 
          : '--'
        }      
        <div>
            {this.props.control.type} - {this.props.control.id}
        </div>  
      </div>
    );
  }
}

Control.propTypes = {
  control: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired,
  connectDropTarget: PropTypes.func.isRequired,
  isOver: PropTypes.bool.isRequired,
  canDrop: PropTypes.bool.isRequired,
  accepts: PropTypes.arrayOf(PropTypes.string).isRequired,
  onDrop: PropTypes.func.isRequired  
}; 
