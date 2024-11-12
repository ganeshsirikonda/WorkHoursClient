import { TestBed } from '@angular/core/testing';

import { EmployeeLogService } from './employee-log.service';

describe('EmployeeLogService', () => {
  let service: EmployeeLogService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmployeeLogService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
