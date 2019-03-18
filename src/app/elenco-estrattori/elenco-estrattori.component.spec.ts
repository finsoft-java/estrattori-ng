import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ElencoEstrattoriComponent } from './elenco-estrattori.component';

describe('ElencoEstrattoriComponent', () => {
  let component: ElencoEstrattoriComponent;
  let fixture: ComponentFixture<ElencoEstrattoriComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ElencoEstrattoriComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ElencoEstrattoriComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
