
import { Component, Input, OnInit } from '@angular/core';

import { MenuService } from '../services/menu.service';

@Component({
    selector: 'side-nav',
    templateUrl: './sidenav.component.html',
    styleUrls: ['./styles.scss'],
})
export class SideNavComponent implements OnInit {

  constructor(private menuService: MenuService) {

  }

  ngOnInit(): void {
    this.menuService.currentSideBarOpenedStatus.subscribe( isOpened => this.opened = isOpened )
  }

  centered = false;
  disabled = false;
  unbounded = false;

  radius: number;
  color: string;
  opened: boolean;

}

@Component({
  selector: 'nav-list-item',
  template: `<mat-list-item class="menu-item">
              <span class="item-description">
                <a href="#">{{ desc }}</a>
              </span>
            </mat-list-item>`,
  styleUrls: ['./styles.scss'],
})
export class SideNavItemComponent {

  @Input() desc: string;

}
