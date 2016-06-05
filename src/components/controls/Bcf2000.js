import React, {PropTypes} from 'react';
import { Draggable, Droppable } from 'react-drag-and-drop';
import * as groups from '../../api/controlGroups';
import Control from './Control'; //eslint-disable-line import/no-named-as-default
/*eslint-disable react/jsx-key*/
const Bcf2000 = ({controls}) => {
  return (
      <div className="bcf2000">
        <div className="encoders encoder_group1">
            <div className="group">
                {controls.encoders
                    .filter(item => item.group == groups.ENCODER_GROUP1)
                    .map(item => <Control control={item} key={item.type+item.id} />)}
            </div>
            <div className="group">
                {controls.buttons
                    .filter(item => item.group == groups.ENCODER_GROUP1)
                    .map(item => <Control control={item} key={item.type+item.id} />)}
            </div>
        </div>
        <div className="encoders encoder_group2">
            <div className="group">
                {controls.encoders
                    .filter(item => item.group == groups.ENCODER_GROUP2)
                    .map(item => <Control control={item} key={item.type+item.id} />)}
            </div>
            <div className="group">
                {controls.buttons
                    .filter(item => item.group == groups.ENCODER_GROUP2)
                    .map(item => <Control control={item} key={item.type+item.id} />)}
            </div>
        </div>
        <div className="encoders encoder_group3">
            <div className="group">
                {controls.encoders
                    .filter(item => item.group == groups.ENCODER_GROUP3)
                    .map(item => <Control control={item} key={item.type+item.id} />)}
            </div>
            <div className="group">
                {controls.buttons
                    .filter(item => item.group == groups.ENCODER_GROUP3)
                    .map(item => <Control control={item} key={item.type+item.id} />)}
            </div>
        </div>     
        <div className="encoders encoder_group4">
            <div className="group">
                {controls.encoders
                    .filter(item => item.group == groups.ENCODER_GROUP4)
                    .map(item => <Control control={item} key={item.type+item.id} />)}
            </div>
            <div className="group">
                {controls.buttons
                    .filter(item => item.group == groups.ENCODER_GROUP4)
                    .map(item => <Control control={item} key={item.type+item.id} />)}
            </div>
        </div>    
        <div className="buttonRow group upper_row_keys">
            {controls.buttons
                .filter(item => item.group == groups.UPPER_ROW_KEYS)
                .map(item => <Control control={item} key={item.type+item.id} />)}
        </div>        
        <div className="buttonRow group lower_row_keys">
            {controls.buttons
                .filter(item => item.group == groups.LOWER_ROW_KEYS)
                .map(item => <Control control={item} key={item.type+item.id} />)}
        </div>  
        <div className="buttons group user_keys">
            {controls.buttons
                .filter(item => item.group == groups.USER_KEYS)
                .map(item => <Control control={item} key={item.type+item.id} />)}
        </div> 
        <div className="buttons group function_keys">
            {controls.buttons
                .filter(item => item.group == groups.FUNCTION_KEYS)
                .map(item => <Control control={item} key={item.type+item.id} />)}
        </div> 
        <div className="faders group faders">
            {controls.faders
                .filter(item => item.group == groups.FADERS)
                .map(item => <Control control={item} key={item.type+item.id} />)}
        </div> 
      </div>    
  );
};
/*eslint-enable react/jsx-key*/


Bcf2000.propTypes = {
  controls: PropTypes.object.isRequired
};

export default Bcf2000; 