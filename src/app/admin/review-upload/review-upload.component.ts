import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-review-upload',
  templateUrl: './review-upload.component.html',
  styleUrls: ['./review-upload.component.scss'],
})
export class ReviewUploadComponent implements OnInit {
  uploadedFile: any;
  selectedFile: any;
  allReviews: any[];
  category = [
    { name: 'Wedding', code: 'WED' },
    { name: 'Engagement', code: 'ENG' },
    { name: 'College/School Fest', code: 'CLG' },
    { name: 'Birthday/Other party', code: 'BTH' },
    { name: 'Corporate', code: 'CPT' },
    { name: 'Product Launch', code: 'PDT' },
  ];
  name: string = '';
  selectedCategory: any;
  reviewText: string = '';
  stars: string = '1';
  constructor(private _admin_api: ApiService, private toaster: ToastrService) {}
  ngOnInit(): void {
    this._admin_api.getAllReviews().subscribe((res: any[]) => {
      this.allReviews = res;
    });
  }
  onSelect(event) {
    let file = event.target.files[0];
    if (file.size > 800000) {
      this.toaster.error('max size 800kb');
    } else {
      const filereader = new FileReader();
      filereader.onload = (e) => {
        this.selectedFile = e.target.result;
      };
      filereader.readAsDataURL(file);
      this.uploadedFile = file;
    }
  }
  onUploadForm() {
    let formData: FormData = new FormData();

    formData.append('file', this.uploadedFile);
    formData.append('feedback', this.reviewText);
    formData.append('stars', this.stars);
    formData.append('name', this.name);
    this._admin_api.uploadReviewForm(formData, this.selectedCategory).subscribe(
      (result) => {
        this.resetAll();
        this.toaster.success('Uploaded');
      },
      (err) => {
        console.log(err);
      }
    );
  }
  resetAll() {
    this.onRemove();
    (this.selectedCategory = ''), (this.reviewText = '');
    this.name = '';
    this.stars = '0';
  }
  onRemove() {
    this.uploadedFile = '';
    this.selectedFile = '';
  }
}
