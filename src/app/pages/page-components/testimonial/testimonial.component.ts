import { Component, OnInit } from '@angular/core';
import { ClientApiService } from 'src/app/services/client-api.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-testimonial',
  templateUrl: './testimonial.component.html',
  styleUrls: ['./testimonial.component.scss'],
})
export class TestimonialComponent implements OnInit {
  constructor(private _api: ClientApiService) {}
  testimonials: any[] = [];
  base_url = environment.base_url;
  ngOnInit(): void {
    this._api.getAllTestimonialsByApi().subscribe((res: any[]) => {
      this.testimonials = res;
    });
  }
  counter(i: number) {
    return new Array(i);
  }
}
