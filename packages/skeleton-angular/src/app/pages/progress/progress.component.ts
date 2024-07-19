import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Progress } from 'lib';

@Component({
  selector: 'app-progress',
  standalone: true,
  imports: [FormsModule, Progress],
  templateUrl: './progress.component.html',
  styleUrl: './progress.component.css',
})
export class ProgressComponent {
  value = 60;
  max = 100;
}
