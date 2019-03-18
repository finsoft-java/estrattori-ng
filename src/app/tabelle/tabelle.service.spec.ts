import { TestBed, inject } from '@angular/core/testing';

import { TableUtilService } from './tabelle.service';

describe('TabelleService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TableUtilService]
    });
  });

  it('should be created', inject([TableUtilService], (service: TableUtilService<any>) => {
    expect(service).toBeTruthy();
  }));
});
