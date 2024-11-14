import { TestBed } from '@angular/core/testing';

import { ApiFilmesService } from './api-filmes.service';

describe('ApiFilmesService', () => {
  let service: ApiFilmesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiFilmesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
