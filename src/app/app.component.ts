import { Component, NgZone, Renderer, ElementRef } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Portfolio';

  lastScrollTop: number = 0;
  direction: string = "";
  constructor(lc: NgZone,
    private router: Router) {

    window.onscroll = () => {
      let st = window.pageYOffset;
      let dir = '';
      if (st > this.lastScrollTop) {
        dir = "down";
      } else {
        dir = "up";
      }
      this.lastScrollTop = st;
      lc.run(() => {
        this.direction = dir;
        if(dir == "down"){
          (document.querySelector('.topnav') as HTMLElement).style.top = '-3em';
        } else {
          (document.querySelector('.topnav') as HTMLElement).style.top = '0';
        }

      });
    };
  }

  goTo(url: string) {
    this.router.navigateByUrl(`/${url}`);
  }
}
