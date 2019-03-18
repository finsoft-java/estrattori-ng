import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PulsantiPageComponent } from './pulsanti-page.component';

describe('PulsantiPageComponent', () => {
  let component: PulsantiPageComponent;
  let fixture: ComponentFixture<PulsantiPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PulsantiPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PulsantiPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
