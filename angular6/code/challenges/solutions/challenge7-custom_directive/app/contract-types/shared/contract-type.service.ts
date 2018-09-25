import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CONTRACT_TYPES } from './mock-contract-types';
import { ContractType } from '../shared/contract-type.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { of } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};

@Injectable()
export class ContractTypeService {
  private contractTypesUrl = 'http://localhost:3000/contractTypes/';

  constructor(private http: HttpClient) {}

  list(): Observable<ContractType[]> {
    return this.http.get<ContractType[]>(this.contractTypesUrl);
  }

  // list(): Observable<ContractType[]> {
  //   return of(CONTRACT_TYPES);
  // }

  put(contractType: ContractType) {
    const url = this.contractTypesUrl + contractType.id;
    return this.http.put<ContractType>(url, contractType, httpOptions);
  }
}
