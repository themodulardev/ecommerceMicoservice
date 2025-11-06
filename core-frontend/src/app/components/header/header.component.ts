import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from "@angular/router";
import { FeatherModule } from 'angular-feather';

@Component({
  selector: 'app-header',
  imports: [RouterLink, FeatherModule, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  cartItemCount: number = 0;

  isDropdownOpen = false;
  cartItems = [
    { name: 'Product 1', price: 120 },
    { name: 'Product 2', price: 90 }
  ];

  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  // Optional: close dropdown on outside click
  constructor() {
    // document.addEventListener('click', (event) => {
    //   const target = event.target as HTMLElement;
    //   if (!target.closest('.cart-container')) {
    //     this.isDropdownOpen = false;
    //   }
    // });
  }

}
