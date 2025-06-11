import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductLaunchComponent } from './product-launch.component';

describe('ProductLaunchComponent', () => {
  let component: ProductLaunchComponent;
  let fixture: ComponentFixture<ProductLaunchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductLaunchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductLaunchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
