import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabelleRecoursiveComponent } from './tabelle-recoursive.component';

describe('TabelleRecoursiveComponent', () => {
  let component: TabelleRecoursiveComponent;
  let fixture: ComponentFixture<TabelleRecoursiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabelleRecoursiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabelleRecoursiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
