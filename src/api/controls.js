import * as groups from './controlGroups';
import * as types from './controlTypes';
import * as acceptTypes from './commandTypes';

const controls = {
    buttons: Array.from(new Array(56).keys()).map((item) => 
    ({
        type: types.BUTTON,
        accepts: acceptTypes.BUTTON,
        id: item+1,
        group: item<8 ? groups.ENCODER_GROUP1 
                : (item<16 ? groups.ENCODER_GROUP2
                : (item<24 ? groups.ENCODER_GROUP3
                : (item<32 ? groups.ENCODER_GROUP4
                : (item<40 ? groups.UPPER_ROW_KEYS
                : (item<48 ? groups.LOWER_ROW_KEYS
                : (item<52 ? groups.USER_KEYS
                : (item<56 ? groups.FUNCTION_KEYS : "")))))))
    })),
    
    encoders: Array.from(new Array(32).keys()).map((item) => ({ 
        type: types.ENCODER,
        accepts: acceptTypes.SLIDER,
        id: item+1,
        group: item<8 ? groups.ENCODER_GROUP1 
                : (item<16 ? groups.ENCODER_GROUP2
                : (item<24 ? groups.ENCODER_GROUP3
                : (item<32 ? groups.ENCODER_GROUP4 : "")))
    })),
    
    faders: Array.from(new Array(8).keys()).map((item) => ({ 
        type: types.FADER, 
        accepts: acceptTypes.SLIDER,
        id: item+1, 
        group: groups.FADERS }))
};


class ControlsApi {
  static getAllControls() {
    return controls;
  }
}

export default ControlsApi;
