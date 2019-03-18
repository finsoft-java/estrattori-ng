import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComboComponent } from './contenitore-combo.component';

describe('ComboComponent', () => {
  let component: ComboComponent;
  let fixture: ComponentFixture<ComboComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComboComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComboComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
