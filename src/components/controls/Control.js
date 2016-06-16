import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as controlActions from '../../actions/controlActions';
import { DropTarget } from 'react-dnd';

const mapStateToProps = (state, ownProps) => {
  const control = state.controls[ownProps.control.type.toLowerCase()+'s']
            .find(item => item.id == ownProps.control.id); 
  return {
    control: control,
    accepts: control.accepts       
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(controlActions, dispatch)
  };
};

const dustbinTarget = {
  drop(props, monitor) {
    console.log(monitor.getItem().command);
    console.log(props.control);
    // this.setState(update(this.state, {
    //   dustbins: {
    //     [index]: {
    //       lastDroppedItem: {
    //         $set: item
    //       }
    //     }
    //   },
    //   droppedBoxNames: name ? {
    //     $push: [name]
    //   } : {}
    // }));
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
    const { accepts, isOver, canDrop, connectDropTarget, lastDroppedItem } = this.props;
    const isActive = isOver && canDrop;
    
    let backgroundColor = '#222'; 
    if (isActive) {
      backgroundColor = 'darkgreen';
    } else if (canDrop) {
      backgroundColor = 'darkkhaki';
    }

    return connectDropTarget(
      <div className="control" style={{ backgroundColor }}>
        {isActive ?
          'X' :
          accepts
        }      
        <div>
            {this.props.control.type} - {this.props.control.id}
        </div>  
         {lastDroppedItem &&
          <p>Last dropped: {JSON.stringify(lastDroppedItem)}</p>
        }
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
  lastDroppedItem: PropTypes.object,
  onDrop: PropTypes.func.isRequired  
}; 
