import { TestBed } from '@angular/core/testing';

import { DeleteRelationService } from './delete-relation.service';

describe('DeleteRelationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DeleteRelationService = TestBed.get(DeleteRelationService);
    expect(service).toBeTruthy();
  });
});
