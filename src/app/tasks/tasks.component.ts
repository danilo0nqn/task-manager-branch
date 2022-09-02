import { Component, Input, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  themeIs: string = 'darkTheme'
  clipboardImgURL: string = "../../assets/clipboardWhite.png"
  shareImgURL: string = "../../assets/shareWhite.png"
  deleteImgURL: string = "../../assets/trashWhite.png"
  tasks: string[] = [];

  copyTask (index: number) {
    console.log('You have copied "' + this.tasks[index] + '" task!');
  }

  shareTask (index: number) {
    console.log('You have shared "' + this.tasks[index] + '" task!!');
  }

  deleteTask (index: number) {
    this.tasks.splice(index, 1);
  }
  
  @Input() taskToAdd! : string ;
  @Input() theme! : string ;

  ngOnChanges(changes: SimpleChanges) {
    for (let propName in changes) {  
      let change = changes[propName];
      
      let curVal  = JSON.stringify(change.currentValue);
      let prevVal = JSON.stringify(change.previousValue);
      let changeLog = `${propName}: currentValue = ${curVal}, previousValue = ${prevVal}`;
      
      if (propName === 'taskToAdd') {
        if (this.taskToAdd !== '') {
          this.tasks.push(this.taskToAdd)
        }
      } else if (propName === 'theme') {
        this.themeIs = this.theme;
        if (this.themeIs === 'darkTheme') {
          this.clipboardImgURL = "../../assets/clipboardWhite.png";
          this.shareImgURL = "../../assets/shareWhite.png";
          this.deleteImgURL = "../../assets/trashWhite.png";
        } else if (this.themeIs === 'lightTheme') {
          this.clipboardImgURL = "../../assets/clipboardBlack.png";
          this.shareImgURL = "../../assets/shareBlack.png";
          this.deleteImgURL = "../../assets/trashBlack.png";
        }
      }
    }
  }
  
}

