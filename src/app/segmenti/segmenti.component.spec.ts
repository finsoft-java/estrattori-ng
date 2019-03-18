import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SegmentiComponent } from './segmenti.component';

describe('SegmentiComponent', () => {
  let component: SegmentiComponent;
  let fixture: ComponentFixture<SegmentiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SegmentiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SegmentiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
