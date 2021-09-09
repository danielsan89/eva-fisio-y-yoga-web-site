import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HealthAndWellBeingComponent } from './health-and-well-being.component';

describe('HealthAndWellBeingComponent', () => {
  let component: HealthAndWellBeingComponent;
  let fixture: ComponentFixture<HealthAndWellBeingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HealthAndWellBeingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HealthAndWellBeingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
