import { TestBed } from '@angular/core/testing';

import { DolarCotizacionService } from './dolar-cotizacion.service';

describe('DolarCotizacionService', () => {
  let service: DolarCotizacionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DolarCotizacionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
