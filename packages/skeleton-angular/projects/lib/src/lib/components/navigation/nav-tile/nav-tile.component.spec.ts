import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavTile } from './nav-tile.component';

describe('NavTile', () => {
  let component: NavTile;
  let fixture: ComponentFixture<NavTile>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavTile]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavTile);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
