import { TestBed } from '@angular/core/testing';

import { FlotifyService } from './flotify.service';

describe('FlotifyService', () => {
  let service: FlotifyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FlotifyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
