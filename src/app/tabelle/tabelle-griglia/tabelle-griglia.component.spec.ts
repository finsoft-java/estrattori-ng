import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabelleGrigliaComponent } from './tabelle-griglia.component';

describe('TabelleGrigliaComponent', () => {
  let component: TabelleGrigliaComponent;
  let fixture: ComponentFixture<TabelleGrigliaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabelleGrigliaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabelleGrigliaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
