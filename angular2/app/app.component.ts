import { Component } from '@angular/core';

import { Bcf2000Component } from './bcf2000.component';


@Component({
  selector: 'my-app',
  template: `<h1>MIDI2LR BCF2000 mapper</h1>
  <bcf2000>Loading</bcf2000>
  <lrCommands>Loading</lrCommands>
  `,
  directives: [Bcf2000Component]
})
export class AppComponent { }
