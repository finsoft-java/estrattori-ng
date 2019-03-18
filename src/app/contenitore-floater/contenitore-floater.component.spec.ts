import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContenitoreFloaterComponent } from './contenitore-floater.component';

describe('ContenitoreFloaterComponent', () => {
  let component: ContenitoreFloaterComponent;
  let fixture: ComponentFixture<ContenitoreFloaterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContenitoreFloaterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContenitoreFloaterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
