import { TestBed } from '@angular/core/testing';

import { CatalogService } from './catalog.service';

describe('CatalogServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CatalogService = TestBed.get(CatalogService);
    expect(service).toBeTruthy();
  });
});
