import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContenitoreTabelleComponent } from './contenitore-tabelle.component';

describe('ContenitoreTabelleComponent', () => {
  let component: ContenitoreTabelleComponent;
  let fixture: ComponentFixture<ContenitoreTabelleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContenitoreTabelleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContenitoreTabelleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
