import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VitaResiduaDurationComponent } from './vita-residua-duration.component';

describe('VitaResiduaDurationComponent', () => {
  let component: VitaResiduaDurationComponent;
  let fixture: ComponentFixture<VitaResiduaDurationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VitaResiduaDurationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VitaResiduaDurationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
