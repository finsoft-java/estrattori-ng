import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvancedSempliciComponent } from './advanced-semplici.component';

describe('AdvancedSempliciComponent', () => {
  let component: AdvancedSempliciComponent;
  let fixture: ComponentFixture<AdvancedSempliciComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdvancedSempliciComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdvancedSempliciComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
