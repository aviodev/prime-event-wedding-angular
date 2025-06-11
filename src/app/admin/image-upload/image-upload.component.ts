import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-image-upload',
  templateUrl: './image-upload.component.html',
  styleUrls: ['./image-upload.component.scss'],
})
export class ImageUploadComponent implements OnInit {
  uploadedFiles: any[] = [];
  selectedFiles: any[] = [];
  constructor(private _admin_api: ApiService, private toaster: ToastrService) {}
  category: any = [
    { name: 'Wedding', code: 'WED' },
    { name: 'Engagement', code: 'ENG' },
    { name: 'College/School Fest', code: 'CLG' },
    { name: 'Birthday/Other party', code: 'BTH' },
    { name: 'Corporate', code: 'CPT' },
    { name: 'Product Launch', code: 'PDT' },
  ];
  selectedCategory: any;
  ngOnInit(): void {}
  onSelect(event) {
    for (let file of event.target.files) {
      if (file.size > 800000) {
        this.toaster.error('Max size 800kb');
      } else {
        this.uploadedFiles.push(file);
        const filereader = new FileReader();
        filereader.onload = (e) => {
          this.selectedFiles.push(e.target.result);
        };
        filereader.readAsDataURL(file);
      }
    }
  }
  onUploadImages() {
    this._admin_api
      .uploadImages_api(this.uploadedFiles, this.selectedCategory)
      .subscribe(
        (res) => {
          console.log(res);
          (this.uploadedFiles = []), (this.selectedFiles = []);
          this.toaster.success('Uploaded');
        },
        (err) => {
          console.log(err);
          this.toaster.error('Error: ', err);
        }
      );
  }
  onRemove(i) {
    this.uploadedFiles.splice(i, 1);
    this.selectedFiles.splice(i, 1);
    console.log(this.uploadedFiles);
  }
}
