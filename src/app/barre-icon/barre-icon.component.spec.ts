import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BarreIconComponent } from './barre-icon.component';

describe('BarreIconComponent', () => {
  let component: BarreIconComponent;
  let fixture: ComponentFixture<BarreIconComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BarreIconComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BarreIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
