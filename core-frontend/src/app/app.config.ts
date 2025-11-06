import { ApplicationConfig, importProvidersFrom, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { FeatherModule, } from 'angular-feather';
import { Camera, Heart, Github, ShoppingCart, User} from 'angular-feather/icons';
const allIcons = { Camera, Heart, Github, ShoppingCart, User };


export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    importProvidersFrom(FeatherModule.pick(allIcons))
  ]
};
