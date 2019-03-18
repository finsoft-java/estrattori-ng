import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabelleCheckboxComponent } from './tabelle-checkbox.component';

describe('TabelleCheckboxComponent', () => {
  let component: TabelleCheckboxComponent;
  let fixture: ComponentFixture<TabelleCheckboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabelleCheckboxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabelleCheckboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
