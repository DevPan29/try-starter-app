import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BeerComponent } from './components/beer/beer.component';
import { BeerListComponent } from './components/beer-list/beer-list.component';
import { BeerFormComponent } from './components/beer-form/beer-form.component';

@NgModule({
  declarations: [
    AppComponent,
    BeerComponent,
    BeerListComponent,
    BeerFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
