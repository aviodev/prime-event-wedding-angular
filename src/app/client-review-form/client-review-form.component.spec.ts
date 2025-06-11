import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientReviewFormComponent } from './client-review-form.component';

describe('ClientReviewFormComponent', () => {
  let component: ClientReviewFormComponent;
  let fixture: ComponentFixture<ClientReviewFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientReviewFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientReviewFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
