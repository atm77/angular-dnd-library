
import { Component, Input } from '@angular/core';

@Component({
    selector: 'side-nav',
    templateUrl: './sidenav.component.html',
    styleUrls: ['./styles.scss'],
})
export class SideNavComponent {

  centered = false;
  disabled = false;
  unbounded = false;

  radius: number;
  color: string;

}

@Component({
  selector: 'nav-list-item',
  template: `<mat-list-item>
              <span class="item-description">
                <a href="#">{{ desc }}</a>
              </span>
            </mat-list-item>`,
  styleUrls: ['./styles.scss'],
})
export class SideNavItemComponent {

  @Input() desc: string;

}
