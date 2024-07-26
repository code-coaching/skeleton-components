import { CommonModule, NgTemplateOutlet } from '@angular/common';
import {
  Component,
  ContentChild,
  EventEmitter,
  HostBinding,
  Input,
  Output,
  SimpleChanges,
  TemplateRef,
} from '@angular/core';
import { NavContextService } from '../nav-context.service';
import { NavigationParent, NavRailProps } from '../types';

@Component({
  selector: 'skeleton-nav-rail',
  standalone: true,
  imports: [NgTemplateOutlet, CommonModule],
  templateUrl: './nav-rail.component.html',
  styleUrl: './nav-rail.component.css',
  providers: [NavContextService],
})
export class NavRail {
  private _value: NavRailProps['value'] = '';

  @Input()
  get value(): NavRailProps['value'] {
    return this._value;
  }
  set value(val: NavRailProps['value']) {
    this._value = val;
    this.ctx.value.set(val || '');
    this.valueChange.emit(val);
    this.onChange.emit(val);
  }

  @Output() valueChange = new EventEmitter<any>();

  @Input() expanded: NavRailProps['expanded'] = false;
  // Root
  @Input() base: NavRailProps['base'] = 'h-full flex flex-col';
  @Input() background: NavRailProps['background'] =
    'preset-filled-surface-100-900';
  @Input() padding: NavRailProps['padding'] = 'p-1';
  @Input() width: NavRailProps['width'] = 'w-24';
  @Input() widthExpanded: NavRailProps['widthExpanded'] = 'w-64';
  @Input() height: NavRailProps['height'] = 'h-full';
  @Input() classes: NavRailProps['classes'] = '';
  // Header
  @Input() headerBase: NavRailProps['headerBase'] = 'flex';
  @Input() headerFlexDirection: NavRailProps['headerFlexDirection'] =
    'flex-col';
  @Input() headerJustify: NavRailProps['headerJustify'] = 'justify-center';
  @Input() headerItems: NavRailProps['headerItems'] = 'items-center';
  @Input() headerGap: NavRailProps['headerGap'] = 'gap-1';
  @Input() headerClasses: NavRailProps['headerClasses'] = '';
  // Tiles
  @Input() tilesBase: NavRailProps['tilesBase'] = 'flex-1 flex';
  @Input() tilesFlexDirection: NavRailProps['tilesFlexDirection'] = 'flex-col';
  @Input() tilesJustify: NavRailProps['tilesJustify'] = 'justify-center';
  @Input() tilesItems: NavRailProps['tilesItems'] = 'items-center';
  @Input() tilesGap: NavRailProps['tilesGap'] = 'gap-1';
  @Input() tilesClasses: NavRailProps['tilesClasses'] = '';
  // Footer
  @Input() footerBase: NavRailProps['footerBase'] = 'flex';
  @Input() footerFlexDirection: NavRailProps['footerFlexDirection'] =
    'flex-col';
  @Input() footerJustify: NavRailProps['footerJustify'] = 'justify-center';
  @Input() footerItems: NavRailProps['footerItems'] = 'items-center';
  @Input() footerGap: NavRailProps['footerGap'] = 'gap-1';
  @Input() footerClasses: NavRailProps['footerClasses'] = '';
  // Events - This are @Output() in Angular, found in the properties of the component
  // onchange,
  @Output() onChange = new EventEmitter<string>();
  // Snippets - This is achieved through (named) content projection
  // header,
  // tiles,
  // footer,
  @ContentChild('header', { read: TemplateRef }) header!: TemplateRef<any>;
  @ContentChild('tiles', { read: TemplateRef }) tiles!: TemplateRef<any>;
  @ContentChild('footer', { read: TemplateRef }) footer!: TemplateRef<any>;

  onSelectionHandler(id: string) {
    this.onChange.emit(id);
  }

  constructor(private ctx: NavContextService) {
    this.ctx.parent.set(NavigationParent.Rail);
    this.ctx.value.set(this.value || '');
    this.ctx.expanded.set(false);
    this.ctx.onSelectionHandler = this.onSelectionHandler.bind(this);
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['expanded']) {
      this.ctx.expanded.set(changes['expanded'].currentValue);
    }
  }

  get rxWidth() {
    return this.ctx.expanded() ? this.widthExpanded : this.width;
  }

  @HostBinding('class')
  get hostClasses() {
    return this.rxWidth;
  }
}
