import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import { Draggable, Droppable } from 'react-drag-and-drop';
import * as controlActions from '../../actions/controlActions';

export class Control extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      control: Object.assign({}, props.control)
    };

    this.onDrop = this.onDrop.bind(this);
  }
  
    
  onDrop(event) {
      alert('drop!');
    //this.props.actions.useCommand(this.props.command);
  } 

  render() {
    return (
      <div className="control">
        <Droppable type={[this.props.control.type]} 
                    data={this.props.control} 
                    onDrop={this.onDrop}>
            {this.props.control.type} - {this.props.control.id}
        </Droppable>  
      </div>
    );
  }
}

Control.propTypes = {
  control: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired
}; 

function mapStateToProps(state, ownProps) {
  return {
    control: state.controls[ownProps.control.type.toLowerCase()+'s']
            .find(item => item.id == ownProps.control.id)
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(controlActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Control); 