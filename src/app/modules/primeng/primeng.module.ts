import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//primeng module
import { DialogModule } from 'primeng/dialog';
import { DropdownModule } from 'primeng/dropdown';
import { VirtualScrollerModule } from 'primeng/virtualscroller';
import { FileUploadModule } from 'primeng/fileupload';
import { HttpClientModule } from '@angular/common/http';
import { RatingModule } from 'primeng/rating';
const PrimeNgComponent = [
  DialogModule,
  DropdownModule,
  VirtualScrollerModule,
  FileUploadModule,
  HttpClientModule,
  RatingModule,
];
@NgModule({
  imports: [PrimeNgComponent],
  exports: [PrimeNgComponent],
})
export class PrimengModule {}
