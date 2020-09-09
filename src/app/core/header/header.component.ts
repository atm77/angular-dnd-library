import { Component, OnInit } from '@angular/core';

import { MenuService } from '../services/menu.service';

@Component({
  selector: 'header-toolbar',
  templateUrl: 'header.component.html',
  styleUrls: ['./styles.scss']
})

export class HeaderComponent implements OnInit {
  constructor(private menuService: MenuService) { }

  openSideNav() {
    this.menuService.handleToogleSideBar()
  }

  ngOnInit() { }
}
