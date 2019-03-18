import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EstrattoriComponent } from './estrattori.component';

describe('EstrattoriComponent', () => {
  let component: EstrattoriComponent;
  let fixture: ComponentFixture<EstrattoriComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EstrattoriComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EstrattoriComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
