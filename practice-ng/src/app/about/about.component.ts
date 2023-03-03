import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})

export class AboutComponent {
  favoriteColor: FormControl = new FormControl('Please type your favorite color')

  logColor() {
    console.log(this.favoriteColor)
  }
}
