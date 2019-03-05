import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GardenProductComponent } from './garden-product.component';

describe('GardenProductComponent', () => {
  let component: GardenProductComponent;
  let fixture: ComponentFixture<GardenProductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GardenProductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GardenProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
