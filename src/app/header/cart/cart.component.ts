import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  itemQuantity = 0;
  total = 0;

  constructor() { }

  ngOnInit() {
  }

}
