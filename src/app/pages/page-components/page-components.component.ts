import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-page-components',
  templateUrl: './page-components.component.html',
  styleUrls: ['./page-components.component.scss'],
})
export class PageComponentsComponent implements OnInit {
  constructor(private _activeRoute: ActivatedRoute, private route: Router) {}
  basePath: string;
  childPath: string;
  url: string;
  ngOnInit(): void {
    //  console.log(this._activeRoute.snapshot.firstChild.routeConfig.path);
    this.basePath = this._activeRoute.routeConfig.path;
    this.childPath = this._activeRoute.snapshot.firstChild.routeConfig.path
      .replace('-', ' ')
      .replace('-', ' ')
      .replace('-', ' ')
      .replace('-', ' ')
      .replace('-', ' ')
      .replace('-', ' ')
      .replace('-', ' ');
    this.route.events.subscribe((x: any) => {
      this.basePath = this._activeRoute.routeConfig.path;
      this.childPath = this._activeRoute.snapshot.firstChild.routeConfig.path
        .replace('-', ' ')
        .replace('-', ' ')
        .replace('-', ' ')
        .replace('-', ' ')
        .replace('-', ' ')
        .replace('-', ' ')
        .replace('-', ' ');
    });
  }
}
