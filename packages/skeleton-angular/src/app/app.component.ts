import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Switch } from 'lib';
import { LucideAngularModule } from 'lucide-angular';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Switch, RouterLink, LucideAngularModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  lightMode = false;

  onModeChange(newValue: boolean) {
    console.log('onModeChange', newValue);
    this.lightMode = newValue;
    if (this.lightMode) {
      document.documentElement.classList.remove('dark');
    } else {
      document.documentElement.classList.add('dark');
    }
  }
}
