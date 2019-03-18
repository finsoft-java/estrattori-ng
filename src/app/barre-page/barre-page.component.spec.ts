import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BarrePageComponent } from './barre-page.component';

describe('BarrePageComponent', () => {
  let component: BarrePageComponent;
  let fixture: ComponentFixture<BarrePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BarrePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BarrePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
