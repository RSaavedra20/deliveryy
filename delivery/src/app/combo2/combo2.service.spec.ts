import { TestBed } from '@angular/core/testing';

import { Combo2Service } from './combo2.service';

describe('Combo2Service', () => {
  let service: Combo2Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Combo2Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
