import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.themeChanger.emit(this.currentTheme);
  }

  currentTheme: string = 'darkTheme';
  lightTheme: string = '../../assets/moon.png';
  darkTheme: string = '../../assets/sun.png';
  fullscreenPath: string = "../../assets/fullscreenWhite.png";
  themeIcon: string = this.darkTheme;
  
  @Output() themeChanger = new EventEmitter<string>();

  changeTheme() {
    if (this.currentTheme === 'darkTheme') {
      this.currentTheme= 'lightTheme';
      this.themeIcon= this.lightTheme;
      this.fullscreenPath = "../../assets/fullscreenBlack.png";
    } else if (this.currentTheme === 'lightTheme') {
      this.currentTheme= 'darkTheme';
      this.themeIcon= this.darkTheme;
      this.fullscreenPath = "../../assets/fullscreenWhite.png";
    }
    this.themeChanger.emit(this.currentTheme);
  }
}
