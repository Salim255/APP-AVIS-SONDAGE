import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-avis',
  templateUrl: './avis.page.html',
  styleUrls: ['./avis.page.scss'],
})
export class AvisPage implements OnInit {
  constructor() {}

  ngOnInit() {}

  onSubmit(form: NgForm) {
    console.log(form);
  }
}
