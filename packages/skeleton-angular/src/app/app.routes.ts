import { Routes } from '@angular/router';
import { AppBarComponent } from './pages/app-bar/app-bar.component';
import { AvatarComponent } from './pages/avatar/avatar.component';
import { ProgressRingComponent } from './pages/progress-ring/progress-ring.component';
import { ProgressComponent } from './pages/progress/progress.component';
import { SwitchComponent } from './pages/switch/switch.component';
import { NavigationComponent } from './pages/navigation/navigation.component';

export const routes: Routes = [
  {
    path: 'components',
    children: [
      {
        path: 'switch',
        component: SwitchComponent,
      },
      {
        path: 'progress',
        component: ProgressComponent,
      },
      {
        path: 'app-bar',
        component: AppBarComponent,
      },
      {
        path: 'avatar',
        component: AvatarComponent,
      },
      {
        path: 'progress-ring',
        component: ProgressRingComponent,
      },
      {
        path: 'navigation',
        component: NavigationComponent
      },
    ],
  },
];
