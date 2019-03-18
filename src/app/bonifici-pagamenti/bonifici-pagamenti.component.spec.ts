import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BonificiPagamentiComponent } from './bonifici-pagamenti.component';

describe('BonificiPagamentiComponent', () => {
  let component: BonificiPagamentiComponent;
  let fixture: ComponentFixture<BonificiPagamentiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BonificiPagamentiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BonificiPagamentiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
