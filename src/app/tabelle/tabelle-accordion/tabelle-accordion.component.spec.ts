import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabelleAccordionComponent } from './tabelle-accordion.component';

describe('TabelleAccordionComponent', () => {
  let component: TabelleAccordionComponent;
  let fixture: ComponentFixture<TabelleAccordionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabelleAccordionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabelleAccordionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
