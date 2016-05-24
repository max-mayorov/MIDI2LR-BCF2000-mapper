import { Component} from '@angular/core';
import {Dragula, DragulaService} from 'ng2-dragula/ng2-dragula';



@Component({
  selector: 'lrCommands',
  templateUrl: 'app/components/lrCommands/lrCommands.component.html',
  styleUrls: ['app/components/lrCommands/lrCommands.component.css'],
  directives: [Dragula],
  viewProviders: [DragulaService],
})
export class LrCommandsComponent {
     constructor(private dragulaService: DragulaService) {
     dragulaService.drag.subscribe((value) => {
      this.onDrag(value.slice(1));
    });
    dragulaService.drop.subscribe((value) => {
      this.onDrop(value.slice(1));
    });
    dragulaService.over.subscribe((value) => {
      this.onOver(value.slice(1));
    });
    dragulaService.out.subscribe((value) => {
      this.onOut(value.slice(1));
    });
  }
      getAll(){
        return [
            "Exposure",
            "Contrast"
        ]
    }
    
  private onDrag(args) {
    let [e, el] = args;
    //this.removeClass(e, 'ex-moved');
    console.log(e.name);
    console.log(el.name);
  }

  private onDrop(args) {
    let [e, el] = args;
    //this.addClass(e, 'ex-moved');
    alert(e);
    console.log(e.name);
    console.log(el.name);
  }

  private onOver(args) {
    let [e, el, container] = args;
    //this.addClass(el, 'ex-over');
    console.log(e.name);
    console.log(el.name);
    console.log(container.name);
  }

  private onOut(args) {
    let [e, el, container] = args;
    //this.removeClass(el, 'ex-over');
    console.log(e.name);
    console.log(el.name);
    console.log(container.name);
  }
}
