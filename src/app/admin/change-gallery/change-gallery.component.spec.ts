import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeGalleryComponent } from './change-gallery.component';

describe('ChangeGalleryComponent', () => {
  let component: ChangeGalleryComponent;
  let fixture: ComponentFixture<ChangeGalleryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChangeGalleryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangeGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
