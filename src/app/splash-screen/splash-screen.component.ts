import { Component, OnInit } from '@angular/core';
import { interval, take } from 'rxjs';

@Component({
  selector: 'app-splash-screen',
  templateUrl: './splash-screen.component.html',
  styleUrls: ['./splash-screen.component.css']
})
export class SplashScreenComponent implements OnInit {
  /**
   * Show only the splash screen, as long as this var is true.
   */
  splashscreenIsShown = true;
  constructor() { }

  ngOnInit(): void {
    interval(2000)
      .subscribe(() => {
        this.hideTheSplashscreen();
      });
  }

  hideTheSplashscreen() {
    this.splashscreenIsShown = false;
  }
}
