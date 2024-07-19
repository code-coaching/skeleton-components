import {
  ApplicationConfig,
  importProvidersFrom,
  provideZoneChangeDetection,
} from '@angular/core';
import { provideRouter } from '@angular/router';

import {
  Check,
  Frown,
  Home,
  LucideAngularModule,
  Moon,
  Skull,
  Smile,
  Sun,
  X,
} from 'lucide-angular';
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    importProvidersFrom(
      LucideAngularModule.pick({
        Home,
        Check,
        Frown,
        Moon,
        Smile,
        Sun,
        X,
        Skull,
      }),
    ),
  ],
};
