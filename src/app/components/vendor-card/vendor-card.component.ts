import { Component, Signal, computed, inject, input } from '@angular/core';
import { Store } from '@ngrx/store';

import { READABLE_VENDOR_TYPES_MAP, Vendor } from '../../models/vendor.model';
import { chooseVendor } from '../../state/vendor-interaction/vendor-interaction.actions';

interface VendorPrettified extends Vendor {
  readableType: string;
}

@Component({
  standalone: true,
  selector: 'vendor-card',
  template: `
    <article>
      <h2>{{ vendorPrettified().name }}</h2>
      <p>Vendor ID: {{ vendorPrettified().id }}</p>
      <p>Vendor type: {{ vendorPrettified().readableType }}</p>
      <button (click)="selectVendor()">Select vendor</button>
    </article>
  `
})
export class VendorCardComponent {
  store = inject(Store);

  prettifiedVendorNames = inject(READABLE_VENDOR_TYPES_MAP);
  vendor = input.required<Vendor>();
  vendorPrettified: Signal<VendorPrettified> = computed(() => ({
    id: this.vendor().id,
    name: this.vendor().name,
    type: this.vendor().type,
    readableType: this.prettifiedVendorNames[this.vendor().type]
  }));

  selectVendor() {
    this.store.dispatch(chooseVendor({ chosenVendor: this.vendor() }));
  }
}