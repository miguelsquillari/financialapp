import { TestBed } from '@angular/core/testing';

import { DolarcotizacionService } from './dolarcotizacion.service';

describe('DolarcotizacionService', () => {
  let service: DolarcotizacionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DolarcotizacionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
