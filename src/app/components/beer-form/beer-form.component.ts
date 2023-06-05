import { ActivatedRoute, Router } from '@angular/router';
import { Beer, allBeerTypes } from '../../models/beer.model';
import { Component, OnInit } from '@angular/core';

import { BeerService } from '../../beer.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-beer-form',
  templateUrl: './beer-form.component.html',
  styleUrls: ['./beer-form.component.css']
})
export class BeerFormComponent implements OnInit {

  formData: any = {
    beerName: '',
    upc: '',
    price: '',
    beerStyle: ''
  }

  isEdit: boolean = false;
  beerStyles = allBeerTypes;
  beerToEdit?: Beer;

  constructor(private beerService: BeerService, private router: Router, private activatedRoute: ActivatedRoute ) { }

  ngOnInit(): void {

    this.isEdit = this.activatedRoute.snapshot.url[0].path == 'edit';
    if (this.isEdit) {
      const beerId = +this.activatedRoute.snapshot.params.id;
      console.log(`beerId to edit ${beerId}`);
      this.beerToEdit = this.beerService.getBeerById(beerId);
      if (this.beerToEdit) {
        this.setEditMode(this.beerToEdit);
      } else {
        this.router.navigate(['/list'])
      }
    }

  }

  setEditMode(beer: Beer) {
    this.formData = {
      beerName: beer.beerName,
      upc: beer.upc,
      price: beer.price,
      beerStyle: beer.beerStyle
    }
  }

  submitForm(form: NgForm) {

    Object.keys(form.controls).forEach((controlKey) => form.controls[controlKey].markAsTouched());
    if (form.valid) {
      console.log(`Form values: ${JSON.stringify(form.value)}`)

      const beerFromForm = form.value;
      const beerToAdd: Beer = {
        beerName: beerFromForm.beerName,
        beerStyle: beerFromForm.beerStyle,
        upc: beerFromForm.upc,
        price: beerFromForm.price,
        id: this.isEdit ? this.beerToEdit!.id : this.beerService.generateId(),
        createdDate: this.isEdit ? this.beerToEdit!.createdDate : new Date(),
        lastModifiedDate: new Date()
      }

      console.log(beerToAdd);

      if (this.isEdit) {
        this.beerService.updateBeer(beerToAdd)
      } else {
        this.beerService.addBeer(beerToAdd)
      }
      this.router.navigate(['/list'])


    } else {
      window.alert(`Form has error.`)
    }
  }

}
