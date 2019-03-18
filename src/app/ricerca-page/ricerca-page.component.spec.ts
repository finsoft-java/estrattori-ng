import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RicercaPageComponent } from './ricerca-page.component';

describe('RicercaPageComponent', () => {
  let component: RicercaPageComponent;
  let fixture: ComponentFixture<RicercaPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RicercaPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RicercaPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
