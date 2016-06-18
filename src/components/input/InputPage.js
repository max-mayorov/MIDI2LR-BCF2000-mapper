import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../../actions/actions';
import ConvertFromFiles from '../../converters/convertFromFiles';

export class InputPage extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      bcf2000: "",
      midi2Lr: ""
    };

    this.onClick = this.onClick.bind(this);
    this.onChangeBcf = this.onChangeBcf.bind(this);
    this.onChangeM2L = this.onChangeM2L.bind(this);
  }

  onClick(event){
    const convertFromFiles = new ConvertFromFiles(this.state.bcf2000, this.state.midi2Lr);
  }

  onChangeBcf(event){
    this.setState({
        bcf2000: event.target.value
    });
  }

  onChangeM2L(event){
    this.setState({
        midi2Lr: event.target.value
    });
  }

  render() {
    return (
      <div className="input">
        <textarea value={this.state.bcf2000} onChange={this.onChangeBcf}>
        </textarea>
        <textarea value={this.state.midi2Lr} onChange={this.onChangeM2L}>
        </textarea>
        <button onClick={this.onClick}>Parse</button>
      </div>
    );
  }
}

InputPage.propTypes = {
};

function mapStateToProps(state, ownProps) {
  return {
    //controls: state.controls
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(InputPage); 