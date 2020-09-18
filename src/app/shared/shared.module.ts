import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainMenuTitleComponent } from './components/Navigation/MainMenuTitle/MainMenuTitle.component';

@NgModule( {
  declarations: [
    MainMenuTitleComponent,
  ],
  // in use in this module
  imports: [
    CommonModule,
  ],
  // exported to the external world
  exports: [
    MainMenuTitleComponent,
  ]
})
export class SharedModule { }

