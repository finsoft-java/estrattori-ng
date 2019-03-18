import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { TitledPanelComponent } from './titled-panel.component';

describe('TitledPanelComponent', () => {
  let component: TitledPanelComponent;
  let fixture: ComponentFixture<TitledPanelComponent>;
  let debug: DebugElement;
  let title: string;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TitledPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TitledPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
