import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SegmentiPageComponent } from './segmenti-page.component';

describe('ProgressBarPageComponent', () => {
  let component: SegmentiPageComponent;
  let fixture: ComponentFixture<SegmentiPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SegmentiPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SegmentiPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
