import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NavContextService } from '../nav-context.service';
import { NavBarProps, NavigationParent } from '../types';

@Component({
  selector: 'skeleton-nav-bar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css',
  providers: [NavContextService],
})
export class NavBar {
  private _value: NavBarProps['value'] = '';

  @Input()
  get value(): NavBarProps['value'] {
    return this._value;
  }
  set value(val: NavBarProps['value']) {
    this._value = val;
    this.ctx.value.set(val || '');
    this.valueChange.emit(val);
    this.onChange.emit(val);
  }

  @Output() valueChange = new EventEmitter<any>();

  // Root
  @Input() base: NavBarProps['base'] = 'h-full flex flex-col';
  @Input() background: NavBarProps['background'] =
    'preset-filled-surface-100-900';
  @Input() width: NavBarProps['width'] = 'min-w-["320px"] w-full';
  @Input() height: NavBarProps['height'] = 'h-20';
  @Input() padding: NavBarProps['padding'] = 'p-1';
  @Input() classes: NavBarProps['classes'] = '';
  // Tiles
  @Input() tilesBase: NavBarProps['tilesBase'] = 'flex-1 flex';
  @Input() tilesFlexDirection: NavBarProps['tilesFlexDirection'] = '';
  @Input() tilesJustify: NavBarProps['tilesJustify'] = 'justify-center';
  @Input() tilesItems: NavBarProps['tilesItems'] = 'items-center';
  @Input() tilesGap: NavBarProps['tilesGap'] = 'gap-1';
  @Input() tilesClasses: NavBarProps['tilesClasses'] = '';
  // Events - This are @Output() in Angular, found in the properties of the component
  // onchange
  @Output() onChange = new EventEmitter<string>();

  // Snippets - This is achieved through (named) content projection
  // children

  onSelectionHandler(id: string) {
    this.onChange.emit(id);
  }

  constructor(private ctx: NavContextService) {
    this.ctx.parent.set(NavigationParent.Bar);
    this.ctx.value.set(this.value || '');
    this.ctx.expanded.set(false);
    this.ctx.onSelectionHandler = this.onSelectionHandler.bind(this);
  }
}
