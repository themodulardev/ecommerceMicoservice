import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from "@angular/router";

interface CartItem {
  name: string;
  price: number;
  quantity: number;
  image: string;
}

@Component({
  selector: 'app-checkout-page',
  imports: [FormsModule, ReactiveFormsModule, RouterLink],
  templateUrl: './checkout-page.component.html',
  styleUrl: './checkout-page.component.css'
})
export class CheckoutPageComponent {
checkoutForm!: FormGroup;
  cart: CartItem[] = [];
  subtotal = 0;
  shipping = 100;
  discount = 0;
  total = 0;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.initForm();
    this.loadCart();
    this.calculateTotal();
  }

  initForm() {
    this.checkoutForm = this.fb.group({
      fullName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
      zip: ['', Validators.required],
      address: ['', Validators.required],
      paymentMethod: ['card', Validators.required],
      cardNumber: [''],
      expiry: [''],
      cvv: ['']
    });
  }

  loadCart() {
    // Example cart data — replace with cart service data
    this.cart = [
      { name: 'Nike Air Max', price: 3200, quantity: 1, image: 'assets/shoe.jpg' },
      { name: 'Adidas Hoodie', price: 1500, quantity: 2, image: 'assets/hoodie.jpg' }
    ];
  }

  calculateTotal() {
    this.subtotal = this.cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
    this.total = this.subtotal - this.discount + this.shipping;
  }

  placeOrder() {
    if (this.checkoutForm.invalid) {
      this.checkoutForm.markAllAsTouched();
      return;
    }

    console.log('Order Placed ✅', {
      user: this.checkoutForm.value,
      cart: this.cart,
      total: this.total
    });

    alert('Your order has been placed successfully!');
  }

  removeItem(index: number) {
    this.cart.splice(index, 1);
    this.calculateTotal();
  }
}
