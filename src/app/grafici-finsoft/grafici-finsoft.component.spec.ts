import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GraficiFinsoftComponent } from './grafici-finsoft.component';

describe('GraficiFinsoftComponent', () => {
  let component: GraficiFinsoftComponent;
  let fixture: ComponentFixture<GraficiFinsoftComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GraficiFinsoftComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GraficiFinsoftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
