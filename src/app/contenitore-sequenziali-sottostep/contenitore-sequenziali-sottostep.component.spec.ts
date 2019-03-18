import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContenitoreSequenzialiSottostepComponent } from './contenitore-sequenziali-sottostep.component';

describe('ContenitoreSequenzialiSottostepComponent', () => {
  let component: ContenitoreSequenzialiSottostepComponent;
  let fixture: ComponentFixture<ContenitoreSequenzialiSottostepComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContenitoreSequenzialiSottostepComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContenitoreSequenzialiSottostepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
