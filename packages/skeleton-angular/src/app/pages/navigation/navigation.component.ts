import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NavBar, NavRail, NavTile } from 'lib';
import { LucideAngularModule } from 'lucide-angular';

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [LucideAngularModule, NavBar, NavTile, NavRail, CommonModule],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.css',
})
export class NavigationComponent {
  navBarModel = '0';
  expanded = false;

  onChangeHandler(value: string) {
    this.navBarModel = value;
  }

  toggleExpanded() {
    this.expanded = !this.expanded;
  }

  get headerLogo() {
    return `font-bold ${this.expanded ? 'type-scale-5' : 'type-scale-1'}`;
  }
}
