import { Component, OnInit } from '@angular/core';
import { ClientApiService } from 'src/app/services/client-api.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss'],
})
export class GalleryComponent implements OnInit {
  modalVisible: boolean = false;
  imageUrls: any[] = [];
  base_url = environment.base_url;
  modalImage: string = '';
  constructor(private _api: ClientApiService) {}

  ngOnInit(): void {
    this._api.getGalleryBypathCode('ALL').subscribe(
      (res: any[]) => {
        this.imageUrls = res;
        //  console.log(this.imageUrls);
      },
      (err) => {
        console.log(err);
      }
    );
    if (this.imageUrls.length) {
      window.scrollTo(0, 0);
    }
  }
  onSwitchModal(img) {
    this.modalVisible = !this.modalVisible;
    this.modalImage = img;
  }
}
