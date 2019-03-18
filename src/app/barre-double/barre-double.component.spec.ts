import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BarreDoubleComponent } from './barre-double.component';

describe('BarreDoubleComponent', () => {
  let component: BarreDoubleComponent;
  let fixture: ComponentFixture<BarreDoubleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BarreDoubleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BarreDoubleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
