import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

const base_url = environment.base_url;
const page_salt = environment.page_salt;
@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private _http: HttpClient) {}

  uploadImages_api(files: any[], params: any) {
    console.log(files);
    let formData: FormData = new FormData();
    files.map((file) => {
      formData.append('files', file);
    });
    return this._http.post(
      base_url + '/api/admin/v1/gallery/' + params.code,
      formData
    );
  }
  uploadReviewForm(content: FormData, params: any) {
    return this._http.post(
      `${base_url}/api/admin/v1/reviews/${params.code}`,
      content
    );
  }
  getAllReviews() {
    return this._http.get(`${base_url}/api/admin/v1/reviews`);
  }
  getGallery() {
    return this._http.get(`${base_url}/api/admin/v1/galleryall`);
  }
}
