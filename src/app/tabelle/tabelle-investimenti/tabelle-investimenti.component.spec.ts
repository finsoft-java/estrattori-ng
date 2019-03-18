import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabelleInvestimentiComponent } from './tabelle-investimenti.component';

describe('TabelleStandardComponent', () => {
  let component: TabelleInvestimentiComponent;
  let fixture: ComponentFixture<TabelleInvestimentiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabelleInvestimentiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabelleInvestimentiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
