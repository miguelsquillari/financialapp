import { TestBed } from '@angular/core/testing';

import { EvolutionService } from './evolution.service';

describe('EvelutionService', () => {
  let service: EvolutionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EvolutionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
