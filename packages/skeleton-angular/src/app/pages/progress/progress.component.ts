import { Component } from '@angular/core';
import { Progress } from 'lib';

@Component({
  selector: 'app-progress',
  standalone: true,
  imports: [Progress],
  templateUrl: './progress.component.html',
  styleUrl: './progress.component.css',
})
export class ProgressComponent {
  value = 60;
  max = 100;
}
