import { Component } from '@angular/core';

@Component({
  selector: 'app-brand-carousel',
  imports: [],
  templateUrl: './brand-carousel.component.html',
  styleUrl: './brand-carousel.component.css'
})
export class BrandCarouselComponent {
  brands = [
    { name: 'Brand 1', logoUrl: 'assets/images/brand1.png' },
    { name: 'Brand 2', logoUrl: 'assets/images/brand2.png' },
    { name: 'Brand 3', logoUrl: 'assets/images/brand3.png' },
    { name: 'Brand 4', logoUrl: 'assets/images/brand4.png' },
  ];
}
