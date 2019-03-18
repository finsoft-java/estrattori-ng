import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabelleSelezionabiliComponent } from './tabelle-selezionabili.component';

describe('TabelleSelezionabiliComponent', () => {
  let component: TabelleSelezionabiliComponent;
  let fixture: ComponentFixture<TabelleSelezionabiliComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabelleSelezionabiliComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabelleSelezionabiliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
