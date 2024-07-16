import { Routes } from '@angular/router';
import { SwitchComponent } from './pages/switch/switch.component';

export const routes: Routes = [
  {
    path: 'components',
    children: [
      {
        path: 'switch',
        component: SwitchComponent
      },
    ],
  },
];
