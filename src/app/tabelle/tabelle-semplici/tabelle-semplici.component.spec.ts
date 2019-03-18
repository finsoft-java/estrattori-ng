import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabelleSempliciComponent } from './tabelle-semplici.component';

describe('TabelleSempliciComponent', () => {
  let component: TabelleSempliciComponent;
  let fixture: ComponentFixture<TabelleSempliciComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabelleSempliciComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabelleSempliciComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
