import { Component } from '@angular/core';

import { Bcf2000Component } from './components/bcf2000/bcf2000.component';
import { LrCommandsComponent } from './components/lrCommands/lrCommands.component';

import {Dragula, DragulaService} from 'ng2-dragula/ng2-dragula';

@Component({
  selector: 'my-app',
  template: `<h1>MIDI2LR BCF2000 mapper</h1>
  <bcf2000>Loading</bcf2000>
  <lrCommands>Loading</lrCommands>
  `,
  directives: [Bcf2000Component, LrCommandsComponent, Dragula],
  viewProviders: [DragulaService],
})
export class AppComponent { }
