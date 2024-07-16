import { Component } from '@angular/core';
import { Switch } from 'lib';
import { LucideAngularModule } from 'lucide-angular';

@Component({
  selector: 'app-switch',
  standalone: true,
  imports: [LucideAngularModule, Switch],
  templateUrl: './switch.component.html',
  styleUrl: './switch.component.css',
})
export class SwitchComponent {
  disturb = false;
  notifications = true;
  disabled = false;
  icons = true;
  lightswitch = false;
  compact = false;
  JSON = JSON;
}
