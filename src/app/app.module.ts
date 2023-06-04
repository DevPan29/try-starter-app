import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BeerComponent } from './components/beer/beer.component';
import { BeerListComponent } from './components/beer-list/beer-list.component';

@NgModule({
  declarations: [
    AppComponent,
    BeerComponent,
    BeerListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
