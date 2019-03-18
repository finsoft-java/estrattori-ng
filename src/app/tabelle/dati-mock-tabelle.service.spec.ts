import { TestBed, inject } from '@angular/core/testing';

import { DatiMockTabelleService } from './dati-mock-tabelle.service';

describe('DatiMockTabelleService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DatiMockTabelleService]
    });
  });

  it('should be created', inject([DatiMockTabelleService], (service: DatiMockTabelleService) => {
    expect(service).toBeTruthy();
  }));
});
