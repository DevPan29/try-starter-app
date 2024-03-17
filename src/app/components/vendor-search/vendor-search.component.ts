import { Component, inject } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { debounceTime, distinctUntilChanged, filter, switchMap, tap } from 'rxjs';

import { VendorService } from '../../services/vendor.service';
import { Vendor } from '../../models/vendor.model';
import { CONFIG } from '../../models/config.model';

import { VendorCardComponent } from '../vendor-card/vendor-card.component';

@Component({
  standalone: true,
  imports: [ReactiveFormsModule, VendorCardComponent],
  template: `
    <h1>Vendors</h1>
    <div>
      <label for="query">Search vendors</label>
      <input
        class="form-control"
        type="text"
        name="query"
        [formControl]="searchControl"
      />
    </div>
    <p>Search query: {{ searchControl.value }}</p>

    <section>
      @if(searchControl.value.length < config.minimumQueryLength) {
        <p>Enter more than {{ config.minimumQueryLength }} characters</p>
      } @else if(loading) {
        <p>Loading...</p>
      } @else {
        @for(result of searchResults; track result.id) {
          <vendor-card [vendor]="result" />
        } @empty {
          <p>No results found, please try another query</p>
        }
      }
    </section>
  `
})
export class VendorSearchComponent {
  config = inject(CONFIG);

  searchControl = new FormControl<string>('', { nonNullable: true });
  searchResults: Vendor[] = [];
  loading = false;

  constructor() {
    const vendorService = inject(VendorService);

    this.searchControl.valueChanges.pipe(
      filter(search => search.length >= this.config.minimumQueryLength),
      debounceTime(this.config.defaultDebounceTime),
      distinctUntilChanged(),
      tap(() => this.loading = true),
      switchMap(search => vendorService.searchVendors(search)),
      tap(results => {
        this.loading = false;
        this.searchResults = results;
      }),
      takeUntilDestroyed()
    ).subscribe();
  }
}