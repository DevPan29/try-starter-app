import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { map } from "rxjs";
import { VendorStateService } from "src/app/services/vendor-state.service";

@Component({
  standalone: true,
  imports: [CommonModule],
  template: `
    <h2>Query: {{ vendorQuery$ | async }}</h2>
    <p *ngFor="let name of vendorNames$ | async">{{ name }}</p>
  `
})
export class VendorRecapComponent {
  vendorQuery$ = this.vendorState.queryState$.pipe(
    map(x => x.query)
  )

  vendorNames$ = this.vendorState.queryState$.pipe(
    map(x => x.vendors.map(vendor => vendor.name))
  )

  constructor(public vendorState: VendorStateService){
  }
}