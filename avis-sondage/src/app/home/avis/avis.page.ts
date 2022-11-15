import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
//import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-avis',
  templateUrl: './avis.page.html',
  styleUrls: ['./avis.page.scss'],
})
export class AvisPage implements OnInit {
  rating = 0;
  starCount = 5;
  ratingArr: boolean[] = [];
  snackBarDuration = 10000;
  star = false;

  /*
  response = [
    'You broke my heart',
    'Realy?',
    'We will do better next time',
    'Glad you like it!',
    'Thank you so much',
  ]; */
  /*  private snackBar: MatSnackBar */
  constructor() {
    //This default to no rating, i.e all empty stars
    this.ratingArr = Array(this.starCount).fill(false);
  }

  currentRate: number = 3;
  ngOnInit() {}

  returnStar(i: number) {
    if (this.rating >= i + 1) {
      console.log('i', i);
      this.star = true;
      return true;
    } else {
      this.star = false;
      return false;
    }
  }
  onClick(i: number) {
    this.rating = i + 1;
    /*  this.snackBar.open(this.response[i], '', {
      duration: this.snackBarDuration,
      panelClass: ['snack-bar'],
    }); */
    console.log('rating', this.rating);
  }
  onSubmit(form: NgForm) {
    if (!form.valid) {
      return;
    }
    const call = 1;
    console.log(form, form.value.call, form.value.observation, form.value.idea);
  }

  logRatingChange(rating) {
    console.log('changed rating: ', rating);
    // do your stuff
  }
}
