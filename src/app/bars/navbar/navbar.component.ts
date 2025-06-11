import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  @HostListener('window:resize', ['$event'])
  onResize(event) {
    if (event.target.innerWidth > 1000) {
      this.sidePanel = false;
    }
    if (!this.sidePanel) {
      this.body.style.height = '100%';
    }
  }
  body: any;
  sidePanel: boolean = false;
  constructor(private route: Router) {}

  ngOnInit(): void {
    this.body = <HTMLElement>document.querySelector('body');
    this.route.events.subscribe((res) => {
      this.sidePanel = false;
      this.body.style.height = '100%';
    });
  }
  toggleSidePanel() {
    this.sidePanel = !this.sidePanel;
    if (this.sidePanel) {
      this.body.style.height = '92vh';
    } else {
      this.body.style.height = '100%';
    }
  }
}
