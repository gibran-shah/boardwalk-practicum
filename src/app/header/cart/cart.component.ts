import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart/cart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  itemQuantity = 0;
  total = 0;

  constructor(private cartService: CartService,
              private router: Router) { }

  ngOnInit() {
  }

  viewItems(): void {
    console.log('view items');
    this.router.navigate(['/cart-details']);
  }

  checkout(): void {
    console.log('checkout');
  }
}
