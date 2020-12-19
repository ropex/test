import { TestBed } from '@angular/core/testing';

import { ExampleNg6LibService } from './example-ng6-lib.service';

describe('ExampleNg6LibService', () => {
  let service: ExampleNg6LibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExampleNg6LibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
