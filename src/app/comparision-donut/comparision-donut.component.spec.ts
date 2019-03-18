import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComparisionDonutComponent } from './comparision-donut.component';

describe('ComparisionDonutComponent', () => {
  let component: ComparisionDonutComponent;
  let fixture: ComponentFixture<ComparisionDonutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComparisionDonutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComparisionDonutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
