import { Component, Input } from '@angular/core';
import { FeatherModule } from 'angular-feather';

@Component({
  selector: 'app-product-grid',
  imports: [
    FeatherModule
  ],
  templateUrl: './product-grid.component.html',
  styleUrl: './product-grid.component.css'
})
export class ProductGridComponent {
@Input() product_grid_title: string = 'Featured Products';
@Input() products = [
    { id: 1, name: 'T-shirt with logo', price: 29.99, imageUrl: 'assets/product1.jpg', description: 'Description for Product 1' },
    { id: 2, name: 'Hoodie with logo', price: 39.99, imageUrl: 'assets/product2.jpg', description: 'Description for Product 2' },
    { id: 3, name: 'Cap with logo', price: 19.99, imageUrl: 'assets/product3.jpg', description: 'Description for Product 3' },
    { id: 4, name: 'Mug with logo', price: 49.99, imageUrl: 'assets/product4.jpg', description: 'Description for Product 4' },
     { id: 1, name: 'T-shirt with logo', price: 29.99, imageUrl: 'assets/product1.jpg', description: 'Description for Product 1' },
    { id: 2, name: 'Hoodie with logo', price: 39.99, imageUrl: 'assets/product2.jpg', description: 'Description for Product 2' },
    { id: 3, name: 'Cap with logo', price: 19.99, imageUrl: 'assets/product3.jpg', description: 'Description for Product 3' },
    { id: 4, name: 'Mug with logo', price: 49.99, imageUrl: 'assets/product4.jpg', description: 'Description for Product 4' }

  ];
}
