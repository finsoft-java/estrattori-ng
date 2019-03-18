import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabelleFiltrateComponent } from './tabelle-filtrate.component';

describe('TabelleFiltrateComponent', () => {
  let component: TabelleFiltrateComponent;
  let fixture: ComponentFixture<TabelleFiltrateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabelleFiltrateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabelleFiltrateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
