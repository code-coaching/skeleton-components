import { Component, Input, SimpleChanges } from '@angular/core';
import { ProgressProps } from './types';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'skeleton-progress',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './progress.component.html',
  styleUrl: './progress.component.css',
})
export class Progress {
  @Input() value: ProgressProps['value'] = undefined;
  @Input() max: ProgressProps['max'] = 100;
  @Input() labelledBy: ProgressProps['labelledBy'] = '';
  // Root
  @Input() base: ProgressProps['base'] = 'overflow-x-hidden';
  @Input() bg: ProgressProps['bg'] = 'bg-surface-200-800';
  @Input() width: ProgressProps['width'] = 'w-full';
  @Input() height: ProgressProps['height'] = 'h-2';
  @Input() rounded: ProgressProps['rounded'] = 'rounded';
  @Input() classes: ProgressProps['classes'] = '';
  // Meter
  @Input() meterBase: ProgressProps['meterBase'] = 'h-full';
  @Input() meterBg: ProgressProps['meterBg'] = 'bg-surface-950-50';
  @Input() meterRounded: ProgressProps['meterRounded'] = 'rounded';
  @Input() meterTransition: ProgressProps['meterTransition'] =
    'transition-[width]';
  @Input() meterAnimate: ProgressProps['meterAnimate'] =
    'animate-indeterminate';
  @Input() meterClasses: ProgressProps['meterClasses'] = '';
  
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['max'] && changes['max'].currentValue < 0) {
      console.warn('The max prop should be greater than or equal to 0');
    }
  }

  get indeterminate() {
    return this.value === undefined
  }

  get fillPercentage() {
    return `${this.indeterminate ? 50 : ((this.value! - 0) / (this.max! - 0)) * 100}%`;
  }

  get rxIndeterminate() {
    return this.indeterminate ? this.meterAnimate : '';
  }

}
