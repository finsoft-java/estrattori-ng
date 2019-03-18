import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContenitoreStickyTabComponent } from './contenitore-sticky-tab.component';

describe('ContenitoreStickyTabComponent', () => {
  let component: ContenitoreStickyTabComponent;
  let fixture: ComponentFixture<ContenitoreStickyTabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContenitoreStickyTabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContenitoreStickyTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
