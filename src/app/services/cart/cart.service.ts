import { Injectable } from '@angular/core';
import { CatalogItem, CartItem } from '../../models/CatalogItem';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  items: CartItem[] = [];
  public totalQuantity = 0;
  public subtotal = 0.0;
  public total = 0.0;
  public GST = 0.05;

  constructor() {
    const storedItems = sessionStorage.getItem('cart');
    if (storedItems && storedItems.length) {
      this.items = JSON.parse(storedItems);
      this.calculateTotalQuantity();
      this.calculateTotals();
    }
  }

  calculateTotalQuantity(): void {
    this.totalQuantity = this.items.reduce((sum, item) => sum + item.quantity, 0);
  }

  calculateTotals(): void {
    this.subtotal = this.items.reduceRight((sum, item) => sum + (parseFloat(item.price) * item.quantity), 0);
    this.total = parseFloat((this.subtotal * (1.0 + this.GST)).toFixed(2));
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

    this.totalQuantity++;
    this.calculateTotals();
  }

  private storeItemsInSession(): void {
    sessionStorage.setItem('cart', JSON.stringify(this.items));
  }
}
