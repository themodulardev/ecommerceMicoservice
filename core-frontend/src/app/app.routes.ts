import { Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';

export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent
  }, {
    path: 'checkout',
    loadComponent: () => import('./components/checkout-page/checkout-page.component').then(m => m.CheckoutPageComponent)
  }
];
