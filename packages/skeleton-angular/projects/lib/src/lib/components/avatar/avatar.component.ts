import { Component, Input } from '@angular/core';
import { AvatarProps } from './types';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'skeleton-avatar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './avatar.component.html',
  styleUrl: './avatar.component.css',
})
export class Avatar {
  @Input() src: AvatarProps['src'] = '';
  @Input() alt: AvatarProps['alt'] = '';
  @Input() filter: AvatarProps['filter'] = '';
  // Root
  @Input() base: AvatarProps['base'] = 'overflow-hidden isolate';
  @Input() background: AvatarProps['background'] = 'bg-surface-400-600';
  @Input() size: AvatarProps['size'] = 'size-16';
  @Input() font: AvatarProps['font'] = '';
  @Input() border: AvatarProps['border'] = '';
  @Input() rounded: AvatarProps['rounded'] = 'rounded-full';
  @Input() shadow: AvatarProps['shadow'] = '';
  @Input() classes: AvatarProps['classes'] = '';
  // Image
  @Input() imageBase: AvatarProps['imageBase'] = 'w-full object-cover';
  @Input() imageClasses: AvatarProps['imageClasses'] = '';
  // Snippets - This is achieved through (named) content projection
  // children

  get styleFilter() {
    return this.filter ? `url(${this.filter})` : ''
  }
}
