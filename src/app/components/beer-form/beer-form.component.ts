import { Beer, allBeerTypes } from '../../models/beer.model';
import { Component, OnInit } from '@angular/core';

import { BeerService } from '../../beer.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-beer-form',
  templateUrl: './beer-form.component.html',
  styleUrls: ['./beer-form.component.css']
})
export class BeerFormComponent implements OnInit {

  beerStyles = allBeerTypes;

  constructor(private beerService: BeerService, private router: Router ) { }

  ngOnInit(): void {
  }

  submitForm(form: NgForm) {

    Object.keys(form.controls).forEach((controlKey) => form.controls[controlKey].markAsTouched());
    if (form.valid) {
      console.log(`Form values: ${JSON.stringify(form.value)}`)

      const beerFromForm = form.value;
      const beerToAdd: Beer = {
        id: this.beerService.generateId(),
        beerName: beerFromForm.beerName,
        beerStyle: beerFromForm.beerStyle,
        upc: beerFromForm.upc,
        price: beerFromForm.price,
        createdDate: new Date(),
        lastModifiedDate: new Date()
      }

      console.log(beerToAdd);

      this.beerService.addBeer(beerToAdd)
      this.router.navigate(['/list'])


    } else {
      window.alert(`Form has error.`)
    }
  }

}
