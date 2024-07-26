import {
  ApplicationConfig,
  importProvidersFrom,
  provideZoneChangeDetection,
} from '@angular/core';
import { provideRouter } from '@angular/router';

import {
  Box,
  Check,
  Frown,
  Home,
  LucideAngularModule,
  Moon,
  Settings,
  Skull,
  Smile,
  Sun,
  ThermometerSun,
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
        ThermometerSun,
        Box,
        Settings,
      }),
    ),
  ],
};
