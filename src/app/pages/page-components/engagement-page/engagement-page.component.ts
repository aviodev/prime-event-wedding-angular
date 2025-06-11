import { Component, OnInit } from '@angular/core';
import { ClientApiService } from 'src/app/services/client-api.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-engagement-page',
  templateUrl: './engagement-page.component.html',
  styleUrls: ['./engagement-page.component.scss'],
})
export class EngagementPageComponent implements OnInit {
  modalVisible: boolean = false;
  imageUrls: any[] = [];
  base_url = environment.base_url;
  modalImage: string = '';
  constructor(private _api: ClientApiService) {}

  ngOnInit(): void {
    this._api.getGalleryBypathCode('ENG').subscribe(
      (res: any[]) => {
        this.imageUrls = res;
      },
      (err) => {
        console.log(err);
      }
    );
  }
  onSwitchModal(img) {
    this.modalVisible = !this.modalVisible;
    this.modalImage = img;
  }
}
