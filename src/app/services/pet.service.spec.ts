import { TestBed } from '@angular/core/testing';
import {modules, services} from '../imports'

import { PetService } from './pet.service';

describe('PetService', () => {
  let service: PetService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [...modules, ...services]
    });
    service = TestBed.inject(PetService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
