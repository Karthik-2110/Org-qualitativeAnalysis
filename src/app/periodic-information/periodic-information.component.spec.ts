import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeriodicInformationComponent } from './periodic-information.component';

describe('PeriodicInformationComponent', () => {
  let component: PeriodicInformationComponent;
  let fixture: ComponentFixture<PeriodicInformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PeriodicInformationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PeriodicInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
