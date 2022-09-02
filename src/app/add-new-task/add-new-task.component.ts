import { Component, OnInit, Output, EventEmitter , Input , SimpleChanges} from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-new-task',
  templateUrl: './add-new-task.component.html',
  styleUrls: ['./add-new-task.component.scss']
})
export class AddNewTaskComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  newTask: string = 'task unchanged';
  addButtonImgURL: string = "../../assets/okBlack.png";
  themeIs: string = 'darkTheme'

  @Input() theme! : string ;

  ngOnChanges(changes: SimpleChanges) {
    for (let propName in changes) {  
      let change = changes[propName];
      
      let curVal  = JSON.stringify(change.currentValue);
      let prevVal = JSON.stringify(change.previousValue);
      let changeLog = `${propName}: currentValue = ${curVal}, previousValue = ${prevVal}`;
      
      if (propName === 'theme') {
        this.themeIs = this.theme;
        if (this.themeIs === 'darkTheme') {
          this.addButtonImgURL = "../../assets/okWhite.png";
        } else if (this.themeIs === 'lightTheme') {
          this.addButtonImgURL = "../../assets/okBlack.png";
        }
      }
      console.log('themeIs  ' + this.themeIs + 'button URL: ' + this.addButtonImgURL)
    }
  }
  
  onSubmit(f: NgForm) {
    this.newTask = f.value;
  }

  @Output() submitedTask = new EventEmitter<string>();

  addNewTask(value: string) {
    if (value.length > 0) {
      this.submitedTask.emit(value);
    }
  }
  
}
