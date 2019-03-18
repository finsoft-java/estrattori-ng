import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TorteComponent } from './torte.component';

describe('TorteComponent', () => {
  let component: TorteComponent;
  let fixture: ComponentFixture<TorteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TorteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TorteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
