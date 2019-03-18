import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GaugePageComponent } from './gauge-page.component';

describe('GaugePageComponent', () => {
  let component: GaugePageComponent;
  let fixture: ComponentFixture<GaugePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GaugePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GaugePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
