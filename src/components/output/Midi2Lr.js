import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../../actions/actions';
import StringBuilder from 'string-builder';

export class Midi2Lr extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      controls: Object.assign({}, props.controls)
    };
  }

  render() {


  const commands = [];
  const preset = 1;
  const maxCodes = 95; 

  for(let key in this.props.controls)
  {  
      this.props.controls[key].forEach((control) => {
        if(typeof control.command != 'object')
            return;
        let idx = commands.indexOf(control.command.name);
        if(idx<0){
            idx = commands.length; 
            commands.push(control.command.name);
        }
      });
  }
  
  let sb = new StringBuilder();
  sb.appendLine(`<?xml version="1.0" encoding="UTF-8"?>
<settings>`);
  commands.forEach((item, idx) => {
        sb.appendFormat(`
	<setting channel="{0}" NRPN="False" Relative="False" controller="{1}" command_string="{2}"/>`
        , Math.floor(idx/maxCodes)+1, idx%maxCodes + 1, item);
  });

  sb.appendLine("</settings>");

    return (
      <textarea value={sb} readOnly>
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