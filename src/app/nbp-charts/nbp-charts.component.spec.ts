import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NbpChartsComponent } from './nbp-charts.component';

describe('NbpChartsComponent', () => {
  let component: NbpChartsComponent;
  let fixture: ComponentFixture<NbpChartsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NbpChartsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NbpChartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
