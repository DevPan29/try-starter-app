import { Injectable } from '@angular/core';
import { Observable, map, of, timer } from 'rxjs';
import { v4 as uuidv4 } from 'uuid';

import { Vendor } from '../models/vendor.model';

@Injectable({ providedIn: 'root' })
export class VendorService {
  searchVendors(query: string): Observable<Vendor[]> {
    return timer(1000).pipe(map(() => this.vendorsList.filter(x => x.name.toLowerCase().includes(query.toLowerCase()))))
  }

  private vendorsList: Vendor[] = [
    { id: uuidv4(), name: 'John Lee Doe', type: 'MANUFACTURER' },
    { id: uuidv4(), name: 'Jane Doe', type: 'RETAILER' },
    { id: uuidv4(), name: 'Johnny Silverhand', type: 'MANUFACTURER' },
    { id: uuidv4(), name: 'Jamie Silverhand', type: 'RETAILER' },
    { id: uuidv4(), name: 'Roxie Ken Silverhand', type: 'TRADESHOWREPRESENTATIVE' },
    { id: uuidv4(), name: 'Adam Smasher', type: 'WHOLESALER' },
    { id: uuidv4(), name: 'Donald Smasher', type: 'TRADESHOWREPRESENTATIVE' },
    { id: uuidv4(), name: 'Fella Smasher', type: 'RETAILER' },
    { id: uuidv4(), name: 'Ken Masters', type: 'WHOLESALER' },
    { id: uuidv4(), name: 'Jenna Lee Masters', type: 'MANUFACTURER' },
    { id: uuidv4(), name: 'Ron Masters', type: 'RETAILER' },
    { id: uuidv4(), name: 'Lee Chaolan', type: 'RETAILER' },
    { id: uuidv4(), name: 'Rick Chaolan', type: 'WHOLESALER' }
  ]
}