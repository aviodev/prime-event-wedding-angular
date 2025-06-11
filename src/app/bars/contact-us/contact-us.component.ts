import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {
  faLocation,
  faMailBulk,
  faPhone,
} from '@fortawesome/free-solid-svg-icons';
import { ToastrService } from 'ngx-toastr';
import { ClientApiService } from 'src/app/services/client-api.service';
@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss'],
})
export class ContactUsComponent implements OnInit {
  faLocation = faLocation;
  mail = faMailBulk;
  phone = faPhone;
  isloading: boolean = false;
  formData = {
    name: '',
    email: '',
    phone: '',
    event_type: 'Others',
    describe: '',
  };
  vaildRequest: boolean = false;
  regex = {
    name: /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/,
    email:
      /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
    phone: /[0-9]{10}/,
  };
  constructor(private _api: ClientApiService, private toaster: ToastrService) {}

  ngOnInit(): void {}
  onSubmit(form: NgForm) {
    if (form.valid) {
      // console.log(this.formData);
      this.isloading = true;
      this._api.submitRequest(this.formData).subscribe(
        (res) => {
          this.toaster.success('Thank you, Check your mail');
          this.isloading = false;
          this.vaildRequest = true;
          form.reset();
        },
        (err) => {
          this.toaster.error('Server error');
        }
      );
      return false;
    } else {
      return true;
    }
  }
  clear() {
    this.formData = {
      name: '',
      email: '',
      phone: '',
      event_type: 'Others',
      describe: '',
    };
  }
}
