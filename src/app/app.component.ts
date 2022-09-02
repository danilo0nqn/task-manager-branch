import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent{
  title = 'taskProject';
  task: string = '';
  themeIs: string = ''

  addTask(newTask: string) {
    this.task = (newTask);
  }

  themeChanged (theme: string) {
    this.themeIs = theme;
  }

}
