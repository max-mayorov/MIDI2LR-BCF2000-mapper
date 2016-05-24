import { Component} from '@angular/core';

import { ControlComponent } from './control.component';

@Component({
  selector: 'bcf2000',
  templateUrl: 'app/components/bcf2000/bcf2000.component.html',
  directives: [ControlComponent],
  styleUrls: ['app/components/bcf2000/bcf2000.component.css']
})
export class Bcf2000Component {
      range(min,max){
        var input = [];
        for (var i = min; i <= max; ++i) input.push(i);
        return input;
    }
}
