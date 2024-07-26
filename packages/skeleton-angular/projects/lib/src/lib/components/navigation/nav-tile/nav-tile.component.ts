import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NavContextService } from '../nav-context.service';

@Component({
  selector: 'skeleton-nav-tile',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './nav-tile.component.html',
  styleUrl: './nav-tile.component.css',
})
export class NavTile {
  @Input() id?: string;
  @Input() href?: string;
  @Input() target: string = '_self';
  @Input() label?: string;
  @Input() labelExpanded?: string;
  @Input() title?: string;
  @Input() selected = false;
  // Root
  @Input() base = 'flex items-center';
  @Input() width = 'w-full';
  @Input() aspect = 'aspect-square';
  @Input() background = '';
  @Input() hover = 'hover:preset-filled-surface-50-950';
  @Input() active = 'preset-filled-primary-500';
  @Input() padding = 'p-2';
  @Input() gap = 'gap-1';
  @Input() rounded = 'rounded-container';
  @Input() classes = 'flex-col justify-center';
  // Expanded
  @Input() expandedPadding = 'py-3 px-4';
  @Input() expandedGap = 'gap-4';
  @Input() expandedClasses = '';
  // Label (base)
  @Input() labelBase = 'type-scale-1';
  @Input() labelClasses = '';
  // Label (expanded)
  @Input() labelExpandedBase = '';
  @Input() labelExpandedClasses = '';

  @Output() onClick = new EventEmitter<string>();

  constructor(public ctx: NavContextService) {}

  get element(): string {
    return this.href ? 'a' : 'button';
  }

  get type(): string | undefined {
    return this.href ? undefined : 'button';
  }

  get role(): string | undefined {
    return this.href ? undefined : 'button';
  }

  get rxSize(): string {
    return this.ctx.parent() === 'bar' ? 'h-full' : `${this.aspect}`;
  }

  get classesCollapsed(): string {
    return `${this.rxSize} ${this.padding} ${this.gap} ${this.classes}`;
  }

  get classesExtended(): string {
    return `${this.expandedPadding} ${this.expandedGap} ${this.expandedClasses}`;
  }

  get rxMode(): string {
    return this.ctx.expanded() ? this.classesExtended : this.classesCollapsed;
  }

  get rxBackground(): string {
    return this.selected || this.ctx.value() === this.id
      ? this.active
      : `${this.background} ${this.hover}`;
  }

  onClickHandler() {
    if (!this.id) return;

    this.onClick.emit(this.id);
    if (this.ctx.onSelectionHandler && this.id) {
      this.ctx.onSelectionHandler(this.id);
    }
  }

  get componentClasses(): string {
    return `${this.base} ${this.width} ${this.rounded} ${this.rxBackground} ${this.rxMode}`;
  }
}
