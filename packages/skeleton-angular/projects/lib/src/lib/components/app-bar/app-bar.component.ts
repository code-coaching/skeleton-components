import { Component, ContentChild, ContentChildren, ElementRef, Input, QueryList, TemplateRef } from '@angular/core';
import { AppBarProps } from './types';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'skeleton-app-bar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app-bar.component.html',
  styleUrl: './app-bar.component.css'
})
export class AppBar {
  // Root
  @Input() base: AppBarProps['base'] = 'w-full flex flex-col';
  @Input() background: AppBarProps['background'] = 'bg-surface-100-900';
  @Input() spaceY: AppBarProps['spaceY'] = 'space-y-4';
  @Input() border: AppBarProps['border'] = '';
  @Input() padding: AppBarProps['padding'] = 'p-4';
  @Input() shadow: AppBarProps['shadow'] = '';
  @Input() classes: AppBarProps['classes'] = '';
  // Toolbar
  @Input() toolbarBase: AppBarProps['toolbarBase'] = 'flex justify-between';
  @Input() toolbarGridCols: AppBarProps['toolbarGridCols'] = 'grid-cols-[auto_1fr_auto]';
  @Input() toolbarGap: AppBarProps['toolbarGap'] = 'gap-4';
  @Input() toolbarClasses: AppBarProps['toolbarClasses'] = '';
  // Lead
  @Input() leadBase: AppBarProps['leadBase'] = 'flex';
  @Input() leadSpaceX: AppBarProps['leadSpaceX'] = 'space-x-4 rtl:space-x-reverse';
  @Input() leadPadding: AppBarProps['leadPadding'] = '';
  @Input() leadClasses: AppBarProps['leadClasses'] = '';
  // Center
  @Input() centerBase: AppBarProps['centerBase'] = 'grow';
  @Input() centerAlign: AppBarProps['centerAlign'] = 'text-center';
  @Input() centerPadding: AppBarProps['centerPadding'] = '';
  @Input() centerClasses: AppBarProps['centerClasses'] = '';
  // Trail
  @Input() trailBase: AppBarProps['trailBase'] = 'flex';
  @Input() trailSpaceX: AppBarProps['trailSpaceX'] = 'space-x-4 rtl:space-x-reverse';
  @Input() trailPadding: AppBarProps['trailPadding'] = '';
  @Input() trailClasses: AppBarProps['trailClasses'] = '';
  // Headline
  @Input() headlineBase: AppBarProps['headlineBase'] = 'w-full';
  @Input() headlineClasses: AppBarProps['headlineClasses'] = '';
  // Snippets - This are named slots in Vue, found in the template
  // children, - This is the default content projection in Angular
  // lead,
  // trail,
  // headline
  @ContentChild('lead', { read: TemplateRef }) lead!: TemplateRef<any>;
  @ContentChild('trail', { read: TemplateRef }) trail!: TemplateRef<any>;
  @ContentChild('headline', { read: TemplateRef }) headline!: TemplateRef<any>;
}
