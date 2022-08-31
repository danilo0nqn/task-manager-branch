import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'taskProject';
  task: string = 'asd';
  imageUrl : string = '../img/trash.png';
  currentClasses: Record<string, boolean> = {};
  isSpecial = true;


  addTask(newTask: string) {
    this.task = (newTask);
    console.log(' this task: ' + this.task + '!');
  }

  setCurrentClasses() {
    this.currentClasses =  {
      special:  this.isSpecial
    };
  }
}
