import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FarfallaPageComponent } from './farfalla-page.component';

describe('FarfallaPageComponent', () => {
  let component: FarfallaPageComponent;
  let fixture: ComponentFixture<FarfallaPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FarfallaPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FarfallaPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
