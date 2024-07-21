import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ProgressRing } from 'lib';
import { LucideAngularModule } from 'lucide-angular';

@Component({
  selector: 'app-progress-ring',
  standalone: true,
  imports: [LucideAngularModule, FormsModule, ProgressRing],
  templateUrl: './progress-ring.component.html',
  styleUrl: './progress-ring.component.css',
})
export class ProgressRingComponent {
  value = 60;
  max = 100;
}
