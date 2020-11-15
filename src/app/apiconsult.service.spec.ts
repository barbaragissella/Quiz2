import { TestBed } from '@angular/core/testing';

import { ApiconsultService } from './apiconsult.service';

describe('ApiconsultService', () => {
  let service: ApiconsultService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiconsultService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
