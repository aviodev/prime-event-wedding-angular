import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollegeFestPageComponent } from './college-fest-page.component';

describe('CollegeFestPageComponent', () => {
  let component: CollegeFestPageComponent;
  let fixture: ComponentFixture<CollegeFestPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CollegeFestPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CollegeFestPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
