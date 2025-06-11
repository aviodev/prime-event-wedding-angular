import { Component, OnInit } from '@angular/core';
import { ClientApiService } from 'src/app/services/client-api.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-product-launch',
  templateUrl: './product-launch.component.html',
  styleUrls: ['./product-launch.component.scss'],
})
export class ProductLaunchComponent implements OnInit {
  modalVisible: boolean = false;
  imageUrls: any[] = [];
  base_url = environment.base_url;
  modalImage: string = '';
  constructor(private _api: ClientApiService) {}

  ngOnInit(): void {
    this._api.getGalleryBypathCode('PDT').subscribe(
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
