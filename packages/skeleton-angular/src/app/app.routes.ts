import { Routes } from '@angular/router';
import { SwitchComponent } from './pages/switch/switch.component';
import { ProgressComponent } from './pages/progress/progress.component';
import { AppBarComponent } from './pages/app-bar/app-bar.component';

export const routes: Routes = [
  {
    path: 'components',
    children: [
      {
        path: 'switch',
        component: SwitchComponent
      },
      {
        path: 'progress',
        component: ProgressComponent
      },
      {
        path: 'app-bar',
        component: AppBarComponent
      },
    ],
  },
];
