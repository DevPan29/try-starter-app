import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BeerFormComponent } from './components/beer-form/beer-form.component';
import { BeerListComponent } from './components/beer-list/beer-list.component';
import { VendorSearchComponent } from './components/vendor-search/vendor-search.component';
import { VendorRecapComponent } from './components/vendor-recap/vendor-recap.component';

const routes: Routes = [
  { path: '', redirectTo:'list', pathMatch: 'full'},
  { path: 'list', component: BeerListComponent},
  { path: 'add', component: BeerFormComponent},
  { path: 'edit/:id', component: BeerFormComponent},
  { path: 'vendors', component: VendorSearchComponent },
  { path: 'vendor-recap', component: VendorRecapComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
