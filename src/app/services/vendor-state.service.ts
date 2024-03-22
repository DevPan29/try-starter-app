import { Injectable } from "@angular/core";
import { FormControl } from "@angular/forms";
import { BehaviorSubject } from "rxjs";
import { Vendor } from "../models/vendor.model";

@Injectable({ providedIn: 'root' })
export class VendorStateService {
  queryState$ = new BehaviorSubject<{
    query: string,
    vendors: Vendor[]
  }>({
    query: '',
    vendors: []
  })

  searchControl = new FormControl<string>('', { nonNullable: true });
}