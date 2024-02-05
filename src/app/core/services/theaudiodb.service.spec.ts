import { TestBed } from '@angular/core/testing';

import { TheaudiodbService } from './theaudiodb.service';

describe('TheaudiodbService', () => {
  let service: TheaudiodbService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TheaudiodbService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
