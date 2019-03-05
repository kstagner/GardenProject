import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GardenAboutComponent } from './garden-about.component';

describe('GardenAboutComponent', () => {
  let component: GardenAboutComponent;
  let fixture: ComponentFixture<GardenAboutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GardenAboutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GardenAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
