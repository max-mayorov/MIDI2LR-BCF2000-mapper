export default class ConvertToFiles  {
  constructor(controls) {
    const maxCodes = 95;
    this.controls = controls;
    this.commands = [];
    for(let key in this.controls)
    {  
        this.controls[key].forEach((control) => {
            if(typeof control.command != 'object')
                return;
            if(this.commands.filter(item => item.name == control.command.name).length==0){
                const idx = this.commands.length; 
                this.commands.push(
                    {
                        name: control.command.name,
                        channel: Math.floor(idx/maxCodes)+1,
                        code: idx%maxCodes + 1
                    });
            }
        });
    }
  }

  getCommandChannelCode(command)
  {
      if(typeof command != 'object')
        return {isFound: false};
      
      let value = this.commands.find((item) => item.name == command.name);
      return typeof value == 'undefined'  
        ? {isFound: false}
        : {isFound: true, channel: value.channel, code: value.code};
  }

  toBcf2000(preset){
    let s = `$rev F1 ; Firmware 1.10; BC Manager 3.0.0
$preset
  .name 'All Toggles Off         '
;Designed for MIDI2LR
  .snapshot off
  .request off
  .egroups 4
  .fkeys off
  .lock off
  .init`;


  this.controls.encoders.forEach((item) => {
      const {isFound, channel, code} = this.getCommandChannelCode(item.command);
      if(!isFound) 
        return;

      s+=`
$encoder ${item.id}
  .easypar CC ${channel} ${code} 0 127 absolute
  .showvalue on
  .mode 12dot
  .resolution 96 96 96 96
  .default 0`;
  });

  this.controls.buttons.forEach((item) => {
      const {isFound, channel, code} = this.getCommandChannelCode(item.command);
      if(!isFound) 
        return;

      s+=`
$button ${item.id}
  .easypar CC ${channel} ${code} 127 0 toggleoff
  .showvalue on
  .default 0`;
  });

  this.controls.faders.forEach((item, index) => {
      const {isFound, channel, code} = this.getCommandChannelCode(item.command);
      if(!isFound) 
        return;
      s+=`
$fader ${item.id}
  .easypar CC ${channel} ${code} 0 127 absolute
  .showvalue on
  .motor on
  .override move
  .keyoverride off
  .default 63`;
  });

    s+= `
$store ${preset}
$end`;

    return s;
  }

  toMidi2Lr(){
    let s=`<?xml version="1.0" encoding="UTF-8"?>
<settings>`;
    this.commands.forEach((item) => {
      s+=`
	<setting channel="${item.channel}" NRPN="False" Relative="False" controller="${item.code}" command_string="${item.name}"/>`;
    });

    s+=`
</settings>`;
    return s;
  }
}


