import { Component, OnInit } from '@angular/core';

import { Beer } from 'src/app/models/beer.model';
import { BeerService } from 'src/app/beer.service';

@Component({
  selector: 'app-beer-list',
  templateUrl: './beer-list.component.html',
  styleUrls: ['./beer-list.component.css']
})
export class BeerListComponent implements OnInit {

  // beerService: BeerService;

  constructor(public beerService: BeerService) {
    // this.beerService = new BeerService();
  }

  ngOnInit(): void {
  }

  onNotificationReceived(beer: Beer) {
    window.alert(`Notification IN SALE alert, for beer ${beer.beerName}, Activated`)
  }

}
