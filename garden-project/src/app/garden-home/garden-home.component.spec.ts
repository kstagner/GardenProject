import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GardenHomeComponent } from './garden-home.component';

describe('GardenHomeComponent', () => {
  let component: GardenHomeComponent;
  let fixture: ComponentFixture<GardenHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GardenHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GardenHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
