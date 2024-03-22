import { Component, inject } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { debounceTime, distinctUntilChanged, filter, map, startWith, switchMap, tap } from 'rxjs';

import { VendorService } from '../../services/vendor.service';
import { Vendor } from '../../models/vendor.model';
import { CONFIG } from '../../models/config.model';

import { VendorCardComponent } from '../vendor-card/vendor-card.component';
import { VendorStateService } from 'src/app/services/vendor-state.service';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  imports: [ReactiveFormsModule, VendorCardComponent, CommonModule],
  template: `
    <h1>Vendors</h1>
    <div>
      <label for="query">Search vendors</label>
      <input
        class="form-control"
        type="text"
        name="query"
        [formControl]="vendorStateService.searchControl"
      />
    </div>
    <p>Search query: {{ vendorStateService.searchControl.value }}</p>

    <section>
      @if(vendorStateService.searchControl.value.length < config.minimumQueryLength) {
        <p>Enter more than {{ config.minimumQueryLength }} characters</p>
      } @else if(loading) {
        <p>Loading...</p>
      } @else {
        @for(result of vendorResults$ | async; track result.id) {
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
  vendorStateService = inject(VendorStateService);

  vendorResults$ = this.vendorStateService.queryState$.pipe(
    map(state => state.vendors)
  )

  loading = false;

  constructor() {
    const vendorService = inject(VendorService);

    this.vendorStateService.searchControl.valueChanges.pipe(
      startWith(this.vendorStateService.searchControl.value),
      filter(search => search.length >= this.config.minimumQueryLength),
      debounceTime(this.config.defaultDebounceTime),
      distinctUntilChanged(),
      tap(() => this.loading = true),
      switchMap(search => vendorService.searchVendors(search).pipe(
        map(results => ({
          results: results,
          query: search
        }))
      )),
      tap(results => this.vendorStateService.queryState$.next({
        query: results.query,
        vendors: results.results
      })),
      tap(results => {
        this.loading = false;
      }),
      takeUntilDestroyed()
    ).subscribe();
  }
}