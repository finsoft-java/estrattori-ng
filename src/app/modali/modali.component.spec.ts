import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModaliComponent } from './modali.component';

describe('ModaliComponent', () => {
  let component: ModaliComponent;
  let fixture: ComponentFixture<ModaliComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModaliComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModaliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
