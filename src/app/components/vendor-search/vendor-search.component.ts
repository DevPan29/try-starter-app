import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  standalone: true,
  imports: [ReactiveFormsModule],
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
  `
})
export class VendorSearchComponent {
  searchControl = new FormControl<string>('');
}