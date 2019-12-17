import { Injectable } from '@angular/core';
import { CatalogItem, CartItem } from '../../models/CatalogItem';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  items: CartItem[] = [];

  constructor() {
    const storedItems = sessionStorage.getItem('cart');
    if (storedItems && storedItems.length) {
      this.items = JSON.parse(storedItems);
    }
  }

  addItem(catalogItem: CatalogItem): void {
    const cartItem = this.items.find(item => item.id === catalogItem.id);
    if (cartItem) {
      cartItem.quantity++;
    } else {
      this.items.push({
        ...catalogItem,
        quantity: 1
      });
    }

    this.storeItemsInSession();
  }

  private storeItemsInSession(): void {
    sessionStorage.setItem('cart', JSON.stringify(this.items));
  }
}
