import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContenitoreSequenzialiComponent } from './contenitore-sequenziali.component';

describe('ContenitoreSequenzialiComponent', () => {
  let component: ContenitoreSequenzialiComponent;
  let fixture: ComponentFixture<ContenitoreSequenzialiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContenitoreSequenzialiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContenitoreSequenzialiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
