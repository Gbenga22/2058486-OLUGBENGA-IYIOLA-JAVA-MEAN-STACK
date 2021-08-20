import { TestBed } from '@angular/core/testing';

import { ExamplatformService } from './examplatform.service';

describe('ExamplatformService', () => {
  let service: ExamplatformService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExamplatformService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
