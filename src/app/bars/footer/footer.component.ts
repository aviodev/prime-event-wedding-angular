import { Component, OnInit } from '@angular/core';
import {  faFaceMehBlank} from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  fb = faFaceMehBlank
  constructor() { }

  ngOnInit(): void {
  }

}
