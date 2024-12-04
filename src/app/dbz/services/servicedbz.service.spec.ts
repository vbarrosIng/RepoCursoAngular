import { TestBed } from '@angular/core/testing';

import { ServicedbzService } from './servicedbz.service';

describe('ServicedbzService', () => {
  let service: ServicedbzService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicedbzService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
