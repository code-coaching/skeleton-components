import { Injectable, signal } from '@angular/core';
import { NavContext, NavigationParent } from './types';

@Injectable()
export class NavContextService implements NavContext {

  parent = signal(NavigationParent.None);
  value = signal('');
  expanded = signal(false);
  onSelectionHandler = (_id: string) => {};

}
