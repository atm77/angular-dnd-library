import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'shared-main-menu-title',
  templateUrl: 'MainMenuTitle.component.html',
  styleUrls: ['MainMenuTitle.component.scss']
})

export class MainMenuTitleComponent implements OnInit {

  @Input() topSubtitle: string;
  @Input() mainTitle: string;

  constructor() { }

  ngOnInit() { }
}
