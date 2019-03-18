import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EtichettePageComponent } from './etichette-page.component';

describe('EtichettePageComponent', () => {
  let component: EtichettePageComponent;
  let fixture: ComponentFixture<EtichettePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EtichettePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EtichettePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
