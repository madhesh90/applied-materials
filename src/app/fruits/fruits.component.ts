import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fruits',
  templateUrl: './fruits.component.html',
  styleUrls: ['./fruits.component.css']
})
export class FruitsComponent implements OnInit {
  red_counter = 1;
  yellow_counter = 1;
  blue_counter = 1;
  constructor() { }

  ngOnInit() {
  }
  decrement(elen, color) {
    if (elen < 10) {
      this.setColor(color, --elen);
    }
  }
  increment(elen, color ) {
    if (elen < 10) {
      this.setColor(color, ++elen);
    }
  }
  setColor(color_, value) {
    if (value < 0 ) {
      value = 0 ;
    }
    switch ( color_) {
      case 'red': {
         this.red_counter = value;
         this.fillCointainer('red', this.red_counter);
         break;
      }
      case 'yellow': {
        this.yellow_counter = value;
        this.fillCointainer('red', this.red_counter);
         break;
      }
      case 'blue': {
        this.blue_counter = value;
         break;
      }
    }
   }
   fillCointainer(color_, value) {

   }
}
