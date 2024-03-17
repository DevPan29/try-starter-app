import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BeerComponent } from './components/beer/beer.component';
import { BeerFormComponent } from './components/beer-form/beer-form.component';
import { BeerListComponent } from './components/beer-list/beer-list.component';
import { VendorSearchComponent } from './components/vendor-search/vendor-search.component';
import { CONFIG } from './models/config.model';
import { READABLE_VENDOR_TYPES_MAP, VendorType } from './models/vendor.model';

@NgModule({
  declarations: [
    AppComponent,
    BeerComponent,
    BeerListComponent,
    BeerFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    VendorSearchComponent
  ],
  providers: [
    {
      provide: CONFIG,
      useValue: {
        defaultDebounceTime: 500,
        minimumQueryLength: 3
      }
    },
    {
      provide: READABLE_VENDOR_TYPES_MAP,
      useValue: {
        MANUFACTURER: 'Manufacturer',
        RETAILER: 'Retailer',
        TRADESHOWREPRESENTATIVE: 'Trade show representative',
        WHOLESALER: 'Wholesaler'
      } as Record<VendorType, string>
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
