import { Component, OnInit } from '@angular/core';
const authPass = 'PRIMEEVENT@';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
})
export class AdminComponent implements OnInit {
  isAdmin: string = '';
  constructor() {}
  password: any;
  ngOnInit(): void {
    this.isAdmin = localStorage.getItem('admin').toString();
  }
  onChange() {
    if (this.password == authPass) {
      localStorage.setItem('admin', 'login');
      this.isAdmin = localStorage.getItem('admin').toString();
      this.password = '';
    }
  }
  logout() {
    localStorage.removeItem('admin');
    this.isAdmin = '';
  }
}
