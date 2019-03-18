import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabelleStaticComponent } from './tabelle-static.component';

describe('TabelleStaticComponent', () => {
  let component: TabelleStaticComponent;
  let fixture: ComponentFixture<TabelleStaticComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabelleStaticComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabelleStaticComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
