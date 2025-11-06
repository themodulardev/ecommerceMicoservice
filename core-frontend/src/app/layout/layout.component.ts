import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { HeaderComponent } from '../components/header/header.component';
import { BannerComponent } from '../components/banner/banner.component';
import { BrandCarouselComponent } from '../components/brand-carousel/brand-carousel.component';
import { ProductGridComponent } from '../components/product-grid/product-grid.component';
import { FooterComponent } from '../components/footer/footer.component';

@Component({
  selector: 'app-layout',
  imports: [
    CommonModule,
    HeaderComponent,
    BannerComponent,
    BrandCarouselComponent,
    ProductGridComponent,
    FooterComponent
  ],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent {

}
