import { Component, OnInit } from '@angular/core';

import { Beer } from '../../models/beer.model';
import { BeerService } from '../../services/beer.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-beer-list',
  templateUrl: './beer-list.component.html',
  styleUrls: ['./beer-list.component.css']
})
export class BeerListComponent implements OnInit {

  // beerService: BeerService;

  constructor(public beerService: BeerService, private router: Router) {
    // this.beerService = new BeerService();
  }

  ngOnInit(): void {
  }

  onNotificationReceived(beer: Beer) {
    window.alert(`Notification IN SALE alert, for beer ${beer.beerName}, Activated`)
  }

  onDeleteBeer(beer: Beer) {
    // console.log(`beer to delete ${JSON.stringify(beer)}`)
    this.beerService.deleteBeer(beer)
  }

  onEditBeer(beer: Beer) {
    console.log(`Beer to edit ${JSON.stringify(beer)}`)
    this.router.navigate(['/edit', beer.id.toString()])
  }

}
