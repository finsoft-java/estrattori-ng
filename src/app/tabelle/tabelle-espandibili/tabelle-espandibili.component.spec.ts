import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabelleEspandibiliComponent } from './tabelle-espandibili.component';

describe('TabelleEspandibiliComponent', () => {
  let component: TabelleEspandibiliComponent;
  let fixture: ComponentFixture<TabelleEspandibiliComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabelleEspandibiliComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabelleEspandibiliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
