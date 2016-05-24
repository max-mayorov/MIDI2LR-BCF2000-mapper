import { Component } from '@angular/core';
import {Dragula, DragulaService} from 'ng2-dragula/ng2-dragula';

@Component({
  selector: 'control',
  templateUrl: 'app/components/bcf2000/control.component.html',
  properties: ['id', 'name'],
  directives: [Dragula],
  viewProviders: [DragulaService],
  styleUrls: ['app/components/bcf2000/bcf2000.component.css']
})
export class ControlComponent {
  constructor(private dragulaService: DragulaService) {
    dragulaService.drag.subscribe((value) => {
      console.log("drag"+value);
    });
    dragulaService.drop.subscribe((value) => {
      console.log("drop"+value);
    });
    dragulaService.over.subscribe((value) => {
      console.log("over"+value);
    });
    dragulaService.out.subscribe((value) => {
      console.log("out"+value);
    });
  }
}
