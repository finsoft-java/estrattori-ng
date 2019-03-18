import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ElementiComponent } from './elementi.component';

describe('ElementiComponent', () => {
  let component: ElementiComponent;
  let fixture: ComponentFixture<ElementiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ElementiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ElementiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
