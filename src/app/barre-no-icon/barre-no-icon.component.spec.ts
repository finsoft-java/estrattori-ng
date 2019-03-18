import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BarreNoIconComponent } from './barre-no-icon.component';

describe('BarreNoIconComponent', () => {
  let component: BarreNoIconComponent;
  let fixture: ComponentFixture<BarreNoIconComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BarreNoIconComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BarreNoIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
