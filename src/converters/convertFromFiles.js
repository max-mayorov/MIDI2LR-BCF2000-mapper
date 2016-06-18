import parseString from 'xml2js';

export default class ConvertToFiles  {
  constructor(bcf2000, midi2lr) {
      this.presets = this.parseController(bcf2000);
      this.commands = this.parseMidi2Lr(midi2lr);
  }

  parseMidi2Lr(midi2lr) {
      let ret = null;
      parseString(midi2lr, function (err, result) {
        if(err != null)
            throw err;
        else
            ret = result;
      });
      return ret.settings.setting.map(item => { return {
          name: item.command_string,
          channel: item.channel,
          code: item.controller
        };
      });
  }

  parseController(bcf2000){
      const presets = [];
      let preset = {};
      bcf2000.split('$').forEach((cmd) => {
          const operation = /^(\w+)(\s+(\d+))?/.exec(cmd);
          if(operation == null)
            return;
          switch(operation[1])
          {
              case "preset":
              {
                preset = {
                    controls: []
                };
              }
              break;
              case "fader":
              case "button":
              case "encoder":
              {
                  const easypar = /\.easypar CC (\d+)\s+(\d+)\s/.exec(cmd);
                  if(easypar != null){
                      preset.controls.push({
                          type: operation[1],
                          id: operation[3],
                          channel: easypar[1],
                          code: easypar[2]
                      });    
                  }
              }
              break;
              case "store":
              {
                  preset.id = operation[3];
                  presets.push(preset);
              }
          }
      });

      return presets;
  }
}