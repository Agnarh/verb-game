import { TestBed } from '@angular/core/testing';

import { VerbService } from './verb.service';

describe('VerbServiceService', () => {
  let service: VerbService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VerbService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
