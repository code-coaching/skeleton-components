import {
  Component,
  ContentChild,
  ElementRef,
  EventEmitter,
  Input,
  Output,
  TemplateRef,
  ViewChild,
} from '@angular/core';
import { SwitchProps } from './types';

@Component({
  selector: 'switch',
  standalone: true,
  imports: [],
  templateUrl: './switch.component.html',
  styleUrl: './switch.component.css',
})
export class Switch {
  @Input({ required: true }) id!: SwitchProps['id'];
  @Input({ required: true }) name!: SwitchProps['name'];
  @Input() checked: SwitchProps['checked'] = false;
  @Input() disabled: SwitchProps['disabled'] = false;
  @Input() compact: SwitchProps['compact'] = false;
  @Input() labelledby?: SwitchProps['labelledby'];
  @Input() describedby?: SwitchProps['describedby'];
  @Input() base: SwitchProps['base'] =
    'inline cursor-pointer transition duration-200';
  @Input() stateInactive: SwitchProps['stateInactive'] =
    'preset-filled-surface-200-800';
  @Input() stateActive: SwitchProps['stateActive'] =
    'preset-filled-primary-500';
  @Input() stateDisabled: SwitchProps['stateDisabled'] =
    'opacity-50 cursor-not-allowed';
  @Input() width: SwitchProps['width'] = 'w-10';
  @Input() height: SwitchProps['height'] = 'h-6';
  @Input() padding: SwitchProps['padding'] = 'p-0.5';
  @Input() rounded: SwitchProps['rounded'] = 'rounded-full';
  @Input() hover: SwitchProps['hover'] =
    'hover:brightness-90 dark:hover:brightness-110';
  @Input() classes: SwitchProps['classes'] = '';
  @Input() thumbBase: SwitchProps['thumbBase'] =
    'right-0 aspect-square h-full flex justify-center items-center text-right';
  @Input() thumbInactive: SwitchProps['thumbInactive'] =
    'preset-filled-surface-50-950';
  @Input() thumbActive: SwitchProps['thumbActive'] =
    'bg-surface-50 text-surface-contrast-50';
  @Input() thumbRounded: SwitchProps['thumbRounded'] = 'rounded-full';
  @Input() thumbTranslateX: SwitchProps['thumbTranslateX'] = 'translate-x-4';
  @Input() thumbTransition: SwitchProps['thumbTransition'] = 'transition';
  @Input() thumbEase: SwitchProps['thumbEase'] = 'ease-in-out';
  @Input() thumbDuration: SwitchProps['thumbDuration'] = 'duration-200';
  @Input() thumbClasses: SwitchProps['thumbClasses'] = '';
  @Input() iconInactiveBase: SwitchProps['iconInactiveBase'] =
    'pointer-events-none';
  @Input() iconActiveBase: SwitchProps['iconActiveBase'] =
    'pointer-events-none';

  // Events - This are @Output() in Angular, found in the properties of the component
  // onCheckedChange: () => {}
  @Output() onCheckedChange = new EventEmitter<boolean>();

  // Snippets - This is achieved through (named) content projection 
  // inactiveChild,
  // activeChild
  @ContentChild('inactiveChild', { static: true }) inactiveChild!: ElementRef;
  @ContentChild("activeChild", { static: true }) activeChild!: ElementRef;


  ngOnInit() {
    this.checked = this.checked;
    if (this.compact) {
      this.setCompactMode();
    }
    console.log(this.activeChild);
    console.log(this.inactiveChild);
  }

  setCompactMode() {
    this.base = this.thumbBase;
    this.height = '';
    this.thumbInactive = this.stateInactive;
    this.thumbActive = this.stateActive;
    this.thumbTranslateX = '';
    this.padding = '';
  }

  toggle() {
    if (this.disabled) return;
    this.checked = !this.checked;
    this.onCheckedChange.emit(this.checked);
  }

  get rxTrackState(): string {
    const computed = this.checked ? this.stateActive : this.stateInactive;
    return computed ?? '';
  }

  get rxThumbState(): string {
    const computed = this.checked
      ? `${this.thumbActive} ${this.thumbTranslateX}`
      : this.thumbInactive;
    return computed ?? '';
  }

  get rxDisabled(): string {
    const computed = this.disabled ? this.stateDisabled : '';
    return computed ?? '';
  }

  get buttonClass(): string {
    return `${this.base} ${this.rxTrackState} ${this.width} ${this.height} ${this.padding} ${this.rounded} ${this.hover} ${this.rxDisabled} ${this.classes}`;
  }

  get thumbClass(): string {
    return `${this.thumbBase} ${this.rxThumbState} ${this.thumbRounded} ${this.thumbTransition} ${this.thumbEase} ${this.thumbDuration} ${this.thumbClasses}`;
  }
}
