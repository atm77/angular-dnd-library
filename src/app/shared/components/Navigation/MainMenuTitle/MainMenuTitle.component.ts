import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'main-menu-title',
  templateUrl: 'MainMenuTitle.component.html',
  styleUrls: ['MainMenuTitle.styles.scss']
})

export class MainMenuTitleComponent implements OnInit {

  @Input() topSubtitle: string;
  @Input() mainTitle: string;

  constructor() { }

  ngOnInit() { }
}
