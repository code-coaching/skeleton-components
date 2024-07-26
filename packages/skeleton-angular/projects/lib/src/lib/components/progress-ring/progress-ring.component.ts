import { CommonModule, NgTemplateOutlet } from '@angular/common';
import {
  Component,
  ContentChild,
  Input,
  SimpleChanges,
  TemplateRef,
} from '@angular/core';
import { ProgressRingProps } from './types';

@Component({
  selector: 'skeleton-progress-ring',
  standalone: true,
  imports: [NgTemplateOutlet, CommonModule],
  templateUrl: './progress-ring.component.html',
  styleUrl: './progress-ring.component.css',
})
export class ProgressRing {
  @Input() value: ProgressRingProps['value'] = undefined;
  @Input() max: ProgressRingProps['max'] = 100;
  @Input() strokeWidth: ProgressRingProps['strokeWidth'] = 50; // px
  @Input() strokeLinecap: ProgressRingProps['strokeLinecap'] = 'round';
  @Input() labelledBy: ProgressRingProps['labelledBy'] = '';
  // Base (figure)
  @Input() base: ProgressRingProps['base'] = 'relative';
  @Input() size: ProgressRingProps['size'] = 'size-32';
  @Input() classes: ProgressRingProps['classes'] = '';
  // Slot
  @Input() childrenBase: ProgressRingProps['childrenBase'] =
    'absolute top-0 left-0 z-[1] flex justify-center items-center';
  @Input() childrenClasses: ProgressRingProps['childrenClasses'] = '';
  // SVG
  @Input() svgBase: ProgressRingProps['svgBase'] =
    'absolute top-0 left-0 w-full h-full rounded-full';
  @Input() svgClasses: ProgressRingProps['svgClasses'] = '';
  // Track
  @Input() trackBase: ProgressRingProps['trackBase'] = 'fill-none';
  @Input() trackStroke: ProgressRingProps['trackStroke'] =
    'stroke-surface-200-800';
  @Input() trackClasses: ProgressRingProps['trackClasses'] = '';
  // Meter
  @Input() meterBase: ProgressRingProps['meterBase'] = 'fill-none';
  @Input() meterStroke: ProgressRingProps['meterStroke'] = 'stroke-primary-500';
  @Input() meterTransition: ProgressRingProps['meterTransition'] =
    'transition-[stroke-dashoffset]';
  @Input() meterDuration: ProgressRingProps['meterDuration'] = 'duration-100';
  @Input() meterClasses: ProgressRingProps['meterClasses'] = '';
  // Label
  @Input() label: ProgressRingProps['label'] = undefined;
  @Input() labelBase: ProgressRingProps['labelBase'] = '';
  @Input() labelFill: ProgressRingProps['labelFill'] = 'fill-surface-950-50';
  @Input() labelFontSize: ProgressRingProps['labelFontSize'] = 96; // px
  @Input() labelFontWeight: ProgressRingProps['labelFontWeight'] = 'bold';
  @Input() labelClasses: ProgressRingProps['labelClasses'] = '';
  // Snippets - This is achieved through (named) content projection
  // children
  @ContentChild('children', { read: TemplateRef }) children!: TemplateRef<any>;

  baseSize = 520; // px
  get radius() {
    return this.baseSize / 2 - this.strokeWidth! / 2;
  }
  get circumference() {
    return this.radius * 2 * Math.PI;
  }

  dashoffset = this.calcDashOffset();

  calcDashOffset() {
    const v = this.value !== undefined ? this.value : 25;
    const percent = (100 * v) / this.max!;
    return this.circumference - (percent / 100) * this.circumference;
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['value'] || changes['max']) {
      this.dashoffset = this.calcDashOffset();
    }
  }

  percentage(value: number | undefined) {
    if (value === undefined) return '';
    return `${value}%`;
  }

  get rxValueMax() {
    if (this.value === undefined) return '';
    if (this.max === undefined) return '';
    return this.value / this.max;
  }

  get rxSvgClass(): string {
    let classes = `${this.svgBase} ${this.svgClasses}`;
    if (this.value === undefined) {
      classes += ' animate-spin';
    }
    return classes;
  }

  get rxTransform() {
    return `rotate(-90 ${this.baseSize / 2} ${this.baseSize / 2})`;
  }

  get rxSvgViewBox() {
    return `0 0 ${this.baseSize} ${this.baseSize}`;
  }
}
