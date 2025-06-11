import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
const base_url = environment.base_url;

@Injectable({
  providedIn: 'root',
})
export class ClientApiService {
  constructor(private _http: HttpClient) {}
  getGalleryBypathCode(pageCode: string) {
    return this._http.get(`../../assets/JSON/${pageCode}.json`);
  }
  getAllTestimonialsByApi() {
    return this._http.get(`${base_url}/api/client/v1/testimonials`);
  }
  submitReview(from: any) {
    return this._http.post(`${base_url}/api/client/v1/reviews`, from);
  }
  submitRequest(formData) {
    return this._http.post(`${base_url}/api/client/v1/request`, formData);
  }
  getImage(img_id) {
    return this._http.get(`${base_url}/api/image/${img_id}`);
  }
}
