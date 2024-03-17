import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BeerComponent } from './components/beer/beer.component';
import { BeerFormComponent } from './components/beer-form/beer-form.component';
import { BeerListComponent } from './components/beer-list/beer-list.component';
import { VendorSearchComponent } from './components/vendor-search/vendor-search.component';

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
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
