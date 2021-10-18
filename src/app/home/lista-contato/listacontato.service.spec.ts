import { TestBed } from '@angular/core/testing';

import { ListacontatoService } from './listacontato.service';

describe('ListacontatoService', () => {
  let service: ListacontatoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListacontatoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
