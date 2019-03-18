import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgressBarPageComponent } from './progress-bar-page.component';

describe('ProgressBarPageComponent', () => {
  let component: ProgressBarPageComponent;
  let fixture: ComponentFixture<ProgressBarPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProgressBarPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgressBarPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
