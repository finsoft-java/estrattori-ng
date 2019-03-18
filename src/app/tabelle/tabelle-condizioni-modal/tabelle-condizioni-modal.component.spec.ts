import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabelleCondizioniModalComponent } from './tabelle-condizioni-modal.component';

describe('TabelleCondizioniModalComponent', () => {
  let component: TabelleCondizioniModalComponent;
  let fixture: ComponentFixture<TabelleCondizioniModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabelleCondizioniModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabelleCondizioniModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
