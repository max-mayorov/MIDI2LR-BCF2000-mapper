import { Component} from '@angular/core';


@Component({
  selector: 'lrCommands',
  templateUrl: 'app/components/lrCommands/lrCommands.component.html',
  styleUrls: ['app/components/lrCommands/lrCommands.component.css']
})
export class LrCommandsComponent {
      getAll(){
        return [
            "Exposure",
            "Contrast"
        ]
    }
}
