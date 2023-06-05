import { Component, OnInit } from '@angular/core';

import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-beer-form',
  templateUrl: './beer-form.component.html',
  styleUrls: ['./beer-form.component.css']
})
export class BeerFormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  submitForm(form: NgForm) {

    Object.keys(form.controls).forEach((controlKey) => form.controls[controlKey].markAsTouched());
    if (form.valid) {
      console.log(`Form values: ${JSON.stringify(form.value)}`)
    } else {
      window.alert(`Form has error.`)
    }
  }

}
