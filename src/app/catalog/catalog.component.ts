import { Component, OnInit } from '@angular/core';
import { CatalogService } from '../services/catalog/catalog.service';
import { CartService } from '../services/cart/cart.service';
import { CatalogItem } from '../models/CatalogItem';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss']
})
export class CatalogComponent implements OnInit {

  displayedColumns = ['name', 'image', 'description', 'price', 'add to cart'];

  catalog: CatalogItem[] = [];
  //   {
  //     name: 'aaa',
  //     description: 'aaa description',
  //     imageUrl: '',
  //     price: '$99.99'
  //   },
  //   {
  //     name: 'bbb',
  //     description: 'bbb description',
  //     imageUrl: '',
  //     price: '$109.99'
  //   },
  //   {
  //     name: 'ccc',
  //     description: 'ccc description',
  //     imageUrl: '',
  //     price: '$89.99'
  //   },
  //   {
  //     name: 'ddd',
  //     description: 'ddd description',
  //     imageUrl: '',
  //     price: '$100.00'
  //   }
  // ];

  // dataSource: MatTableDataSource<CatalogItem>;
  // imageUrl = "https://firebasestorage.googleapis.com/v0/b/boardwalk-practicum.appspot.com/o/StarTech%20Power%20Cord.jpg?alt=media&token=4c320bf7-5970-41ee-9cd8-4b0f86af6f55"

  constructor(private catalogService: CatalogService,
              private cartService: CartService) { }

  ngOnInit() {
    this.loadCatalog();
  }

  async loadCatalog() {
    try {
      this.catalog = await this.catalogService.getCatalog();
      console.log(this.catalog); // TODO: remove
    } catch (err) {
      console.log(err);
    }
  }

  addToCart($event: any): void {
    const itemId = $event.target.value;
    const catalogItem = this.catalog.find(item => item.id === itemId);
    if (catalogItem) {
      this.cartService.addItem(catalogItem);
    } else {
      console.log('Could not find catalog item ', itemId);
    }
  }
}
