import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../../actions/actions';
import StringBuilder from 'string-builder';

export class Bcf2000 extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      controls: Object.assign({}, props.controls)
    };
  }

  render() {
    let sb = new StringBuilder( );
    sb.appendLine(`$rev F1 ; Firmware 1.10; BC Manager 3.0.0
$preset
  .name 'All Toggles Off         '
;Designed for MIDI2LR
  .snapshot off
  .request off
  .egroups 4
  .fkeys off
  .lock off
  .init`);

  const commands = [];
  const preset = 1;
  const maxCodes = 95;

  this.props.controls.encoders.forEach((item, index) => {
      if(typeof item.command != 'object')
        return;
      
      let idx = commands.indexOf(item.command.name);
      if(idx<0){
          idx = commands.length; 
          commands.push(item.command.name);
      }


      sb.appendFormat(
      `
$encoder {0}
  .easypar CC {1} {2} 0 127 absolute
  .showvalue on
  .mode 12dot
  .resolution 96 96 96 96
  .default 0`, item.id, Math.floor(idx/maxCodes)+1, idx%maxCodes + 1);
  });

  this.props.controls.buttons.forEach((item, index) => {
      if(typeof item.command != 'object')
        return;

              
      let idx = commands.indexOf(item.command.name);
      if(idx<0){
          idx = commands.length; 
          commands.push(item.command.name);
      }

      
      sb.appendFormat(
      `
$button {0}
  .easypar CC {1} {2} 127 0 toggleoff
  .showvalue on
  .default 0`, item.id, Math.floor(idx/maxCodes)+1, idx%maxCodes + 1);
  });


  this.props.controls.faders.forEach((item, index) => {
      if(typeof item.command != 'object')
        return;

              
      let idx = commands.indexOf(item.command.name);
      if(idx<0){
          idx = commands.length; 
          commands.push(item.command.name);
      }

      
      sb.appendFormat(
      `
$fader {0}
  .easypar CC {1} {2} 0 127 absolute
  .showvalue on
  .motor on
  .override move
  .keyoverride off
  .default 63`, item.id, Math.floor(idx/maxCodes)+1, idx%maxCodes + 1);
  });

sb.appendFormat(`
$store {0}`, preset);
sb.appendLine("$end");

    return (
      <textarea value={sb} readOnly>
      </textarea>
    );
  }
}

Bcf2000.propTypes = {
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

export default connect(mapStateToProps, mapDispatchToProps)(Bcf2000); 