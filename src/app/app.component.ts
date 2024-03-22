import { Component } from '@angular/core';
import { VendorStateService } from './services/vendor-state.service';
import { map } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  queryValue$ = this.vendorStateService.queryState$.pipe(
    map(x => x.query)
  )

  constructor(
    private vendorStateService: VendorStateService
  ) {}
}
