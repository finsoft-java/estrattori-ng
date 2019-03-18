import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FarfallaComponent } from './farfalla.component';

describe('FarfallaComponent', () => {
  let component: FarfallaComponent;
  let fixture: ComponentFixture<FarfallaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FarfallaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FarfallaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
