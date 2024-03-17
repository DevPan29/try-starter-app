import { Component, inject } from '@angular/core';
import { Store } from '@ngrx/store';

import { selectChosenVendor } from './state/vendor-interaction/vendor-interaction.selectors';
import { toSignal } from '@angular/core/rxjs-interop';
import { clearVendor } from './state/vendor-interaction/vendor-interaction.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  store = inject(Store);
  chosenVendor = toSignal(this.store.select(selectChosenVendor));

  deselectVendor() {
    this.store.dispatch(clearVendor());
  }
}
