import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VendorRegdComponent } from './vendor-regd.component';

describe('VendorRegdComponent', () => {
  let component: VendorRegdComponent;
  let fixture: ComponentFixture<VendorRegdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VendorRegdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VendorRegdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
