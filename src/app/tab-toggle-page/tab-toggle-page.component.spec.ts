import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabTogglePageComponent } from './tab-toggle-page.component';

describe('TabTogglePageComponent', () => {
  let component: TabTogglePageComponent;
  let fixture: ComponentFixture<TabTogglePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabTogglePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabTogglePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
