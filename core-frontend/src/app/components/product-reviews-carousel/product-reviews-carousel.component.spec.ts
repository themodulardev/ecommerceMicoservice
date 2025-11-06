import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductReviewsCarouselComponent } from './product-reviews-carousel.component';

describe('ProductReviewsCarouselComponent', () => {
  let component: ProductReviewsCarouselComponent;
  let fixture: ComponentFixture<ProductReviewsCarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductReviewsCarouselComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductReviewsCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
