import { Component } from '@angular/core';
import { AppBar } from 'lib';
import { LucideAngularModule } from 'lucide-angular';

@Component({
  selector: 'app-app-bar',
  standalone: true,
  imports: [LucideAngularModule, AppBar],
  templateUrl: './app-bar.component.html',
  styleUrl: './app-bar.component.css',
})
export class AppBarComponent {
  Array = Array;
}
