import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StepNavigabiliPageComponent } from './step-navigabili-page.component';

describe('StepNavigabiliPageComponent', () => {
  let component: StepNavigabiliPageComponent;
  let fixture: ComponentFixture<StepNavigabiliPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StepNavigabiliPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StepNavigabiliPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
