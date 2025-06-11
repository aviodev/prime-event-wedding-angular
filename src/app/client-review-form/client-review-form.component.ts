import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Toast, ToastrService } from 'ngx-toastr';
import { ClientApiService } from '../services/client-api.service';

@Component({
  selector: 'app-client-review-form',
  templateUrl: './client-review-form.component.html',
  styleUrls: ['./client-review-form.component.scss'],
})
export class ClientReviewFormComponent implements OnInit {
  constructor(
    private _api: ClientApiService,
    private _acRoute: ActivatedRoute,
    private toaster: ToastrService,
    private router: Router
  ) {}
  reviewForm = {
    name: '',
    feedback: '',
    stars: '0',
    time: new Date(),
    file: {},
  };
  onSuccess: boolean = false;
  ngOnInit(): void {
    this.resetAll();
    this.onSuccess = false;
    this._acRoute.params.subscribe(
      (params) => (this.reviewForm.name = params['name'])
    );
  }
  onSubmit() {
    if (this.reviewForm.stars) {
      this.reviewForm.time = new Date();
      this._api.submitReview(this.reviewForm).subscribe(
        (res) => {
          this.toaster.success('Done');
          this.onSuccess = true;
          setTimeout(() => {
            this.router.navigate(['/']);
          }, 2000);
        },
        (err) => {
          this.toaster.error(err.error);
        }
      );
    }
  }
  resetAll() {
    this.reviewForm = {
      name: '',
      feedback: '',
      stars: '0',
      time: new Date(),
      file: {},
    };
  }
}
