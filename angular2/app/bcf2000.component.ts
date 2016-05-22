import { Component} from '@angular/core';

import { EncoderComponent } from './encoder.component';
import { FaderComponent } from './fader.component';
import { KeyComponent } from './key.component';


@Component({
  selector: 'bcf2000',
  templateUrl: 'app/bcf2000.component.html',
  directives: [EncoderComponent, FaderComponent, KeyComponent]
  //styleUrls: ['app/hero-detail.component.css']
})
export class Bcf2000Component {
      range(min,max){
        var input = [];
        for (var i = min; i <= max; ++i) input.push(i);
        return input;
    }
}
