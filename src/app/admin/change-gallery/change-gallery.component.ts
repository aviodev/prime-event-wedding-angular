import { Component, OnInit } from '@angular/core';

import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-change-gallery',
  templateUrl: './change-gallery.component.html',
  styleUrls: ['./change-gallery.component.scss'],
})
export class ChangeGalleryComponent implements OnInit {
  imageList: any[];
  name: string = '';
  link: string;
  constructor(private _api: ApiService) {}

  ngOnInit(): void {
    // this._api.getGallery().subscribe((res: any[]) => {
    //   this.imageList = res;
    //   console.log(res);
    // });
  }
  onRemove(item) {}
  onGenerate() {
    this.link = `https://www.primeeventandwedding.com//#/client-review/${this.name}`;
  }
}
