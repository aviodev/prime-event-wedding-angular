import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CorporateEventPageComponent } from './corporate-event-page.component';

describe('CorporateEventPageComponent', () => {
  let component: CorporateEventPageComponent;
  let fixture: ComponentFixture<CorporateEventPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CorporateEventPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CorporateEventPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
