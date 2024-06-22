/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ProductsDataTransferService } from './products-data-transfer.service';

describe('Service: ProductsDataTransfer', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProductsDataTransferService]
    });
  });

  it('should ...', inject([ProductsDataTransferService], (service: ProductsDataTransferService) => {
    expect(service).toBeTruthy();
  }));
});
